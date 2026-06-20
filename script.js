document.addEventListener("DOMContentLoaded", function () {
  // Scroll-triggered reveal animations
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // Header scroll effect
  const header = document.querySelector(".header");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    lastScroll = currentScroll;
  });

  // Hamburger menu toggle
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileNav.classList.toggle("open");
  });

  // Close mobile nav on link click
  document.querySelectorAll(".mobile-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      mobileNav.classList.remove("open");
    });
  });

  // Back to top button
  const backToTop = document.querySelector(".back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Smooth scroll for nav links (fallback for browsers without CSS smooth scroll)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    });
  });

  // Project image tilt effect on mouse move
  document.querySelectorAll(".pr-img-div").forEach((div) => {
    div.addEventListener("mousemove", (e) => {
      const rect = div.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const img = div.querySelector(".pr-img");
      if (img) {
        img.style.transform = `scale(1.03) translate(${x * 8}px, ${y * 8}px)`;
      }
    });

    div.addEventListener("mouseleave", () => {
      const img = div.querySelector(".pr-img");
      if (img) {
        img.style.transform = "scale(1)";
      }
    });
  });

  // Skill items stagger animation on scroll
  const skillItems = document.querySelectorAll(".skill-item");
  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1 }
  );

  skillItems.forEach((item) => skillObserver.observe(item));
});
