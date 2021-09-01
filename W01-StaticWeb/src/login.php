<?php

header('Access-Control-Allow-Origin: *');
// USER & PASSWORD SHOULD BE KEPT SAFELY IN A DATABASE...
$user = [
  "name" => "John Doe",
  "email" => "john@doe.com",
  "password" => "12345"
];

//  CHECK USER & PASSWORD
$pass = $_POST['email'] == $user['email'];
if ($pass) { $pass = $_POST['password'] == $user['password']; }
 
// START SESSION IF VALID USER
if ($pass) {
  session_start();
  $_SESSION['user'] = [
    "name" => $user['name'],
    "email" => $user['email']
  ];
}
 
//  RESPOND TO AJAX
echo $pass ? "OK" : "Invalid user or password";
 
//  PROTECT ALL YOUR PAGES
session_start();
if (!is_array(user)) { header("location: http://site.com/login.html"); }

 
/* (F) TO LOGOFF
* unset($_SESSION['user']);
*/