"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClosemodel = document.querySelector(".close-modal");
const btnOpenmodel = document.querySelectorAll(".show-modal");

for (let i = 0; i < btnOpenmodel.length; i++)
  btnOpenmodel[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

const Closemodel = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnClosemodel.addEventListener("click", Closemodel);
overlay.addEventListener("click", Closemodel);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) Closemodel();
});
