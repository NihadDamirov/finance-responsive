const profileName = document.getElementById("profile-name");
const menu = document.getElementById("menu");

profileName.addEventListener("click", () => {
  menu.classList.toggle("active");
});

