const CAKE_FORE_NAMES = [
  "mansikka", "juusto", "suklaa",
  "porkkana", "banaani", "muro",
  "voileipä", "täyte", "hyytelö",
  "oreo", "daim", "omar",
  "tyrkisk peber", "jäätelö",
  "hedelmä", "kinuski", "tummasuklaa",
  "brita", "vaahtokarkki", "valkosuklaa",
  "salmiakki", "lakritsi", "mustikka",
  "manteli", "muta", "marenki",
  "tanskalainen", "laskiais", "voi",
  "rahka", "ranskalainen", "amerikkalainen",
  "suomalainen", "pipari", "ruotsalainen",
  "saksalainen", "sateenkaari", "volkano"
]

const CAKE_BACK_NAMES = [
  "kakku", "mufinni", "wiener",
  "donitsi", "leivos", "korvapuusti",
  "kääre"
]

const CAKE_FORE_NAME_COUNT_MAX = 6
const CAKE_FORE_NAME_COUNT_MIN = 1



function randomInt(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min) + min)
}

function randomChoice(__iter) {
  return __iter[randomInt(0, __iter.length)]
}

export function generateCakeName() {
  const fore_name_length = randomInt(CAKE_FORE_NAME_COUNT_MIN, CAKE_FORE_NAME_COUNT_MAX)
  const back_name = randomChoice(CAKE_BACK_NAMES)

  let fore_names = []
  for(const x of new Array(fore_name_length)) {
    fore_names.push(randomChoice(CAKE_FORE_NAMES) + " ")
  }

  return " ".concat(...fore_names) + `${back_name}`
}