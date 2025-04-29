// Animations au scroll
window.addEventListener("scroll", () => {
    document.querySelectorAll(".menu-card, .about-text, .about-image, .gallery-grid img, .contact-form, .contact-map")
      .forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (position < screenHeight - 100) {
          el.classList.add("visible");
        }
      });
  });
  
  // Animation sur les cartes au scroll (classe visible)
  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".menu-card, .about-text, .about-image, .gallery-grid img, .contact-form, .contact-map");
    elements.forEach(el => el.classList.add("hidden"));
  });
  
  // Gestion simple du formulaire
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Merci pour votre message ! Nous vous répondrons bientôt.");
      form.reset();
    });
  }
  