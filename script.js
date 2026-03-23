// Page Fade In
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Smooth Fade Out Navigation for same-origin links
document.querySelectorAll("a").forEach(link => {
  if (link.hostname === window.location.hostname) {
    link.addEventListener("click", function(e) {
      // Ignore anchor links
      if (!this.href.includes("#")) {
        e.preventDefault();
        document.body.classList.remove("loaded");
        setTimeout(() => {
          window.location.href = this.href;
        }, 400);
      }
    });
  }
});

// Modal Setup
const modal = document.createElement("div");
modal.classList.add("modal");
document.body.appendChild(modal);

// Mobile Hamburger toggle
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("mobile-active");

  // also toggle visibility of submenus to prevent overlap
  nav.querySelectorAll(".submenu").forEach(sub => {
    if (!nav.classList.contains("mobile-active")) {
      sub.style.display = ""; // reset on close
    }
  });
});

// Make dropdowns toggleable on mobile
document.querySelectorAll(".dropdown > a").forEach(drop => {
  drop.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault(); // prevent link jump
      const submenu = drop.nextElementSibling;
      submenu.style.display = submenu.style.display === "flex" ? "none" : "flex";
      submenu.style.flexDirection = "column";
    }
  });
});

// Close modal on click outside
modal.addEventListener("click", () => {
  modal.classList.remove("open");
});

// Open images in modal (works on touch devices too)
document.querySelectorAll(".gallery img, .hero img").forEach(img => {
  img.addEventListener("click", () => {
    const modalImg = document.createElement("img");
    modalImg.src = img.src;
    modalImg.alt = img.alt || "";
    modal.innerHTML = ""; // Clear previous content
    modal.appendChild(modalImg);
    modal.classList.add("open");
  });
});
