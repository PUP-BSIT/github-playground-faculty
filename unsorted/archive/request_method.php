<?php
	switch($_SERVER['REQUEST_METHOD']) {
		case 'POST':
			echo "That is a 'POST' request.";
			return;
		case 'GET':
			echo "That is a 'GET' request.";
			return;
		default:
			echo "That's a request.";
			break;
   } 
?>
<strong>hello world</strong>
