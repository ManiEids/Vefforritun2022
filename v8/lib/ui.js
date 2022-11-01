// Föll sem stýra útliti/búa til element
/**
 * Fjarlægir öll element sem eru innan gefins element.
 * @param {element} element Element sem á að tæma.
 */
export function emptyElement(element) {
  while (element.firstElementChild) {
    element.firstElementChild.remove();
  }
}

/**
 * Birta skjá og fela aðra.
 * @param {string} screen Annað hvort `main` eða `waiting` eftir því hvort á að birta.
 */
export function showScreen(screen) {
  // TODO útfæra

  const waiting = document.querySelector(".waiting");
  const main = document.querySelector(".game__main");
  const lokaleik = document.querySelector("game__main");

  waiting.classList.add("hidden");
  main.classList.add("hidden");

  switch (screen) {
    case "waiting":
      waiting.classList.remove("hidden");
      break;
    case "main":
      main.classList.remove("hidden");
      break;
    case "lokaleik":
      lokaleik.classList.add("hidden");
    default:
      console.warn(`${screen} óþekkt`);
  }
}

/**
 * Býr til DOM element fyrir bolla og skilar því.
 *
 * @param {number} num Fjöldi bolla sem á að búa til.
 * @param {element} svg SVG element fyrir mynd af bolla.
 * @param {function} onClick Fall sem keyrir þegar smellt er á bolla.
 * @returns Elementi fyrir bolla.
 */
export function createCup(num, svg, onClick) {
  // Create cup element
  let cup = document.createElement("div");
  cup.className = "cup";

  // Create cup content, add it to cup
  let cupContent = document.createElement("div");
  cupContent.className = "cup__content";
  cupContent.id = `cup-number-${num}`;
  cupContent.appendChild(svg.cloneNode(true));

  // Add cupContent to cup
  cup.appendChild(cupContent);

  // Create cup button
  let cupButton = document.createElement("button");
  cupButton.innerText = num;
  cupButton.onclick = onClick;

  // Add cupButton to cup
  cup.appendChild(cupButton);
  return cup;
}
