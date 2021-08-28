const homeURL = () => {
  const str = window.location.pathname.replace("detail.html", "index.html");
  console.log(window.location.hostname);
  return str;
}

const header =  `
  <div class="header">
     <a class="header-text" href="${homeURL()}">Home</a>
  </div>
`;

const body_header = document.querySelector(".header-container");

body_header.innerHTML = header;