console.log("Witaj! 😎");

let toggleThemeButton = document.querySelector(".js-toggleThemeButton");
let body = document.querySelector(".js-body");

toggleThemeButton.addEventListener("click", () => {
  body.classList.toggle("body--dark");

  toggleThemeButton.innerText = body.classList.contains("body--dark")
    ? "Jasny motyw"
    : "Ciemny motyw ";
});

let toggleHeaderColorButton = document.querySelector(
  ".js-toggleHeaderColorButton"
);
let header = document.querySelector(".js-header");

toggleHeaderColorButton.addEventListener("click", () => {
  header.classList.toggle("header--purple");
});
