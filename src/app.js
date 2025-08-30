import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


const who   = ["El doge", "Mi yayita", "El cartero", "Mi loro","Perro Sanxe","Goku super guerrero del espacio","Lobezno aguja dinamica"];
const action= ["se comió", "rompió", "perdió", "tiró","se metio por el ogt","Mandó por error como correo certificado a Nacho Vidal","Quemó junto a toma mi coleccion de Hot wheels"];
const what  = ["mis deberes", "mi móvil", "las llaves", "mi portátil","Mi carta de la indepencia de los EEUU","Mi moneda de txokolate","Mi alfa romeo Quadrifoglio verde, motor V6 Ferrari bi turbo"];
const when  = ["antes de clase", "mientras dormía", "cuando entrenaba", "durante la comida", "mientras rezaba"];

const r = a => a[Math.floor(Math.random() * a.length)];

function setExcuse() {
  const el = document.getElementById("excuse");
  if (!el) return console.error("#excuse no existe en el HTML");
  el.innerText = `${r(who)} ${r(action)} ${r(what)} ${r(when)}.`;
}

window.addEventListener("DOMContentLoaded", () => {
  setExcuse();
  document.getElementById("btn")?.addEventListener("click", setExcuse);
});