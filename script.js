document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });

      // Remove active class from all and add to clicked
      document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Highlight active nav link on scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 150) { // Adjust offset as needed
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });

  // Optional: Form submission handler (example, needs backend for full functionality)
  const contactForm = document.querySelector('.contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      this.reset(); // Clear the form after submission
    });
  }
});