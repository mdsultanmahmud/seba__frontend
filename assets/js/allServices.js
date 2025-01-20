const links = document.querySelectorAll(".seba__all__services__nav__link");
const sections = document.querySelectorAll(
  ".seba__all__services__content__section"
);
const navbarHeight = 100; 

// Smooth scrolling when clicking a link
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const targetId = link.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);

    // Calculate the target position with offset
    const targetPosition =
      targetSection.getBoundingClientRect().top + window.scrollY - navbarHeight;

    // Smooth scroll to the adjusted position
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});

// Highlight the link when a section is in view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const link = document.querySelector(
        `.seba__all__services__nav__link[href="#${entry.target.id}"]`
      );
      if (entry.isIntersecting) {
        links.forEach((link) => link.classList.remove("active"));
        link.classList.add("active");
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach((section) => observer.observe(section));
