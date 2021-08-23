/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/* eslint-disable no-undef */
function createTag(name, attrs) {
  const el = document.createElement(name);
  if (typeof attrs === 'object') {
    for (const [key, value] of Object.entries(attrs)) {
      el.setAttribute(key, value);
    }
  }
  return el;
}

/**
 * Wraps all the elements identified by the selector with a div.section-wrapper.
 * @param {string} selector selector
 */

function wrap(selector, className) {
  document.querySelectorAll(selector).forEach(($e) => {
    const $wrapper = createTag('div', { class: className });
    $e.parentNode.replaceChild($wrapper, $e);
    $wrapper.appendChild($e);
  });
}

/**
 * Turn leading image into a title section.
 */

function createHeroSection() {
  const $headerImg = document.querySelector('main>div:first-of-type>div>:first-child>img');
  if ($headerImg) {
    const src = $headerImg.getAttribute('src');
    const $wrapper = $headerImg.closest('.section-wrapper');
    $wrapper.style.backgroundImage = `url(${src})`;
    $wrapper.classList.add('hero');
    $headerImg.parentNode.remove();
  }
}

/*
* Decorates a block.
* @param {Element} $block The block element
*/
export function decorateBlock($block) {
 const classes = Array.from($block.classList.values());
 let blockName = classes[0];
 if (!blockName) return;
 const $section = $block.closest('.section-wrapper');
 if ($section) {
   $section.classList.add(`${blockName}-container`.replace(/--/g, '-'));
 }
 const blocksWithVariants = ['recommended-articles'];
 blocksWithVariants.forEach((b) => {
   if (blockName.startsWith(`${b}-`)) {
     const options = blockName.substring(b.length + 1).split('-').filter((opt) => !!opt);
     blockName = b;
     $block.classList.add(b);
     $block.classList.add(...options);
   }
 });

 $block.classList.add('block');
 $block.setAttribute('data-block-name', blockName);
}


/**
 * Loads JS and CSS for a block.
 * @param {Element} $block The block element
 */
 export async function loadBlock($block, callback) {
  if (!$block.getAttribute('data-block-loaded')) {
    $block.setAttribute('data-block-loaded', true);
    const blockName = $block.getAttribute('data-block-name');
    try {
      const mod = await import(`/blocks/${blockName}/${blockName}.js`);
      if (mod.default) {
        await mod.default($block, blockName, document, callback);
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(`failed to load module for ${blockName}`, err);
    }
    loadCSS(`/blocks/${blockName}/${blockName}.css`);
  }
}

/**
 * Loads JS and CSS for all blocks in a container element.
 * @param {Element} $main The container element
 */
async function loadBlocks($main) {
  $main
    .querySelectorAll('div.section-wrapper > div > .block')
    .forEach(async ($block) => loadBlock($block));
}

export function decorateMain($main) {
  // forward compatible pictures redecoration
  decoratePictures($main);
  buildAutoBlocks($main);
  wrapSections($main.querySelectorAll(':scope > div'));
  decorateBlocks($main);
}

async function decoratePage(win = window) {
  const doc = win.document;
  const $main = doc.querySelector('main');
  if ($main) {
    decorateMain($main);
    return loadBlocks($main);
  }
}

decoratePage(window);
