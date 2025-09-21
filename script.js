// script.js
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  // Add initial hidden state
  sections.forEach(section => {
    section.classList.add("fade-out");
  });

  // Function to check which section is in view
  function checkSections() {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("fade-in");
        section.classList.remove("fade-out");
      } else {
        section.classList.remove("fade-in");
        section.classList.add("fade-out");
      }
    });
  }

  window.addEventListener("scroll", checkSections);
  checkSections();
});



// Website Blog
// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Alert when a blog link is clicked
document.querySelectorAll('.blog-post a').forEach(link => {
  link.addEventListener('click', () => {
    alert("Opening blog post...");
  });
});


