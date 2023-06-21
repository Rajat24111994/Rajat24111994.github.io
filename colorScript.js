const body = document.querySelector("body");
const header = document.querySelector("header");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");
toggle.addEventListener("change", () => {
    let h1 = document.getElementsByTagName("h1");
    let h2 = document.getElementsByTagName("h2");
    var elements = document.getElementsByClassName("nav_link");
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.toggle("white");
    }
    for (var i = 0; i < h1.length; i++) {
      h1[i].classList.toggle("text-color");
    }
    for (var i = 0; i < h2.length; i++) {
      h2[i].classList.toggle("text-color");
    }
    var navback = document.getElementsByTagName("nav");
    navback[0].classList.toggle("nav_background");
    body.classList.toggle("dark");
    header.classList.toggle("dark");
    sunIcon.className = sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
    moonIcon.className = moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";

});
