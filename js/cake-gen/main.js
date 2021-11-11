import { Cake } from "./cake.js";



export function scratch() {
  let i = 0
  for(const x of new Array(5)) {
    let cake = new Cake(i)
    console.log(cake.name, cake.price)
    console.log(cake.link)
    i++
  }
}
