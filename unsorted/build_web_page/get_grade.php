<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Welcome</title>
	</head>
	<body>
		<?php
			$grade = 1.25;
			if(isset($_GET['subject'])) {
				$subject = $_GET['subject'];
				echo "<h1>Welcome to $subject!</h1>
				<h2>Your grade is $grade</h2>";
				return;
			}
			echo "<strong>Please provide subject code.<strong>";
		?>
	</body>
</html>
