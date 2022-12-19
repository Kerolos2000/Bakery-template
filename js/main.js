// scroll to top of section
let scrollx = document.querySelector(".scroll");
scrollx.onclick = function () {
  document
    .querySelector(`#${scrollx.getAttribute("data-goTo")}`)
    .scrollIntoView({ behavior: "smooth", block: "start" });
};
// btn toUP
let toUp = document.querySelector(".toUp");
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    toUp.style.display = "block";
  } else {
    toUp.style.display = "none";
  }
  sessionStorage.setItem("scrollY", window.scrollY);
});
toUp.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
window.onload = function () {
  if (window.scrollY > 200) {
    toUp.style.display = "block";
  } else {
    toUp.style.display = "none";
  }
  window.scrollTo(0, sessionStorage.getItem("scrollY"));
};