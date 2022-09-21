let body = document.querySelector("body");
let indicateur = document.querySelector(".indicateur");
let title = document.querySelector("h1");
let paragraphe = document.querySelector("p");
indicateur.onclick = function () {
  indicateur.classList.toggle("active");
  body.classList.toggle("darkmode");
  title.classList.toggle("mode"), paragraphe.classList.toggle("mode");
};
