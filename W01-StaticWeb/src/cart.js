const cartContent = () => `
    <div class="cart-container">
      Tes
    </div>
`;

const mainCart = () => {
  const body_cart = document.querySelector(".cart-body");

  const body = document.querySelector("body");

  const div0 = document.createElement("div");

  body.classList.add("none");

  let strCookie = parse("cart-cookie", document.cookie);
  let arrCookie = [];
  if (strCookie != undefined) {
    arrCookie = strCookie.split(",");
    //arrCookie.push(data.books[detailContent.state.currKey].id);
  } else {
    //arrCookie.push(data.books[detailContent.state.currKey].id);
  }

  let bodyCartHTML = "";

  arrCookie.forEach((cart, i) => {
    bodyCartHTML += cartContent(cart);
  });

  // bodyCartHTML += cartContent();

  if (auth()) {
    body_cart.innerHTML = bodyCartHTML;
  }
};

mainCart();
