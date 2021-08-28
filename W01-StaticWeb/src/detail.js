const detailContent = (book) =>  
`
  <div class="card-detail-container">
    <div class="card-detail-image-container">
      <img class="card-detail-image" src=${book.primer["url-foto"]}></img>
    </div>
    <div class="card-detail-text-container">
      <div class="card-detail-nama"> ${(book.judul).toUpperCase()}</div>
      <div class="card-detail-desc-container">
        <div class="card-detail-desc"> Penulis :  ${book.deskripsi.penulis}</div>
        <div class="card-detail-desc"> Penerbit : ${book.deskripsi.penerbit}</div>
        <div class="card-detail-desc"> Penyunting : ${book.deskripsi.penyunting}</div>
      </div>
      <div class="card-detail-harga">${book.primer.harga}</div>
    </div>
  </div>
`;

const body_detail = document.querySelector(".content-detail");

let bodyDetailHTML = '';
const queryString = window.location.search;

data.books.forEach((book) => {
  if(queryString.substring(1) === convertToSlug(book.judul)){
    bodyDetailHTML += detailContent(book);
  }
});

body_detail.innerHTML = bodyDetailHTML;