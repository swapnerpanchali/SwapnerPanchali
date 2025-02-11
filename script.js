document.addEventListener("DOMContentLoaded", function() {
    let lastScrollY = window.scrollY;
    const header = document.querySelector(".custom-header");
    const logo = document.getElementById("logoRedirect");

    window.addEventListener("scroll", function() {
        let currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            header.classList.add("show-header");
        } else {
            header.classList.remove("show-header");
        }
        lastScrollY = currentScrollY;
    });

    // Click on "Swapner Panchali" redirects to homepage
    logo.addEventListener("click", function() {
        window.location.href = "https://swapnerpanchali.odoo.com/";
    });
});
