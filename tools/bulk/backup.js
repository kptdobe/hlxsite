/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
/* eslint-disable no-use-before-define */
/*  global window, document */

import { getConfig } from '../config.js';

import { 
  getDirectoryHandle, 
  saveFile as saveFileToFilesystem,
  readFile as readFileFromFilesystem,
} from '../filesystem.js';

import {
  saveFile as saveFileToSP,
  connect as connectToSP
} from '../sharepoint.js';

import { md2word } from '../helix/md2word-web.bundle.js';


const status = document.getElementById('status');
const loading = document.getElementById('loading');
const STATUS_LEVELS = ['level-0', 'level-4'];

let directoryHandle;

function setStatus(msg, level = 'level-4') {
  status.classList.remove(STATUS_LEVELS.filter((l) => l !== level));
  status.classList.add(level);
  status.innerHTML = msg;
}

function loadingON(txt) {
  loading.classList.remove('hidden');
  setStatus(txt);
}

function loadingOFF() {
  loading.classList.add('hidden');
}

function setError(msg, error) {
  setStatus(msg, 'level-0');
  // eslint-disable-next-line no-console
  console.error(msg, error);
}


async function preview(path) {
  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  await fetch(`https://admin.hlx3.page/preview/kptdobe/hlxsite/main${path}`, { method: 'POST' });
  await delay(1000);
}

async function sync() {
  if (!directoryHandle) {
    directoryHandle = await getDirectoryHandle();
  }

  const start = new Date().getTime();
  loadingON('Syncing files...');

  const promises = PATHS.map((path) => {
    return new Promise(async (resolve) => {
      const mdPath = `${path}.md`;
      const res = await fetch(mdPath);
      if (res.ok) {
        const md = await res.text();
        await saveFileToFilesystem(directoryHandle, mdPath, md);
        resolve();
      } else {
        console.error(`Error fetching ${mdPath}`);
      }
    });
  });

  await Promise.all(promises);

  loadingON('All files sync locally.');
  loadingOFF();
  console.log(`Downloaded ${PATHS.length} in ${new Date().getTime()-start}ms.`);
}

async function save() {
  if (!directoryHandle) {
    directoryHandle = await getDirectoryHandle();
  }

  const start = new Date().getTime();
  loadingON('Saving files...');

  const promises = [PATHS[3]].map((path) => {
    return new Promise(async (resolve) => {
      console.log('Saving', path);
      const file = await readFileFromFilesystem(directoryHandle, `${path}.md`);
      const md = await file.text();
      // const md = '# Hello World';
      const word = await md2word(md, console);
      await saveFileToSP(word, `${path}.docx`);
      resolve();
    });
  });

  await Promise.all(promises);

  loadingON('All files saved.');
  loadingOFF();
  console.log(`Saved ${PATHS.length} in ${new Date().getTime()-start}ms.`);
}

async function load() {
  let url = document.querySelector('#load input').value;

  loadingON(`Loading ${url}...`);

  const res = await fetch(`${url}.md`);
  if (res.ok) {
    const md = await res.text();
    document.querySelector('#md textarea').innerHTML = md;
    document.getElementById('md').classList.remove('hidden');
    document.getElementById('save').classList.remove('hidden');
    loadingOFF();
  }


}

function setListeners() {
  document.querySelector('#load button').addEventListener('click', load);
  document.querySelector('#save button').addEventListener('click', save);
}

async function init() {
  setListeners();
  loadingON('Initializing the application');
  try {
    await getConfig();
  } catch(err) {
    setError('Something is wrong with the application config', err);
    return;
  }
  loadingON('Config loaded');
  loadingON('Connecting now to Sharepoint...');
  await connectToSP(async () => {
    loadingON('Connected to Sharepoint!');
  });
  loadingON('Application loaded.');
  loadingOFF();
}

export {
  // eslint-disable-next-line import/prefer-default-export
  init,
};