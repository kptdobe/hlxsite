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
  saveFile as saveFileToSP,
  connect as connectToSP
} from '../sharepoint.js';

import { md2word } from '../helix/md2word-web.bundle.js';


const status = document.getElementById('status');
const loading = document.getElementById('loading');
const STATUS_LEVELS = ['level-0', 'level-4'];

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
  // TODO get from config
  await fetch(`https://admin.hlx3.page/preview/kptdobe/hlxsite/main${path}`, { method: 'POST' });
  await delay(1000);
}

async function save() {
  loadingON('Connecting now to Sharepoint...');
  await connectToSP(async () => {
    loadingON('Connected to Sharepoint!');
    await doSave();
  });
}

async function doSave() {

  const start = new Date().getTime();
  loadingON('Saving file...');

  const md = document.getElementById('md').value;
  const path = getPath();

  const word = await md2word(md, console);
  await saveFileToSP(word, `${path}.docx`);
  
  console.log(`Saved ${path} in ${new Date().getTime()-start}ms.`);
  loadingON('Saved.');

  loadingON('Reloading...');
  await load();

  loadingOFF();
  console.log(`Saved and reloaded ${path} in ${new Date().getTime()-start}ms.`);
}

function getPath() {
  const url = document.getElementById('url').value;

  if (!url || url === '') return '';

  let path = url;
  if (url.startsWith('http')) {
    path = new URL(url).pathname;
  }

  if (path.endsWith('.html')) {
    path = path.substring(0, path.length - 5);
  }

  if (path.endsWith('.md')) {
    path = path.substring(0, path.length - 3);
  }

  return path;
}

async function load() {
  const path = getPath();
  const textarea = document.getElementById('md');
  textarea.value = '';

  loadingON('Triggering preview first...');
  await preview(path);

  loadingON(`Loading ${path}...`);

  const res = await fetch(`${path}.md`, { cache: 'no-store'} );
  if (res.ok) {
    const md = await res.text();
    textarea.value = md;
    textarea.parentNode.classList.remove('hidden');
    loadingOFF();
  }


}

function setListeners() {
  document.querySelector('#load').addEventListener('click', load);
  document.querySelector('#save').addEventListener('click', save);
  document.querySelector('#view').addEventListener('click', () => {
    const path = getPath();
    window.open(`${window.location.origin}${path}`);
  });
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
  loadingON('Application loaded.');
  loadingOFF();
}

export {
  // eslint-disable-next-line import/prefer-default-export
  init,
};