document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 1;
});

window.addEventListener("beforeunload", () => {
  document.body.style.opacity = 0;
});

