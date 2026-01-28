// Toggle sidebar visibility
const menuBtn = document.getElementById("menu");
const sidebar = document.querySelector("nav.sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});