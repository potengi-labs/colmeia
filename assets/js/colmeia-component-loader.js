/* =========================================================
   COLMEIA COMPONENT LOADER
========================================================= */

async function loadComponent(id, url) {

    const container =
        document.getElementById(id);

    if (!container) {

        console.warn(
            `Container não encontrado: ${id}`
        );

        return;
    }

    try {

        const response =
            await fetch(url);

        if (!response.ok) {

            throw new Error(
                `Erro ${response.status}: ${url}`
            );

        }

        container.innerHTML =
            await response.text();

    } catch (error) {

        console.error(
            `Falha ao carregar ${url}`,
            error
        );

        container.innerHTML = `
            <div class="component-error">
                Erro ao carregar componente.
            </div>
        `;
    }

}

/* =========================================================
   MENU MOBILE
========================================================= */

function initMenuToggle() {

    const menuToggle =
        document.getElementById(
            "menuToggle"
        );

    const sidebar =
        document.querySelector(
            ".sidebar"
        );

    if (!menuToggle || !sidebar)
        return;

    menuToggle.onclick = (e) => {

        e.stopPropagation();

        sidebar.classList.toggle(
            "show"
        );

    };

    document.addEventListener(
        "click",
        (e) => {

            if (
                !sidebar.contains(
                    e.target
                ) &&
                !menuToggle.contains(
                    e.target
                )
            ) {

                sidebar.classList.remove(
                    "show"
                );

            }

        }
    );

}

/* =========================================================
   INIT
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    async () => {

        await Promise.all([

            loadComponent(
                "header-container",
                "assets/components/colmeia-header.html"
            ),

            loadComponent(
                "sidebar-container",
                "assets/components/colmeia-sidebar.html"
            ),

            loadComponent(
                "footer-container",
                "assets/components/colmeia-footer.html"
            )

        ]);

        /* menu */

        initMenuToggle();

        /* theme */

        if (
            typeof initTheme
            === "function"
        ) {

            initTheme();

        }

        /* futuras inicializações */

        if (
            typeof initEditor
            === "function"
        ) {

            initEditor();

        }

        if (
            typeof initCharts
            === "function"
        ) {

            initCharts();

        }

    }
);
