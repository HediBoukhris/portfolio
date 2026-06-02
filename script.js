const glow = document.querySelector(".cursor-glow");
const finePointerQuery = window.matchMedia("(pointer: fine)");

const applyPointerMode = () => {
  if (!glow) return;
  glow.style.display = finePointerQuery.matches ? "" : "none";
};

applyPointerMode();

if (finePointerQuery.addEventListener) {
  finePointerQuery.addEventListener("change", applyPointerMode);
} else if (finePointerQuery.addListener) {
  finePointerQuery.addListener(applyPointerMode);
}

if (glow) {
  window.addEventListener("mousemove", (e) => {
    if (!finePointerQuery.matches) return;
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
}

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(el => observer.observe(el));
} else {
  revealElements.forEach(el => el.classList.add("show"));
}

document.querySelectorAll(".project-card, .skill-card, .timeline-item").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    if (!finePointerQuery.matches) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--y", `${e.clientY - rect.top}px`);
  });
});
