let showHamburgerMenu = document.getElementById("hamburger-icon")
let navbar = document.querySelector(".navbar")
let container = document.querySelector(".container")
let left = document.querySelector(".left")
let form = document.querySelector(".form")
let table = document.querySelector(".table-wrapper")
let divColor = document.querySelector(".div-color")

showHamburgerMenu.addEventListener("click",()=>{
    navbar.style.display=="none"?
    navbar.style.display="block":
    navbar.style.display="none"

    // if(navbar.style.display="none"){
    //     navbar.style.display="block"
    // }
    // else if(navbar.style.display="block"){
    //             navbar.style.display="none"
    // }

})

divColor.addEventListener("click", ()=>{
    navbar.style.display="none"
})

form.addEventListener("click", ()=>{
    navbar.style.display="none"
})

// table.addEventListener("click", ()=>{
//     navbar.style.display="none"
// })

