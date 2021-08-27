import data from "../data.js";

const header =  `
  <div class="header">
     <a class="header-text" href="/">Home</a>
  </div>
`;

const body_header = document.querySelector(".header-container");

body_header.innerHTML = header;