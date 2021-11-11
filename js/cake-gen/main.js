import { Cake } from "./cake.js";

const CAKE_AMOUNT = 8  // don't change from 8!!!!!!!!!!


export function create_products() {
  let product_area = document.getElementById("products")
  let i = 1
  for(const x of new Array(CAKE_AMOUNT)) {
    let cake = new Cake(i)

    let dom_cake = cake.getElement()

    dom_cake.style.gridArea = `c${i}`
    dom_cake.hidden = false

    product_area.appendChild(dom_cake)

    i++
  }
}
