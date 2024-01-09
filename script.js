const catLinks = document.querySelectorAll(".menu-item-object-category")

catLinks.forEach((catLink) => {
    catLink.addEventListener("click",(e) => {
        e.preventDefault();
    });
});

