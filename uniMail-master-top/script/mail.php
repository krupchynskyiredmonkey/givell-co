<?php

$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach
$c = true;
if ( $method === 'POST' ) {

  $project_name = trim($_POST["project_name"]);
  $admin_email  = trim($_POST["admin_email"]);
  $form_subject = trim($_POST["form_subject"]);
  $recip_email = trim($_POST["E-mail-top"]);
  $first_name = trim($_POST["First_name-top"]);

  foreach ( $_POST as $key => $value ) {
    if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
      $message .= "
      " . ( ($c = !$c) ? '':'' ) . "
        $key
        $value
      
      ";
    }
  }
} else if ( $method === 'GET' ) {

  $project_name = trim($_GET["project_name"]);
  $admin_email  = trim($_GET["admin_email"]);
  $form_subject = trim($_GET["form_subject"]);
  $recip_email = trim($_GET["E-mail-top"]);
  $first_name = trim($_GET["First_name-top"]);

  foreach ( $_GET as $key => $value ) {
    if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
      $message .= "
      " . ( ($c = !$c) ? '<tr>':'<' ) . "
        $key
        $value

      ";
    }
  }
}


function adopt($text) {
  return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

/* Для отправки HTML-почты вы можете установить шапку Content-type. */
$headers2= "MIME-Version: 1.0\r\n";
$headers2 .= "Content-type: text/html; charset=UTF-8\r\n";

/* дополнительные шапки */
$headers2 .= "From: Givell <admin@givell.co>\r\n";
$headers2 .= "Cc: admin@givell.co\r\n";
$headers2 .= "Bcc: admin@givell.co\r\n";

$form_subject2 = 'Thank you!';

$sms = "
<html>
<head></head>
<body>
<h3>Hello, {$first_name}</h3>
<p>We are happy that you found Givell interesting and signed up for our beta. </p>

<p>Now we are in progress of creating this experience for you, and with your support we are one step closer. </p>

<p>Please let your friends know about Givell and ask them to sign up for our beta, and join our discord channel by clicking the link. You can find some interesting information there and chat to the founders. </p>

<p>Discord link: https://discord.gg/9Xjp7VhEXn </p>

<p>Please do not reply to this email. </p>

<p>All Best, <br>
Givell Founders </p>
</body>
</html>";

mail($admin_email, adopt($form_subject), $message, $headers );
mail($recip_email, adopt($form_subject2), $sms, $headers2 );