$(document).ready(
  () => {
    $('[data-toggle="popover"]').popover(
      {
        html: true,
        content: () => {
          return $('#shopping-cart-content').html()
        }
      }
    )
  }
)
