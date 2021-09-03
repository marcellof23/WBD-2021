<?php
header('Access-Control-Allow-Origin: *');

// (A) USER & PASSWORD SHOULD BE KEPT SAFELY IN A DATABASE...
$user = [
    "name" => "John Doe",
    "email" => "john@doe.com",
    "password" => "1",
];

// (B) CHECK USER & PASSWORD

$pass = 0;

if (isset($_POST['email'])) {
    $pass = $_POST['email'] == $user['email'];
}

if ($pass) {$pass = $_POST['password'] == $user['password'];}

// (C) START SESSION IF VALID USER
if ($pass) {
    session_start();
    $_SESSION['user'] = [
        "name" => $user['name'],
        "email" => $user['email'],
    ];
}

// (D) RESPOND TO AJAX
if ($pass) {
    echo "ajaxResponse=OK; ";
} else {
    echo "error=true; ";
}

if (isset($_POST['email-cookie']) && $_POST['email-cookie'] == $user['email'] && isset($_POST['pass-cookie']) && $_POST['pass-cookie'] == $user['password']) {
    echo "authResponse=OK; ";
}

/* (F) TO LOGOFF
 * unset($_SESSION['user']);
 */
