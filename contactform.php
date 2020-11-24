<?php

if (isset($_POST['submit'])) {
    $surname = $_POST['surname'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $sujet = $_POST['sujet'];
    $message = $_POST['message'];

    $mailTo = "teresa.scutari@gmail.com";
    $headers = "From: ".$email;
    $txt = "Vous avez reçu un message de : ".$name.".\n\n".$message;

    mail($mailTo, $sujet, $txt, $headers);
    header("Location: index.html?mailsend");
}