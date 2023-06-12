import './style.scss'

let mainMenu = document.getElementById("main-menu")
let page1 = document.getElementById("page-1");
let pageStart = document.getElementById("page-start");
let navbar = document.getElementById("main-nav");
let navPos = navbar.getBoundingClientRect().top;
let navbarLinks = document.querySelectorAll("nav a");


window.addEventListener("scroll", e => {
  
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
  
    navbarLinks.forEach(link => {
      let section = document.querySelector(link.hash);
      if (scrollPos + 150 > section.offsetTop && scrollPos + 150 < section.offsetTop + section.offsetHeight ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
});