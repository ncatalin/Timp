// Menu
const menuToggle = document.getElementById("hamburgerBtn"),
  nav = document.querySelector(".nav"),
  // Animation
  hasFade = document.querySelector(".has-fade"),
  // Form validation
  mainForm = document.getElementById("main-form"),
  nameInput = document.getElementById("name"),
  nameError = document.getElementById("nameError"),
  emailInput = document.getElementById("email"),
  emailError = document.getElementById("emailError"),
  messageInput = document.getElementById("message"),
  messageError = document.getElementById("messageError"),
  // Footer span for year
  insertYear = document.getElementById("currentYear");

// Menu click event
menuToggle.addEventListener("click", mobileMenu);

// Menu func
function mobileMenu() {
  if (nav.classList.contains("open")) {
    nav.classList.remove("open");
    hasFade.classList.add("fade-out");
    hasFade.classList.remove("fade-in");
  } else {
    nav.classList.add("open");
    hasFade.classList.add("fade-in");
    hasFade.classList.remove("fade-out");
  }
}

// Get current year
const d = new Date();
const currYear = d.getFullYear();

insertYear.innerHTML = currYear;
