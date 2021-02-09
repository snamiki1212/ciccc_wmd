const HIDDEN_CLASS = "hidden";
const EASE_IN_ANIME_CLASS = "ease-in";
const FADE_IN_DOWN_ANIME_CLASS = 'fadeInDown'



window.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const elements = document.querySelectorAll(".footer__message");

        const isInViewport = entry.intersectionRatio > 0;
        if (isInViewport) {
          elements.forEach((elem) => {
            elem.classList.remove(HIDDEN_CLASS);
            elem.classList.add(FADE_IN_DOWN_ANIME_CLASS);
          });
        } else {
          elements.forEach((elem) => {
            elem.classList.add(HIDDEN_CLASS);
            elem.classList.remove(FADE_IN_DOWN_ANIME_CLASS);
          });
        }
      });
    },
    {
      rootMargin: "-100px",
    }
  );

  document.querySelectorAll(".footer__message").forEach((elem) => {
    observer.observe(elem);
  });

  console.log("hey");
});
