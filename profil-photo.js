let profilPic=document.getElementById("profile-pic")
let inputFile=document.getElementById("input-file")
let uploadIcon=document.getElementById("upload-icon")

inputFile.onchange = function(){
  profilPic.src=URL.createObjectURL(inputFile.files[0])
  profilPic.style.width="315px"
  profilPic.style.height="315px"
  uploadIcon.style.display="none"
}