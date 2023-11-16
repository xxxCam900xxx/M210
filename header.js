openMenu = document.querySelector("#open-menu");
closeMenu = document.querySelector("#close-menu");
navbar = document.querySelector(".navbar");

openMenu.onclick = function () {
    console.log("open");
    navbar.classList.add("active");
    openMenu.classList.remove("show");
    closeMenu.classList.add("show");
}

closeMenu.onclick = function () {
    console.log("close");
    navbar.classList.remove("active");
    openMenu.classList.add("show");
    closeMenu.classList.remove("show");
}

var prevScrollpos = window.pageYOffset;

// Get the header element and it's position
var headerDiv = document.querySelector("header");
var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    // if scrolling down, let it scroll out of view as normal
    if (prevScrollpos <= currentScrollPos) {
        headerDiv.classList.remove("fixedToTop");
        headerDiv.style.top = "-90px";
    }
    // otherwise if we're scrolling up, fix the nav to the top
    else {
        headerDiv.classList.add("fixedToTop");
        headerDiv.style.top = "0";
    }

    prevScrollpos = currentScrollPos;
}