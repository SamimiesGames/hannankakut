import { generateCakeName } from "./name.js";
import { generateCakePrice } from "./price.js";


export class Cake {
  constructor(li_number) {
    this.li_number = li_number

    const [name, search_query] = generateCakeName()
    this.name = name
    this.search_query = search_query
    this.price = generateCakePrice()

    this.link = `https://source.unsplash.com/${1280 + li_number}x${720 + li_number}/?${this.search_query}`
  }
}

