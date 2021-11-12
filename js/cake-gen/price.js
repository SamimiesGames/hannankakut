const CAKE_PRICE_MIN = 1
const CAKE_PRICE_MAX = 35


function randomInt(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function generateCakePrice() {
  return randomInt(CAKE_PRICE_MIN, CAKE_PRICE_MAX)
}
