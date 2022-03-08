<?php
	header("Access-Control-Allow-Origin: *");
	$json = file_get_contents('php://input');
	$params = json_decode($json);
	
	$email = $params->email;
	$name = $params->name;
	$message = $params->message;
	$phone = $params->phone;

	$to = 'kontakt@ja-sam.pl';
	$subject = 'Wiadomość ze strony Ja sam!';
	$txt = '<html><head></head>
		<body><p>' . $message . 
		'</p><p>' . $name .
		'</p><p>email: ' . $email .
		'</p><p>tel: ' . $phone .
		'</p></body></html>';
	// Additional headers
	$headers = 'Content-type: text/html; charset=UTF-8' .
    'X-Mailer: PHP/' . phpversion();

	mail($to, $subject, $txt, $headers);
?>