(function () {
    window.addEventListener('load', function () {
        const performance = window.performance;
        const loadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
        const footer = document.querySelector("footer");
        if (footer) {
            const p = document.createElement("p");
            p.textContent = `Время загрузки страницы: ${loadTime / 1000} секунд`;
            footer.appendChild(p);
        }
    });

    const menuItems = document.querySelectorAll("header nav div a");
    menuItems.forEach(item => {
        item.addEventListener("mouseover", () => item.classList.add("hover"));
        item.addEventListener("mouseout", () => item.classList.remove("hover"));
    });

    const currentPage = document.location.pathname.split("/").pop();
    menuItems.forEach(item => {
        if (item.getAttribute("href") === currentPage) {
            item.classList.add("active");
        }
    });
})();