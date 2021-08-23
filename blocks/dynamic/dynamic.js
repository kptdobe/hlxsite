import Context from '../../scripts/context.js';

export default function decorate(block) {
  block.querySelectorAll(':scope > div').forEach((row) => {
    const divs = row.querySelectorAll(':scope > div');

    if (divs && divs.length === 2) {
      const id = divs[0].innerHTML;
      const content = divs[1];
      content.setAttribute('data-id', id);

      block.append(content);
      divs[0].parentNode.remove();
    }
  });

  Context.addListener(() => {
    block.querySelectorAll(':scope > div').forEach((div) => {
      const id = div.getAttribute('data-id');
      if (Context.resolve(id)) {
        div.classList.remove('hidden');
      } else {
        div.classList.add('hidden');
      }
    });
  });

  Context.update();
}
