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

    $sql = "INSERT INTO user (username, password)
        VALUES ('john_doe', 'john1234')";
    if (!mysqli_query($conn, $sql)) {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    echo "New record created successfully";
    mysqli_close($conn);
?>