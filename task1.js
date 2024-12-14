// script.js
const navbar = document.querySelector('.navbar');

// Function to handle scroll effect
function handleScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// Add event listener for scroll
window.addEventListener('scroll', handleScroll);
