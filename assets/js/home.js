(() => {
  "use strict";
  const progress = document.querySelector(".reading-progress span");
  if (!progress) return;
  let pendingFrame = false;

  function updatePage() {
    const scroll = Math.max(0, window.scrollY);
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const fraction = scrollable > 0 ? Math.min(1, scroll / scrollable) : 0;
    progress.style.transform = "scaleX(" + fraction + ")";
    pendingFrame = false;
  }
  function requestUpdate() {
    if (pendingFrame) return;
    pendingFrame = true;
    window.requestAnimationFrame(updatePage);
  }
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  window.addEventListener("load", requestUpdate);
  updatePage();
})();
