let labels = document.querySelector(".labels")
let right = document.querySelector(".right")
let addMenuBtn = document.querySelector(".add")
let closeIcon = document.querySelector(".close-icon")
let closeIconPassive = document.querySelector(".close-icon-passive")
let blurBg = document.querySelector(".blur-div")

addMenuBtn.addEventListener("click", ()=>{
    labels.style.display="block" ;
    if(labels.style.display="block"){
        // right.style.background = "rgba(0, 0, 0, 0.3)"
        // right.style.backdropFilter = "blur(5px) !important"
        blurBg.style.display ="block"
        blurBg.style.background = "rgba(0, 0, 0, 0.3)";
    }
    else if(labels.style.display="none"){
        blurBg.style.display ="none"
    }
})

closeIcon.addEventListener("click", ()=>{
    labels.style.display="none" ;
    blurBg.style.display ="none"

})

let labelsPassive = document.querySelector(".labels-passive")
let addPassive = document.querySelector(".add-passive")

addPassive.addEventListener("click", ()=>{
    labelsPassive.style.display="block" ;
    if(labelsPassive.style.display="block"){
        // right.style.background = "rgba(0, 0, 0, 0.3)"
        // right.style.backdropFilter = "blur(5px) !important"
        blurBg.style.display ="block"
        blurBg.style.background = "rgba(0, 0, 0, 0.3)";
    }
    else if(labels.style.display="none"){
        blurBg.style.display ="none"
    }
})

closeIconPassive.addEventListener("click", ()=>{
    labelsPassive.style.display="none" ;
    blurBg.style.display ="none"

})