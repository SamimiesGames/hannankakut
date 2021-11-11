import { generateCakeName } from "./name.js";
import { generateCakePrice } from "./price.js";


export class Cake {
  constructor(li_number) {
    this.link = `https://source.unsplash.com/${1280 + li_number}x${720 + li_number}/?cake`
    this.li_number = li_number

    this.name = generateCakeName()
    this.price = generateCakePrice()
  }
}

