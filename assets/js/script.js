// Navbar color transition on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.custom-navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
// window.addEventListener('scroll', function () {
//     const navbar = document.querySelector('.custom-navbar');
//     if (window.scrollY > 50) { /* Trigger after scrolling 50px */
//         navbar.classList.remove('bg-transparent');
//     } else {
//         navbar.classList.add('bg-transparent');
//     }
// });