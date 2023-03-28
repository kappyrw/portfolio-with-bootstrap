const navbarToggler = document.querySelector('.navbar-toggler');
const navbarNav = document.querySelector('.navbar-nav');

navbarToggler.addEventListener('click', () => {
  navbarToggler.classList.toggle('active');
  navbarNav.classList.toggle('active');
});
