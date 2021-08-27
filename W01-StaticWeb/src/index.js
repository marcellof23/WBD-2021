import data from "./data.js";
import { convertToSlug } from "./helper.js";


const asideContent = (book) =>  `
  <div class="aside-container">
    <p class="aside-nama">${book.judul}</p>
    <p class="aside-harga">${book.primer.harga}</p>
  </div>
`;

const bookCard = (book) =>  `
  <div class="book-container">
    <a href="/detail.html?${convertToSlug(book.judul)}">
      <div class="book-card">
        <div class="book-card__cover">
          <div class="book-card__book">
            <div class="book-card__book-front">
              <img class="book-card__img" src=${book.primer['url-foto']} />
            </div>
            <div class="book-card__book-back">
            </div>
            <div class="book-card__book-side">
            </div>
          </div>
        </div>
      </div>
    </a>
  </div> 
`;

const body = document.querySelector(".home-container");
const aside = document.querySelector(".aside-class");

let bodyHTML = '';
data.books.forEach((book) => {
  bodyHTML += bookCard(book);
});

let asideHTML = '';
data.books.forEach((book) => {
  console.log(book)
  asideHTML += asideContent(book);
});

aside.innerHTML = asideHTML;
body.innerHTML = bodyHTML;





