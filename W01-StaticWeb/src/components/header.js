const targetURL = (pathname) => {
  const str = window.location.pathname.replace(
    window.location.pathname,
    pathname
  );
  console.log(window.location.pathname);
  return str;
};

const header = `
  <div class="header">
     <a class="header-text" href="${targetURL("index.html")}">Home</a>
     <a class="header-text" href="${targetURL("cart.html")}">Cart</a>
  </div>
`;

const body_header = document.querySelector(".header-container");

body_header.innerHTML = header;
