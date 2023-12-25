function menuShow() {
    let menuMobile = document.querySelector(".mobile-menu");
    if (menuMobile.classList.contains("open")){
        menuMobile.classList.remove("open");
        document.querySelector(".icon-menu").src = "./img/botao-de-menu (1).png";
    } else {
        menuMobile.classList.add("open");
        document.querySelector(".icon-menu").src = "./img/Untitled.png";
    }
}