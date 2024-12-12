document.addEventListener("DOMContentLoaded", () => {
  const scrollingContent = document.querySelector(".scrolling-content");
  const clone = scrollingContent.cloneNode(true);
  scrollingContent.parentElement.appendChild(clone);
});