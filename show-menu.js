let showHamburgerMenu = document.getElementById("hamburger-icon")
let navbar = document.querySelector(".navbar")
let container = document.querySelector(".container")
let left = document.querySelector(".left")
let form = document.querySelector(".form")
let table = document.querySelector(".table-wrapper")

let isOpen = false;

showHamburgerMenu.addEventListener('click', function() {
  if (isOpen) {
    navbar.style.display = 'none';
    isOpen = false;
  } else {
    navbar.style.display = 'block';
    isOpen = true;
  }
});


form.addEventListener("click", ()=>{
    navbar.style.display="none"
})

table.addEventListener("click", ()=>{
    navbar.style.display="none"
})

