const revealNodes = document.querySelectorAll("[data-reveal]");

const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    }
  },
  {
    threshold: 0.18,
  }
);

revealNodes.forEach((node) => revealObserver.observe(node));

const lightbox = document.getElementById("lightbox");
const lightboxTitle = document.getElementById("lightbox-title");
const galleryButtons = document.querySelectorAll("[data-lightbox]");
const closeLightboxButtons = document.querySelectorAll("[data-close-lightbox]");

const openLightbox = (title) => {
  lightboxTitle.textContent = title;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  lightbox.hidden = true;
  document.body.style.overflow = "";
};

galleryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openLightbox(button.dataset.lightbox || "Документ");
  });
});

closeLightboxButtons.forEach((button) => {
  button.addEventListener("click", closeLightbox);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightbox.hidden) {
    closeLightbox();
  }
});

const contactForm = document.getElementById("contact-form");
const formNote = document.getElementById("form-note");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent = "";
});
