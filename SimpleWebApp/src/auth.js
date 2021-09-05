function parse(name, str) {
  const value = `; ${str}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

async function auth(_cb) {
  // (A) GET EMAIL + PASSWORD
  var data = new FormData();
  data.append("email-cookie", parse("email-cookie", document.cookie));
  data.append("pass-cookie", parse("pass-cookie", document.cookie));

  // (B) AJAX REQUEST
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:9000");

  xhr.send(data);

  xhr.onload = function _cb() {
    if (parse("authResponse", this.response) == "OK") {
      const body = document.querySelector("body");
      body.classList.remove("none");
      return true;
    } else {
      location.href = "/login.html";
      return false;
    }
  };
}
