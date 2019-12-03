const products =
  JSON.parse(window.localStorage.getItem("products")) || new Array();

const cartContent = document.querySelector("#cart-content tbody");
fillShoppingCart(products);

cartContent.addEventListener("click", removeCourse);
function removeCourse(e) {
  if (e.target.classList.contains("remove")) {
    foundIndex = products.findIndex(
      x => x.id == e.target.getAttribute("data-id")
    );
    wt = new webtrekkV3(pageconfig);
    wt.product = products[foundIndex].title;
    wt.customEcommerceParameter = {
      1: String(products[foundIndex].qty) //removed from shopping cart
    };
    wt.sendinfo();

    products.splice(foundIndex, 1);
    window.localStorage.setItem("products", JSON.stringify(products));

    e.target.parentElement.parentElement.remove();
  }
}
if (document.querySelector("#add-to-cart")) {
  let foundIndex;
  let product = null;
  document.querySelector("#add-to-cart").addEventListener("click", () => {
    if (
      (foundIndex = products.findIndex(
        product =>
          product.id ==
          document.querySelector("button#add-to-cart").getAttribute("data-id")
      )) !== -1
    ) {
      products[foundIndex].qty += parseInt(
        document.querySelector("input#productQuantity").value
      );
      document.querySelector(
        `.product-${products[foundIndex].id}`
      ).textContent = products[foundIndex].qty;
    } else {
      product = {
        image: document.querySelector("img.img-one").src,
        title: document.querySelector("h2#title-product").textContent,
        price: document.querySelector(".price").textContent,
        qty: parseInt(document.querySelector("input#productQuantity").value),
        id: document.querySelector("button#add-to-cart").getAttribute("data-id")
      };
      products.push(product);

      addItemToCart(product);
    }

    window.localStorage.setItem("products", JSON.stringify(products));

    // send add Product to Webtrekk
    wt = new webtrekkV3(pageconfig);
    wt.product = document.querySelector("h2#title-product").textContent;
    wt.productQuantity = document.querySelector("input#productQuantity").value;
    wt.productStatus = "add";
    wt.sendinfo();
  });
}

function fillShoppingCart(products) {
  products.forEach(product => {
    addItemToCart(product);
  });
}

function addItemToCart(product) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <tr>
      <td>
        <img
          src="${product.image}"
          alt="${product.title}"
          width="100"
        />
      </td>
      <td>
        ${product.title}
      </td>
      <td>
        ${product.price}
      </td>
      <td class="product-${product.id}">
        ${product.qty}
      </td>
      <td>
        <a href="#" class="remove" data-id="${product.id}">X</a>
      </td>
    </tr>
    `;

  cartContent.appendChild(row);
}
