const removeCart = (id) => {
  Array.prototype.remove = function (value) {
    for (var i = this.length; i--; ) {
      if (this[i] == value) {
        this.splice(i, 1);
      }
    }
  };

  let strCookie = parse("cart-cookie", document.cookie);
  let arrCookie = [];
  if (strCookie != undefined) {
    arrCookie = strCookie.split(",");
  }
  console.log(id);
  arrCookie.remove(id - 1);

  let cartCookie = "cart-cookie=" + arrCookie;
  if (arrCookie != undefined) {
    document.cookie = cartCookie;
  }

  if (arrCookie.length == 0) {
    document.cookie = cartCookie + ";max-age=0";
    location.reload();
  }
};

const cartContent = (cart, occ) => `
    <div class="cart-container">
      <div class="cart-img-container">
        <img class="cart-img" src="${cart.primer["url-foto"]}"></img>
      </div>
      <div class="cart-description">
        <div class="cart-judul">${cart.judul}</div>
        <div class="cart-occ">${cart.primer.harga}</div>
        <div class="cart-occ">Jumlah : ${occ}</div>
        <div class="cart-delete" onclick="removeCart(${cart.id})">Remove from Cart</div>
      </div>
    </div>
`;

const mainCart = () => {
  const body_cart = document.querySelector(".cart-body");

  const body = document.querySelector("body");

  body.classList.add("none");

  let strCookie = parse("cart-cookie", document.cookie);
  let arrCookie = [];
  let ArrUnique = [];
  if (strCookie != undefined) {
    arrCookie = strCookie.split(",");
    ArrUnique = arrCookie.filter(onlyUnique);
  } else {
  }

  let bodyCartHTML = "";

  ArrUnique.forEach((cart, i) => {
    bodyCartHTML += cartContent(
      data.books[Number(cart)],
      countOccurrences(arrCookie, cart)
    );
  });

  if (auth()) {
    body_cart.innerHTML = bodyCartHTML;
  }
};

mainCart();
