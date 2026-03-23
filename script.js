// Page Fade In
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});


// Smooth Fade Out Navigation
document.querySelectorAll("a").forEach(link => {
  if (link.hostname === window.location.hostname) {
    link.addEventListener("click", function(e) {
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


// =========================
// IMAGE MODAL (your gallery)
// =========================
const modal = document.createElement("div");
modal.classList.add("modal");
document.body.appendChild(modal);

modal.addEventListener("click", () => {
  modal.classList.remove("open");
});

document.querySelectorAll(".gallery img, .hero img").forEach(img => {
  img.addEventListener("click", () => {
    const modalImg = document.createElement("img");
    modalImg.src = img.src;
    modalImg.alt = img.alt || "";
    modal.innerHTML = "";
    modal.appendChild(modalImg);
    modal.classList.add("open");
  });
});


// =========================
// MOBILE NAVIGATION
// =========================
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("mobile-active");

  nav.querySelectorAll(".submenu").forEach(sub => {
    if (!nav.classList.contains("mobile-active")) {
      sub.style.display = "";
    }
  });
});


// Mobile dropdown toggle
document.querySelectorAll(".dropdown > a").forEach(drop => {
  drop.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const submenu = drop.nextElementSibling;
      submenu.style.display = submenu.style.display === "flex" ? "none" : "flex";
      submenu.style.flexDirection = "column";
    }
  });
});


// =========================
// ✅ PDF MODAL (NEW)
// =========================
function openPDF(impressum.pdf) {
  const modal = document.getElementById("pdfModal");
  const frame = document.getElementById("pdfFrame");

  frame.src = file;
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // prevent scroll
}

function closePDF() {
  const modal = document.getElementById("pdfModal");
  const frame = document.getElementById("pdfFrame");

  frame.src = "";
  modal.style.display = "none";
  document.body.style.overflow = ""; // restore scroll
}


// Close PDF with ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closePDF();
  }
});


// Close when clicking outside content
document.addEventListener("click", (e) => {
  const modal = document.getElementById("pdfModal");
  if (e.target === modal) {
    closePDF();
  }
});
