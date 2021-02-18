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
        let $modal = document.querySelector('.hlx-sk-overlay > div > .translation');
        if ($modal) {
          sk.hideModal();
          btn.classList.remove('pressed');
        } else {
          sk.showModal('', true);
          $modal = document.querySelector('.hlx-sk-overlay > div');
          $modal.classList.remove('wait');
          const res = await fetch('/language-map.json');
          const json = await res.json();

          if (json && json.data) {
            const currentPage = `/${new URL(window.location.href).pathname.match(/\/.*?\/(.*)/)[1]}`;
            const current = json.data.find(e => e.page === currentPage);
            if (current) {
              for(let h in current) {
                if (h !== 'page') {
                  const hrefToLocale = current[h];
                  const u = new URL(hrefToLocale);
                  $modal.innerHTML += `<input type="checkbox" value="${h}"><label>${u.pathname}</label><br>`;
                }
              }
            }
          }
        //   $modal.innerHTML = addCard(await itemTransformer(getCardData()),
        //     document.createDocumentFragment()).outerHTML;
        //   function hideCardPreview() {
        //     sk.hideModal();
        //     btn.classList.remove('pressed');
        //   }
        //   $modal.parentElement.onclick = (evt) => {
        //     hideCardPreview();
        //     evt.target.onclick = null;
        //   };
        //   document.body.onkeydown = (evt) => {
        //     if (evt.key === 'Escape') {
        //       hideCardPreview();
        //       evt.target.onkeydown = null;
        //     }
        //   };
        
        //   const style = document.createElement('style');
        //   style.textContent = `
        //   .hlx-sk-overlay .card {
        //     width: 376px;
        //     box-shadow: var(--hlx-sk-shadow);
        //   }
        //   .hlx-sk-overlay > div {
        //     text-align: center;
        //     background-color: transparent;
        //     box-shadow: none;
        //   }`;
        //   $modal.appendChild(style);
        //   btn.classList.add('pressed');
        // }
        }
      }
    },
  });

})();