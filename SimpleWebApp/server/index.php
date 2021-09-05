<?php
header('Access-Control-Allow-Origin: *');

//  USER & PASSWORD CONVERTED FROM user.json FILE...
$user_file = file_get_contents("user.txt");
$usr_array = explode("\n", $user_file);

$usrs = [];
$usr_email = [];
$usr_pass = [];
foreach ($usr_array as $usr) {
    $usr_cred = explode(":", $usr);
    array_push($usr_email, $usr_cred[0]);
    array_push($usr_pass, $usr_cred[1]);
}

$array_user = array_combine($usr_email, $usr_pass);

//  CHECK USER & PASSWORD
$pass = 0;

if (isset($_POST['email'])) {
    if (isset($array_user[$_POST['email']])) {
        $pass = 1;
    } else {
        $pass = 0;
    }

}

if ($pass) {
    if ($_POST['password'] == $array_user[$_POST['email']]) {
        $pass = 1;
    } else {
        $pass = 0;
    }
}

// START SESSION IF VALID USER
if ($pass) {
    session_start();
}

// RESPOND TO AJAX
if ($pass) {
    echo "ajaxResponse=OK; ";
} else {
    echo "error=true; ";
}

if (isset($_POST['email-cookie']) && isset($array_user[$_POST['email-cookie']]) && isset($_POST['pass-cookie']) && $_POST['pass-cookie'] == $array_user[$_POST['email-cookie']]) {
    echo "authResponse=OK; ";
}

/* TO LOGOFF
 * unset($_SESSION['user']);
 */
