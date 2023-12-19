<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $db = "comp20163";
    $conn = mysqli_connect($servername, $username, $password, $db);
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
        return;
    }
    echo "Connected successfully";
    mysqli_close($conn);
?>