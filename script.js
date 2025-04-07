const burger = document.getElementById("burger");
const nav = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
// Simple alert for contact form submission (placeholder behavior)
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for reaching out! I’ll get back to you shortly.");
  form.reset();
});
