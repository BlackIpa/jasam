<?php
	header("Access-Control-Allow-Origin: *");

	$json = file_get_contents('php://input');

	$params = json_decode($json);

	$email = $params->email;
	$name = $params->name;
	$message = $params->message;
	$phone = $params->phone;
	$txt = $message."\r\n".$name."\r\n".$email."\r\n".$phone;
	$recipient = 'kontakt@ja-sam.pl';
	$subject = 'Wiadomość ze strony Ja sam!';
 	$headers = "From: $name <$email>";

	mail($recipient, $subject, $txt, $headers)
?>