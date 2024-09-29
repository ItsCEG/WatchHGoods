console.log()
function addToCart(item) {
    alert(item + ' added to cart!');
  }

const button = document.querySelector(".button");
button.addEventListener("mousedown", () =>button.classList.add("clicked"));
button.addEventListener("mouseup", () =>button.classList.remove("clicked"));

