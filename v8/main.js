import { isValidNum, randomNumber } from "./lib/helpers.js";
import { createCup, emptyElement, showScreen } from "./lib/ui.js";

/** Lágmark bolla sem má velja. */
const MIN_NUM_OF_CUPS = 2;

/** Hámark bolla sem má velja. */
const MAX_NUM_OF_CUPS = 10;
let maxnew = 0;

//bua til bolta

var boltinn = document.getElementById("boltinn");
console.log("boltinn = " + boltinn);

let gameContainerElement = document.getElementById("game_container");
let gamewaiting = document.getElementById("gamewaiting");

/** Hversu lengi á að bíða þar til við birtum biðskjá eftir leik. */
const SHOW_WAITINGSCREEN_TIME = 1000;

/** Breyta sem heldur utan um stöðuna á leiknum okkar */

let played = 0;
let won = 0;
let points = 0;
let currentPointsAvailable = 0;

// Afritum SVG sem er nákvæmlega eitt stykki af í DOM í byrjun
// getum notað það oft í leiknum með:
// element.appendChild(svg.cloneNode(true));
const svg = document.querySelector("svg").cloneNode(true);

const ball = document.querySelector("ball");

// Setjum rétt gildi fyrir hámark í villuskilaboðum.
document.querySelector("#max_cups").innerText = MAX_NUM_OF_CUPS;

/**
 * Meðhöndlar það sem gerist þegar notandi velur bolla:
 * - Ef engin bolti er falinn, birtir biðskjá.
 * - Uppfærir fjölda leikja sem hafa verið spilaðir.
 * - Ef rétt gisk, sýnir boltann og gefur stig, annars sýnir tómt.
 * - Uppfærir fjölda stiga og leikja spilaða.
 * - Birtir biðjskjá eftir skilgreindann tíma þegar notandi er búinn að velja.
 *
 * @param {event} e Atburður sem átti sér stað þegar notandi ýtti á takka fyrir
 *                  ákveðinn bolla.
 * @returns
 */
function onCupClick(event) {
  // TODO útfæra
  console.log("clicked a cup: ", event);
  console.log("Cup nr. " + event.target.innerText);
  console.log("evt class name " + event.target.className);

  //nafn á valinn bolla
  let cupclick = "cup-number-" + event.target.innerText;

  //finna bollann
  let svgdiv = document.getElementById(cupclick);
  console.log("svgdiv er = " + svgdiv);

  //leita i bollanum
  let svgbolli = svgdiv.querySelector("svg");
  console.log("svgbolli er =" + svgbolli);

  svgbolli.style.display = "none";

  console.log("svg bolli = " + svgbolli);

  let slembitala = randomNumber(1, maxnew);

  let stigapottur = parseInt(event.target.innerText);

  if (slembitala == event.target.innerText) {
    console.log("valdir sama og tölva");
    svgdiv.appendChild(boltinn);
    points += stigapottur - 1;
  } else {
    console.log("valdir ekki sama og tölva");
  }

  setTimeout((event) => {
    gameContainerElement.classList.replace("game__main", "game__main--hidden");
    gamewaiting.classList.replace("game__waiting--hidden", "game__waiting");
  }, SHOW_WAITINGSCREEN_TIME);

  played++;

  document.getElementById("games").innerHTML = played;
  document.getElementById("points").innerHTML = points;
}

/**
 * Tæmir `parent` og býr til `num` bollum og setur þangað inn.
 * @param {number} num Fjöldi bolla
 * @param {element} parent Element sem á að setja bollana inn í.
 */
function createCups(num, parent) {
  for (let i = 0; i < num; i++) {
    let cup = createCup(i + 1, svg, onCupClick);
    parent.append(cup);
  }
}

/**
 * Meðhöndlar það að notandi byrjar leikinn með því að skrá fjölda bolla og ýta
 * á takkann eða ýta á enter.
 * Sér um að:
 * - Athuga hvort fjöldi bolla sé réttur, ef ekki sýna villuskilaboð.
 * - Búa til bolla.
 * - Uppfæra fjölda stiga sem eru í boði og undir hvaða bolla boltinn sé.
 * - Sýna bollaskjáinn.
 *
 * @param {event} e Atburður sem átti sér stað þegar form var sent.
 */
function onFormSubmit(e) {
  console.log("main.js - onFormSubmit");
  e.preventDefault();

  const formErrorElement = document.querySelector(".form__error");

  formErrorElement.classList.add("form__error--hidden");

  let numberOfCups = document.getElementById("cups").value;
  console.log("numberOfCups: ", numberOfCups);

  maxnew = numberOfCups;

  console.log("Max number of cups eftir input" + maxnew);

  if (numberOfCups === "") {
    formErrorElement.classList.remove("form__error--hidden");
  }
  if (!isValidNum(numberOfCups, MIN_NUM_OF_CUPS, MAX_NUM_OF_CUPS)) {
    formErrorElement.classList.remove("form__error--hidden");
  } else {
    gameContainerElement.classList.remove("game__main--hidden");
    let gameCupsContainerElement = document.getElementById(
      "game_cups_container"
    );

    gamewaiting.classList.add("game__waiting--hidden");

    emptyElement(gameCupsContainerElement);
    createCups(numberOfCups, gameCupsContainerElement);
    console.log("play game todo");
  }
}

// Tengir event handler við formið.
document.querySelector("form").addEventListener("submit", onFormSubmit);
