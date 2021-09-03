function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function parse(name, str) {
  const value = `; ${str}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

async function auth(_cb){
  // (A) GET EMAIL + PASSWORD
  var data = new FormData();
  data.append('email-cookie', getCookie("email-cookie"));
  data.append('pass-cookie', getCookie("pass-cookie"));

  // (B) AJAX REQUEST
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:9000");

  xhr.send(data);

  xhr.onload = function _cb() {
    console.log("woi");
    console.log(this.response);
    if (parse("authResponse",this.response) == "OK") {
      return true;
    }
    else {
      location.href = "/login.html";
      return false;
    }
  };

}