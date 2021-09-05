const descriptionContent = (book) => {
  let outputDesc = "";
  for (const b in book.deskripsi) {
    console.log(book.deskripsi);
    if (book.deskripsi[b] !== undefined) {
      outputDesc += `<div class="card-detail-desc"> ${b} :  ${book.deskripsi[b]}</div>`;
    }
  }
  return outputDesc;
};

const detailContent = function _detailContent(book, i) {
  return `
    <div class="card-detail-container">
      <div class="card-detail-container-inner">
        <div class="card-detail-image-container">
          <img class="card-detail-image" src=${book.primer["url-foto"]}></img>
        </div>
        <div class="card-detail-text-container">
          <div class="card-detail-nama"> ${book.judul.toUpperCase()}</div>
          <div class="card-detail-desc-container">
            ${descriptionContent(book)}
          </div>
          <div class="card-detail-button">Add to Cart</div>
          <div class="card-detail-harga">Rp${book.primer.harga},-</div>
        </div>
      </div>
    </div>
    `;
};

detailContent.state = {
  inCart: false,
  currKey: 0,
  changeCartState: () => {
    setState(() => {
      ``;
      let strCookie = parse("cart-cookie", document.cookie);
      let arrCookie = [];
      if (strCookie != undefined) {
        arrCookie = strCookie.split(",");
        console.log(detailContent.state.currKey - 1);
        arrCookie.push(data.books[detailContent.state.currKey].id - 1);
      } else {
        arrCookie.push(data.books[detailContent.state.currKey].id - 1);
      }

      let cartCookie = "cart-cookie=" + arrCookie;
      if (arrCookie != undefined) document.cookie = cartCookie;
      else document.cookie = "tes";
      detailContent.state.inCart = !detailContent.state.inCart;
    });
  },
};

const setState = (callback) => {
  callback();
  mainDetail();
};

const mainDetail = () => {
  const body_detail = document.querySelector(".content-detail");

  const body = document.querySelector("body");

  body.classList.add("none");

  let bodyDetailHTML = "";

  const queryString = window.location.search;

  data.books.forEach((book, i) => {
    if (queryString.substring(1) === convertToSlug(book.judul)) {
      detailContent.state.currKey = i;
      bodyDetailHTML += detailContent(book, i);
    }
  });

  if (auth()) {
    body_detail.innerHTML = bodyDetailHTML;

    var el = document.querySelector(".card-detail-button");
    console.log(el);
    if (el) {
      console.log(el);
      el.addEventListener("click", detailContent.state.changeCartState);
    }
  }
};

mainDetail();
