const btnMenuMobile = document.querySelector("#btn-menu-mobile");
const menuMobile = document.querySelector("#menu-mobile")
const itensMenuMobile = document.querySelectorAll("#menu-mobile li")

function menuShow() {
    if (menuMobile.classList.contains("open")) {
        btnMenuMobile.src = "src/assets/menuMobile/button_mobile.svg"
        menuMobile.classList.remove("open");
    }

    else {
        btnMenuMobile.src = "src/assets/menuMobile/close_mobile.svg"
        menuMobile.classList.add("open");
    }
}

itensMenuMobile.forEach( item => {
    item.addEventListener("click", () => {
        btnMenuMobile.src = "src/assets/menuMobile/button_mobile.svg"
        menuMobile.classList.remove("open");
    })
})

