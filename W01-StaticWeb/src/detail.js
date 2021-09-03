const descriptionContent = (book) => {
  let outputDesc = ""
  for (const b in book.deskripsi)
  {
    console.log(book.deskripsi);
    if(book.deskripsi[b] !== undefined)
    {
      outputDesc += `<div class="card-detail-desc"> ${b} :  ${book.deskripsi[b]}</div>`
    }
  } 
  return outputDesc
}

const detailContent = (book) =>  
`
  <div class="card-detail-container">
    <div class="card-detail-container-inner">
      <div class="card-detail-image-container">
        <img class="card-detail-image" src=${book.primer["url-foto"]}></img>
      </div>
      <div class="card-detail-text-container">
        <div class="card-detail-nama"> ${(book.judul).toUpperCase()}</div>
        <div class="card-detail-desc-container">
          ${descriptionContent(book)}
        </div>
        <div class="card-detail-harga">Rp${book.primer.harga},-</div>
      </div>
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

if(auth()) {
  console.log("HEI");
  body_detail.innerHTML = bodyDetailHTML;
}
