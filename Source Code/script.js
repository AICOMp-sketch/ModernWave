// Example: Add smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav ul li a');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Optional: Add functionality to the "Get in Touch" button
  const contactBtn = document.getElementById('contactBtn');
  contactBtn.addEventListener('click', () => {
    alert('Thank you for reaching out!');
  });
});