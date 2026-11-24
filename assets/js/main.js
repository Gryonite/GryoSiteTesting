document.addEventListener("DOMContentLoaded", () => {

    // Highlight the current navigation page
    const currentPath = window.location.pathname.replace(/\/$/, "");

    document.querySelectorAll(".navbar-links a").forEach(link => {
        const linkPath = new URL(link.href).pathname.replace(/\/$/, "");

        if (linkPath === currentPath) {
            link.classList.add("active");
        }
    });

});
