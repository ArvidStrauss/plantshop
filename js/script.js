const products =
  JSON.parse(window.localStorage.getItem("products")) || new Array();

const cartContent = document.querySelector("#cart-content tbody");
fillShoppingCart(products);

cartContent.addEventListener("click", removeCourse);
function removeCourse(e) {
  if (e.target.classList.contains("remove")) {
    e.target.parentElement.parentElement.remove();

    wt.product = document.querySelector("h2#title-product").textContent;
    wt.customEcommerceParameter = {
      1: "1" //removed from shopping cart
    };
    wt.sendinfo();
  }
}
if (document.querySelector("#add-to-cart")) {
  document.querySelector("#add-to-cart").addEventListener("click", () => {
    const product = {
      image: document.querySelector("img.img-one").src,
      title: document.querySelector("h2#title-product").textContent,
      price: document.querySelector(".price").textContent,
      qty: document.querySelector("input#productQuantity").value,
      id: document.querySelector("button#add-to-cart").getAttribute("data-id")
    };
    products.push(product);
    window.localStorage.setItem("products", JSON.stringify(products));
    addItemToCart(product);
    // send add Product to Webtrekk
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
      <td>
        ${product.qty}
      </td>
      <td>
        <a href="#" class="remove" data-id="${product.id}">X</a>
      </td>
    </tr>
    `;

  cartContent.appendChild(row);
}
