'use strict';


function equCakeHeight() {
  const cakes = document.getElementById("products")
  let heights = []

  for(let node of cakes.childNodes) {
    console.debug("node: ", node)
    console.debug("nodes children:", node.childNodes, "\ncakes children:", cakes.childNodes)
    let node_h1 = node.childNodes[3]
    let offsetHeight = parseInt(node_h1.offsetHeight)

    if(isNaN(offsetHeight)) { continue }  // eliminate '#text' elements

    heights.push(offsetHeight)
  }

  const max_height = Math.max(...heights)

  for (const node of cakes.childNodes) {
    node.childNodes[3].offsetHeight = max_height
  }
}

export function enableProductHeightMatching() {
  window.onresize = equCakeHeight
}
