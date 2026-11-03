// Initialize Lucide Icons
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Handle Contact Form Submission
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name")?.value || "there";
      alert(`Thanks for reaching out, ${name}! Your membership request has been submitted.`);
      contactForm.reset();
    });
  }

  // Handle Event RSVP Buttons
  const rsvpButtons = document.querySelectorAll('[data-action="rsvp"]');
  rsvpButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const eventTitle = btn.closest(".event-card")?.querySelector("h3")?.textContent || "this event";
      alert(`RSVP confirmed for "${eventTitle}"! A calendar reminder has been sent.`);
      btn.textContent = "Registered ✓";
      btn.disabled = true;
      btn.style.opacity = "0.7";
      btn.style.cursor = "default";
    });
  });

  // Smooth Active Nav Link Highlighting on Scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.style.color = "";
      if (link.getAttribute("href") === `#${current}`) {
        link.style.color = "var(--primary)";
      }
    });
  });
});
