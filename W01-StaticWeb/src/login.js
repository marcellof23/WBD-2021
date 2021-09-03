function login(){
  // (A) GET EMAIL + PASSWORD
  var data = new FormData();
  const email = document.getElementById("user-email").value;
  const password = document.getElementById("user-pass").value;
  data.append('email', email);
  data.append('password', password);

  // (B) AJAX REQUEST
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:9000");

  xhr.send(data);
  xhr.onload = function() {
    if (parse("ajaxResponse",this.response) == "OK") { 
      let emailCookie ="email-cookie="+ email;
      let passCookie = "pass-cookie="+password; 
      document.cookie = passCookie;
      document.cookie = emailCookie;
      location.href = "/"; 
    }
    else { 
      alert("Username or Password is wrong"); 
    }
    
  };
  
  return false;
}