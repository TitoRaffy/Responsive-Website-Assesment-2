// javascipt for the slider section of the website
const cont = document.querySelector(".sld-cont")
const menu = document.querySelectorAll(".menu-prod")

// which ever brand you press on the menu-prod section, the slider will immediately go to the brand that you have selected
menu.forEach((item, index) => {
    item.addEventListener("click", () => {
        cont.style.transform =  `translateX(${-100 * index}vw)`; // this is the amount of pixels that the screen will scroll too, therefore allowing the picture to show on the main page
    });
});