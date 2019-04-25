<?php
	header("Access-Control-Allow-Origin: *");

	$json = file_get_contents('php://input');

	$params = json_decode($json);

	$email = $params->email;
	$name = $params->name;
	$message = $params->message;
	$phone = $params->phone;

	$recipient = 'augustyniak.p@gmail.com';
	$subject = 'Wiadomość ze strony Ja sam!';
	$headers = "From: $name <$email - $phone>";

	mail($recipient, $subject, $message, $headers);
?>