
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
 * Athugar hvort gefin tala sé á bilinu [min, max]. ( talan sem giskar á bolla nr#)
 *
 * @param {string | number} numAsString Tala sem á að athuga.
 * @param {number} min Lágmark sem tala má vera.       min num of cups = 2
 * @param {number} max Hámark sem tala má vera.         max væri user input limitað við 10
 * @returns `true` ef tala er innan bils, annars `false`.
 */
function isValidNum(numAsString, min, max) {
  if (isNaN(**gisk a fjolda**)) {
    return false;
  }

  // Ekki á bili
  if (min >= **talan** || **talan** >= max) {
    return false;
  }

  return true;
}

/**
 * Nær í gisk frá notanda. ( gisk á í hvaða bolla boltin er )
 *
 * @param {number} numOfCups Heildar fjöldi bolla.
 * @returns `null` ef notandi hætti við, annars vali notanda sem tölu.
 */
function getChoice(numOfCups) {
  const val  = prompt(`Hvaða bolla velur þú af ${numOfCups} ?`)
  /* TODO útfæra   fá tölu sem er á milli 1 og fjölda bolla */
}

/**
 * Skilar tölu af handahófi á bilinu [min, max].  ( byr til random tolu a bili)
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
    if (!isValidNum(numOfCups)){
      console.error (`${numOfCups} er ekki löglegt gildi `)
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

