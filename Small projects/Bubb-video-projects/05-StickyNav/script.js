const navElement = document.querySelector("nav");
const navPosition = navElement.getBoundingClientRect().top;
const navBarLinks = navElement.querySelectorAll("a");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  navElement.style.top = scrollPosition + "px";

  navBarLinks.forEach((link) => {
    const sectionElement = document.querySelector(link.hash);
    const offset = 10;
    if (
      scrollPosition > sectionElement.offsetTop &&
      scrollPosition + offset <
        sectionElement.offsetTop + sectionElement.offsetHeight
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
