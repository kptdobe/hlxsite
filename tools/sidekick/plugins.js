// This file contains the spark-specific plugins for the sidekick.
(() => {
  const sk = window.hlx && window.hlx.sidekick ? window.hlx.sidekick : window.hlxSidekick;
  if (typeof sk !== 'object') return;

  // TEMPLATES --------------------------------------------------------------------

  sk.add({
    id: 'templates',
    condition: (sk) => sk.isEditor() && (sk.location.search.includes('.docx&') || sk.location.search.includes('doc.aspx?') || sk.location.search.includes('.md&')),
    button: {
      text: 'Templates',
      action: () => {
        const { config, location } = sk;
        window.open(`https://${config.host || config.innerHost}/tools/templates/picker.html`, 'hlx-sidekick-spark-templates');
      },
    },
  });

  // TRANSLATIONS --------------------------------------------------------------------

  sk.add({
    id: 'translation',
    // condition: (sk) => sk.isEditor() && (sk.location.search.includes('.docx&') || sk.location.search.includes('doc.aspx?') || sk.location.search.includes('.md&')),
    button: {
      text: 'Send for translation',
      action: async (evt) => {
        const sk = window.hlx && window.hlx.sidekick ? window.hlx.sidekick : window.hlxSidekick;
        const btn = evt.target;

        sk.showModal('', true);
        $modal = document.querySelector('.hlx-sk-overlay > div');
        $modal.classList.remove('wait');

        const res = await fetch('/language-map.json');
        const json = await res.json();

        const $container = createTag('div', {'class': 'translation'});

        if (json && json.data) {
          const currentPage = `/${new URL(window.location.href).pathname.match(/\/.*?\/(.*)/)[1]}`;
          const current = json.data.find(e => e.page === currentPage);
          if (current) {
            for(let h in current) {
              const localePage = current[h];
              if (h !== 'page' && localePage === '') {
                $container.innerHTML += `<input type="checkbox" value="${h}"><label>${h}</label><br>`;
              }
            }
          }
        }
        $container.innerHTML += `</label>Click to start translation workflow for selected languages / locales</label>`;
        $container.innerHTML += `<button>Start</button>`;
        $container.innerHTML += `<button onclick="${() => { sk.hideModal()} }">Close</button>`;

        $modal.appendChild($container);

        $modal.parentElement.onclick = (evt) => {
          evt.target.onclick = null;
        };

        $modal.onclick = (evt) => {
          evt.stopPropagation();
        };
      
        const style = document.createElement('style');
        style.textContent = `
        .hlx-sk-overlay .translation {
          width: 376px;
          box-shadow: var(--hlx-sk-shadow);
        }
        .hlx-sk-overlay > div {
          text-align: center;
          background-color: transparent;
          box-shadow: none;
        }`;
        $modal.appendChild(style);
      }
    },
  });

})();