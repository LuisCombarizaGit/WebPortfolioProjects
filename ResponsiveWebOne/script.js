// -- Author: Luis Combariza  -->
// -- Date: Jan 14, 2022  -->
// -- Description: Simple responsive web project -->

//  ---------- Nav bar responsivenes -----------

const menuBtn = document.querySelector(".menu-btn");
const navlinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navlinks.classList.toggle("mobile-menu");
});

//  --------------------------------------------
