//only for video.html as testscript
if (document.querySelector("#send-request"))
  document.querySelector("#send-request").addEventListener("click", () => {
    wt_sendinfo_media(
      document.querySelector("#mi").value,
      document.querySelector("#mk").value,
      document.querySelector("#mt1").value,
      document.querySelector("#mt2").value,
      document.querySelector("#eid").value,
      document.querySelector("#bw").value,
      document.querySelector("#vol").value,
      document.querySelector("#mut").value
    );
  });

//shopping cart
if (document.querySelector("#cart-content")) {
  const cartContent = document.querySelector("#cart-content tbody");

  cartContent.addEventListener("click", removeCourse);
  function removeCourse(e) {
    if (e.target.classList.contains("remove")) {
      e.target.parentElement.parentElement.remove();
      wt.customEcommerceParameter = {
        1: "1" //removed from shopping cart
      };
      wt.sendinfo();
    }
  }

  document.querySelector("#add-to-cart").addEventListener("click", () => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <tr>
      <td>
        <img
          src="./img/flowers1.jpg"
          alt="blue-lilies"
          width="100"
        />
      </td>
      <td>
        Blaue Lilien
      </td>
      <td>
        € 40,00
      </td>
      <td>
        <a href="#" class="remove" data-id="1">X</a>
      </td>
    </tr>
    `;

    cartContent.appendChild(row);
    wt.product = document.querySelector("h2#title-product").textContent;
    wt.productQuantity = document.querySelector("input#productQuantity").value;
    wt.productStatus = "add";
    wt.sendinfo();
  });
}
