/** Lágmark bolla sem má velja. */
const MIN_NUM_OF_CUPS = 2;

/** Hámark bolla sem má velja. */
const MAX_NUM_OF_CUPS = 10;

/** Fjöldi spilaðra leikja. */
let played = 0;

/** Fjöldi unnra leikja. */
let won = 0;

/** Fjöldi stiga. */
let points = 0;

/**
 * Athugar hvort gefin tala sé á bilinu [min, max].
 *
 * @param {string | number} numAsString Tala sem á að athuga.
 * @param {number} min Lágmark sem tala má vera.
 * @param {number} max Hámark sem tala má vera.
 * @returns  {boolean}`true` ef tala er innan bils, annars `false`.
 */
function isValidNum(numAsString, min, max) {
  min = MIN_NUM_OF_CUPS;
  max = MAX_NUM_OF_CUPS - played;

  if (isNaN(numAsString)) {
    return false;
  }

  // Ekki á bili
  if (min >= numAsString || numAsString >= max) {
    return false;
  }

  return true;
}
console.assert(numAsString('2','11 ') === false, ' 11 er ekki valid(ekki milli 2 og 10 )');
console.assert(numAsString('2','4') === true, '4 er valid (milli 2 og 10)');


/**
 * Nær í gisk frá notanda.
 *
 * @param {number} numOfCups Heildar fjöldi bolla.
 * @returns `null` ef notandi hætti við, annars vali notanda sem tölu.
 */
 function getChoice(numOfCups) {
  const val = prompt ('veldu bolla á bilinu min til max}')
  /* TODO útfæra */
}

/**
 * Skilar tölu af handahófi á bilinu [min, max].
 *
 * @param {number} min Lágmark bils.
 * @param {number} max Hámark bils.
 * @returns Tala af handahófi á bili [min, max].
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Spilum leik.
 */
function play() {
  do {
    const numOfCups = prompt(`Hve marga bolla?
Verður að vera gildi á bilinu [${MIN_NUM_OF_CUPS}, ${MAX_NUM_OF_CUPS}].
Þú færð N-1 fyrir að finna bolta í N bollum.
Ýttu á cancel eða ESC til að hætta.`);

    // Ýtt á ESC/Cancel
    if (numOfCups === null) {
      return;
    }
    if(!isValidNum(numOfCups)){
      console.error(`${numOfCups} er ekki löglegt gildi`);
      return;
    }
  
  /* TODO útfæra */
  } while (true)
}

/**
 * Birtir stöðu spilara.
 */
function games() {
  /* TODO útfæra */
}
