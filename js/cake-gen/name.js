const CAKE_ADJECTIVES = [
  "mansikka", "juusto", "suklaa",
  "porkkana", "banaani", "muro",
  "voileipä", "täyte", "hyytelö",
  "oreo-", "daim-", "omar-",
  "tyrkisk peber -", "jäätelö",
  "hedelmä", "kinuski", "tummasuklaa",
  "brita-", "vaahtokarkki", "valkosuklaa",
  "salmiakki", "lakritsi", "mustikka",
  "manteli", "muta", "marenki",
  "tanskalainen", "laskiais", "voi",
  "rahka", "ranskalainen", "amerikkalainen",
  "suomalainen", "pipari", "ruotsalainen",
  "saksalainen", "sateenkaari", "karamelli",
  "tripla-", "tupla", "extra-",
  "sprinkles-", "maitosuklaa", "murskattu",
  "käännetty", "eroteltu", "hollannin",
  "voisilmä", "sokerikuorrutettu", "saksanpähkinä",
  "maapähkinävoi", "toffee", "suolainen", "makea",
  "rapea", "kostea"
]

const CAKE_TYPES = [
  ["kakku", "cake"], ["muffini", "muffin"],
  ["wiener", "danish+pastry"], ["donitsi", "donut"],
  ["leivos", "pastry"], ["korvapuusti", "danish+pastry"],
  ["kääryle", "cinnamon+bun"], ["sorbetti", "sorbet"],
  ["keksi", "cookie"], ["kuorrute", "frosting"],
  ["croisantti", "croissant"], ["piirakka", "pie"],
  ["kahvi", "coffee"], ["espresso", "espresso"]
]

const CAKE_ADJ_COUNT_MAX = 2
const CAKE_ADJ_COUNT_MIN = 1



function randomInt(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min) + min)
}

function randomChoice(__iter) {
  return __iter[randomInt(0, __iter.length)]
}

export function generateCakeName() {
  const adjective_amount = randomInt(CAKE_ADJ_COUNT_MIN, CAKE_ADJ_COUNT_MAX)
  const [type_name, csq] = randomChoice(CAKE_TYPES)

  let adjectives = ""
  for(const x of new Array(adjective_amount)) {
    adjectives += randomChoice(CAKE_ADJECTIVES)
  }

  return [`${adjectives}${type_name}`, csq]
}
