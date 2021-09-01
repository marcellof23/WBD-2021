function login(){
  // (A) GET EMAIL + PASSWORD
  var data = new FormData();
  data.append('email', document.getElementById("user-email").value);
  data.append('password', document.getElementById("user-pass").value);
  console.log(document.getElementById("user-email").value);
  console.log(data['password']);
  // (B) AJAX REQUEST
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:8000");
  xhr.onload = function() {
    if (this.response == "OK") { location.href = "/"; }
    else { alert("YEY"); }
  };
  xhr.send(data);
  return false;
}