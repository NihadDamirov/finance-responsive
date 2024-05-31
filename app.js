const profileName = document.getElementById("profile-name");
const menu = document.getElementById("menu");
const formForProf = document.querySelector(".form")

profileName.addEventListener("click", () => {
  menu.classList.toggle("active");
});

formForProf.addEventListener("click", ()=>{
  menu.classList.remove("active");
})

// const profileName = document.getElementById("profile-name");
// const menu = document.getElementById("menu");

// profileName.addEventListener("click", () => {
//   menu.classList.toggle("active");
// });