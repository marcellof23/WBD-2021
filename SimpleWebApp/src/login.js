function login() {
  // (A) GET EMAIL + PASSWORD
  var data = new FormData();
  const email = document.getElementById("user-email").value;
  const password = document.getElementById("user-pass").value;
  data.append("email", email);
  data.append("password", password);

  // (B) AJAX REQUEST
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:9000");

  xhr.send(data);
  xhr.onload = function () {
    if (parse("ajaxResponse", this.response) == "OK") {
      let emailCookie = "email-cookie=" + email + "; ";
      let passCookie = "pass-cookie=" + password + "; ";
      let Expire = "max-age=3600; path=/;";
      document.cookie = passCookie + Expire;
      document.cookie = emailCookie + Expire;
      location.href = "/";
    } else {
      alert("Username or Password is wrong");
    }
  };

  return false;
}
