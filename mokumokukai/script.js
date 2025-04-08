const image = document.getElementById("header-image");

addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const scale = 1 + scrollTop / 1000;
  const translateX = Math.min(scrollTop / 5, 200);
  image.style.transform = `scale(${scale}) translateX(${translateX}px)`;
});
