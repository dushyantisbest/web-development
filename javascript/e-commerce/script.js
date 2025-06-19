document.addEventListener("DOMContentLoaded", () => {
  // Get product list elements
  const productList = document.querySelector(".product-list");

  // Get cart elements
  const cartItemsList = document.querySelector(".cart-items");
  const cartEmptyMessage = document.querySelector(".empty-cart");
  const total = document.querySelector("#total");
  const checkoutBtn = document.querySelector("#checkout-btn");

  // Get all add to cart buttons (will be used later for event listeners) //useless
  const addToCartButtons = document.querySelectorAll(".product-list button");

  let products = [
    { name: "shampoo", price: 22.44, id: 1 },
    { name: "namkeen", price: 50.33, id: 2 },
    { name: "potato", price: 5.4567, id: 3 },
  ];
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // do as the name says
  displayProductsShop();
  //if there is item in local storage it will display using displaycart function
  displayCart();

  // function to add product in products from localstorage
  function addToLocal() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // function to display the products in shop
  function displayProductsShop() {
    products.forEach((product) => {
      const ListItem = document.createElement("li");
      ListItem.innerHTML = `${product.name} - $${product.price}  <button> add item </button>`;
      productList.appendChild(ListItem);
      let addToCartBtn = ListItem.childNodes[1];
      addToCartBtn.addEventListener("click", (event) => {
        addToCart(product.id);
      });
    });
  }

  // function to add the producs in localstorage
  // function to add product in shopping cart
  function addToCart(productId) {
    let itemToPushInCart = {
      ...products.find((product) => product.id === productId),
    };

    itemToPushInCart.id += Date.now();

    cart.push(itemToPushInCart);

    addToLocal();
    displayCart();
  }
  // funtion to display shopping cart
  function displayCart() {
    cartItemsList.innerHTML = "";
    if (!cart.length) {
      cartEmptyMessage.classList.remove("hidden");
    } else {
      cartEmptyMessage.classList.add("hidden");
    }

    cart.forEach((product) => {
      let cartItem = document.createElement("li");
      let removeBtn = document.createElement("button");

      removeBtn.textContent = "Remove";
      cartItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
      cartItem.appendChild(removeBtn);
      cartItemsList.appendChild(cartItem);
      calculateTotal();

      //remove product from the cart
      removeBtn.addEventListener("click", () => {
        cart = cart.filter((element) => element.id !== product.id);
        addToLocal();
        cartItem.remove();
        calculateTotal();
        if (!cart.length) {
          cartEmptyMessage.classList.remove("hidden");
        }
      });
    });
  }

  // function to calculate the total of the cart and display it
  function calculateTotal() {
    if (!cart.length) {
      total.innerHTML = `Total: $0.00}`;
    }
    let itemTotal = cart.reduce((sum, item) => sum + item.price, 0);

    total.innerHTML = `Total: $${itemTotal.toFixed(2)}`;
  }

  // alert on checkout cart and empty the cart and local storage

  checkoutBtn.addEventListener("click", () => {
    localStorage.clear();
    cart = [];
    addToLocal();
    displayCart();
    alert("Your" + total.innerHTML);
    cartEmptyMessage.classList.remove("hidden");
  });
});
