<?php
	if(isset($_GET['subject'])) {
		$subject = $_GET['subject'];
		echo "Welcome to $subject!";
		return;
	}
	echo "Please provide subject code.";
?>
