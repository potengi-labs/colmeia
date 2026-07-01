function initThemeToggle() {

    const themeToggle =
        document.getElementById('themeToggle');

    if (!themeToggle) return;

    function updateThemeUI() {

        const isDark =
            document.body.classList.contains('dark');

        themeToggle.innerHTML =
            isDark ? '☀️' : '🌙';

        localStorage.setItem(
            'continuum-theme',
            isDark ? 'dark' : 'light'
        );
    }

    if (
        localStorage.getItem('continuum-theme')
        === 'dark'
    ) {
        document.body.classList.add('dark');
    }

    updateThemeUI();

    themeToggle.onclick = () => {

        document.body.classList.toggle('dark');

        updateThemeUI();

    };

}
