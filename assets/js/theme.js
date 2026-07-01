/* =========================================================
   THEME.JS
========================================================= */

function initThemeToggle() {

    const themeToggle = document.getElementById('themeToggle');

    if (!themeToggle) {
        console.warn('themeToggle não encontrado');
        return;
    }

    function updateThemeUI() {

        const isDark = document.body.classList.contains('dark');

        themeToggle.innerHTML = isDark
            ? '☀️'
            : '🌙';

        localStorage.setItem(
            'continuum-theme',
            isDark ? 'dark' : 'light'
        );
    }

    // aplica tema salvo
    if (localStorage.getItem('continuum-theme') === 'dark') {
        document.body.classList.add('dark');
    }

    updateThemeUI();

themeToggle.onclick = () => {

    document.body.classList.toggle('dark');

    updateThemeUI();

};

}

/* =========================================================
   AUTO INIT
========================================================= */

document.addEventListener('DOMContentLoaded', () => {

    // se o botão já existir
    initThemeToggle();

    // observa componentes carregados via fetch()
    const observer = new MutationObserver(() => {

        if (document.getElementById('themeToggle')) {

            initThemeToggle();

        }

    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

});
