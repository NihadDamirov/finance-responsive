let labels = document.querySelector(".labels")
let addMenuBtn = document.querySelector(".add")
let closeIcon = document.querySelector(".close-icon")
let closeIconPassive = document.querySelector(".close-icon-passive")
addMenuBtn.addEventListener("click", ()=>{
    labels.style.display="block" ;
})

closeIcon.addEventListener("click", ()=>{
    labels.style.display="none" ;
})

let labelsPassive = document.querySelector(".labels-passive")
let addPassive = document.querySelector(".add-passive")

addPassive.addEventListener("click", ()=>{
    labelsPassive.style.display="block" ;
})

closeIconPassive.addEventListener("click", ()=>{
    labelsPassive.style.display="none" ;
})