<?php
	$grade = 1.25;
	if(isset($_GET['subject'])) {
		$subject = $_GET['subject'];
		echo "Welcome to $subject! Your grade is $grade";
		return;
	}
	echo "Please provide subject code.";
?>