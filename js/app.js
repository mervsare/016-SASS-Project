const menuBtn = document.querySelector(".fa-bars");
const menuLinks = document.querySelector(".nav__right");
menuBtn.addEventListener("click", () => {
  menuLinks.classList.toggle("show");
});
