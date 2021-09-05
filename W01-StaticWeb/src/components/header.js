const targetURL = (pathname) => {
  const str = window.location.pathname.replace(
    window.location.pathname,
    pathname
  );
  console.log(window.location.pathname);
  return str;
};

const logout = () => {
  document.cookie = "email-cookie=1" + ";max-age=0";
  document.cookie = "pass-cookie=1" + ";max-age=0";
  document.cookie = "cart-cookie=1" + ";max-age=0";
};
const header = `
  <div class="header">
     <a class="header-text" href="${targetURL("index.html")}">Home</a>
     <a class="header-text" href="${targetURL("cart.html")}">Cart</a>
     <a class="header-text" onclick="logout()" href="${targetURL(
       "login.html"
     )}">Logout</a>
  </div>
`;

const body_header = document.querySelector(".header-container");

body_header.innerHTML = header;
