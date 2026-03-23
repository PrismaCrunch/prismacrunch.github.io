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
          window.location = this.href;
        }, 400);
      }
    });
  }
});

// Modal Setup
const modal = document.createElement("div");
modal.classList.add("modal");
document.body.appendChild(modal);

modal.addEventListener("click", () => {
  modal.classList.remove("open");
});

document.querySelectorAll(".gallery img, .hero img").forEach(img => {
  img.addEventListener("click", () => {
    modal.innerHTML = `<img src="${img.src}" alt="">`;
    modal.classList.add("open");
  });
});