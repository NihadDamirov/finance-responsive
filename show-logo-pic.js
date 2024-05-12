let lookBtn=document.getElementById("look")
let logoImg=document.getElementById("show-logo-img")
let uploadLogoInput=document.getElementById("upload-logo")
let deletePhotoBtn = document.getElementById("delete-photo")

uploadLogoInput.addEventListener("change",()=>{  
    logoImg.src=URL.createObjectURL(uploadLogoInput.files[0])
})

lookBtn.addEventListener("click", ()=>{

    logoImg.style.display="block"
})

deletePhotoBtn.addEventListener("click", ()=>{
    logoImg.src=""
    logoImg.style.display="none"
    uploadLogoInput.value=null

})