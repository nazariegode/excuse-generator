/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/bg.png";
import "./assets/img/d.ico";

window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();

  function generateExcuse() {
    let who = ["Mi perro", "Mi abuela", "El cartero", "Mi pájaro"];
    let action = ["comió", "orinó", "chocó", "rompió"];
    let what = ["mi tarea", "mi telefono", "el auto"];
    let when = [
      "antes de clases",
      "cuando estaba durmiendo",
      "mientras me ejercitaba",
      "durante mi almuerzo",
      "mientras estaba orando"
    ];

    let whoIndx = Math.floor(Math.random() * who.length);
    let actionIndx = Math.floor(Math.random() * action.length);
    let whatIndx = Math.floor(Math.random() * what.length);
    let whenIndx = Math.floor(Math.random() * when.length);

    return (
      who[whoIndx] +
      " " +
      action[actionIndx] +
      " " +
      what[whatIndx] +
      " " +
      when[whenIndx]
    );
  }
};
