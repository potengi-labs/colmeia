/* =========================================================
   CONTINUUM
   Sistema de Integração Programática
========================================================= */

/* =========================================================
   NAVEGAÇÃO ENTRE ABAS PRINCIPAIS
========================================================= */

function initTabs() {

    const tabs = document.querySelectorAll('.menu-tab');
    const contents = document.querySelectorAll('.tab-content');

    if (!tabs.length) return;

    tabs.forEach(tab => {

        tab.addEventListener('click', () => {

            // remove active dos tabs
            tabs.forEach(t => t.classList.remove('active'));

            // remove active dos conteúdos (se existirem)
            contents.forEach(c => {
                if (c) c.classList.remove('active');
            });

            tab.classList.add('active');

            const targetId = tab.dataset.tab;
            const target = document.getElementById(targetId);

            if (target) {
                target.classList.add('active');
            }

        });

    });

}

