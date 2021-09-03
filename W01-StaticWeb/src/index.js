const asideContent = (book) =>  `
  <div class="aside-container">
    <p class="aside-nama">${book.judul}</p>
    <p class="aside-harga">Rp ${book.primer.harga},-</p>
  </div>
`;

const currURL = () => {
  let str = ''
  if(window.location.hostname != '') {
    str = ""
  }
  else {
    str = window.location.pathname.replace("index.html", "");
  }
  
  return str;
}

const bookCard = (book) =>  `
  <div class="book-container">
    <div class="book-card">
      <div class="book-card__cover">
        <div class="book-card__book">
          <div class="book-card__book-front">
            <img class="book-card__img" src=${book.primer['url-foto']} />
          </div>
          <div class="book-card__book-back"></div>
          <div class="book-card__book-side"></div>            
        </div>
        <div class="book-button-container">
          <a class="book-a" href="${currURL()}/detail.html?${convertToSlug(book.judul)}">
            <div class="book-button">
              View
            </div>
          </a>  
        </div>  
      </div>
    </div>
  </div> 
`;

const mainHome = () => {
  const bodyHome = document.querySelector(".home-container");
  const aside = document.querySelector(".aside-class");
  
  let bodyHTML = '';
  data.books.forEach((book) => {
    bodyHTML += bookCard(book);
  });
  
  let asideHTML = '';
  data.books.forEach((book) => {
    asideHTML += asideContent(book);
  });
  
  aside.innerHTML = asideHTML;

  if(auth()) {
    bodyHome.innerHTML = bodyHTML;
  }
  
}

mainHome();


