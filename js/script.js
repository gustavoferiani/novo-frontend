document.addEventListener('DOMContentLoaded', () => {
    const toggleTheme = document.getElementById("toggleTheme");
    const rootHtml = document.documentElement;
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    const menuLinks = document.querySelectorAll(".menu-link");
    const menuHamburger = document.getElementById('menuHamburger');
    const menuMobile = document.getElementById('menuMobile');
    const icon = menuHamburger?.querySelector('i');

    // Alternar tema (claro/escuro)
    function changeTheme() {
        const currentTheme = rootHtml.getAttribute("data-theme");
        const isDark = currentTheme === "dark";
        rootHtml.setAttribute("data-theme", isDark ? "light" : "dark");
        toggleTheme.classList.toggle("bi-sun", !isDark);
        toggleTheme.classList.toggle("bi-moon-stars", isDark);
    }

    if (toggleTheme) {
        toggleTheme.addEventListener("click", changeTheme);
    }

    // Acordeões
    accordionHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const accordionItem = header.parentElement;
            accordionItem.classList.toggle("active");
        });
    });

    // Ativar link clicado no menu
    menuLinks.forEach(item => {
        item.addEventListener("click", () => {
            menuLinks.forEach(i => i.classList.remove("active"));
            item.classList.add("active");

            // Fecha o menu mobile ao clicar no link
            if (menuMobile?.classList.contains('active')) {
                menuMobile.classList.remove('active');
                if (icon) {
                    icon.classList.remove('bi-x-lg');
                    icon.classList.add('bi-list');
                }
            }
        });
    });

    // Alternar menu mobile e ícone
    function toggleMenu() {
        const isOpen = menuMobile.classList.toggle('active');
        if (icon) {
            icon.classList.toggle('bi-list', !isOpen);
            icon.classList.toggle('bi-x-lg', isOpen);
        }
    }

    if (menuHamburger) {
        menuHamburger.addEventListener('click', toggleMenu);
    }
});
