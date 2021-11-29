import { generateCakeName } from "./name.js";
import { generateCakePrice } from "./price.js";


export class Cake {
  constructor(li_number) {
    this.li_number = li_number

    const [name, search_query] = generateCakeName()
    this.name = name
    this.search_query = search_query
    this.price = `${generateCakePrice()} €`

    this.link = `https://source.unsplash.com/${1280 + li_number}x${720 + li_number}/?${this.search_query}`
  }

  getElement() {
    const dom_cake = document.getElementById("dom-cake-product").cloneNode(true)

    let cake_title = dom_cake.childNodes[3]  // <h1/>
    let cake_image = dom_cake.childNodes[1]  // <img/>
    let cake_price = dom_cake.childNodes[5]  // <p/>

    cake_title.textContent = this.name
    cake_image.src = this.link
    cake_price.textContent = this.price

    this.addEventClick(dom_cake)

    return dom_cake
  }

  addEventClick(dom_cake) {
    let add_to_cart = dom_cake.childNodes[7]
    add_to_cart.onclick = () => {
      let shopping_cart_content = document.getElementById("shopping-cart-content")
      let cake_in_cart = document.getElementById("cake-in-cart").cloneNode(true)

      cake_in_cart.textContent = `${this.name} - ${this.price}`
      shopping_cart_content.appendChild(cake_in_cart)
    }

  }
}
