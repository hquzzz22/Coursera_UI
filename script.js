const toggleBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const mobileJoinBtn = document.getElementById("mobile-join-btn");

toggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");

  window.scrollTo({ top: 0, behavior: "smooth" });
});

mobileJoinBtn.addEventListener("click", () => {
  const modal = new bootstrap.Modal(document.getElementById("signupModal"));
  modal.show();
});
