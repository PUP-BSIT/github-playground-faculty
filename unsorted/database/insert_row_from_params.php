<?php
    $servername = "localhost";
    $db = "comp20163";
    $conn = mysqli_connect($servername, "root", "", $db);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
        return;
    }

    $dataUsername = $_POST["username"] ?? "";
    $dataPassword = $_POST["password"] ?? "";

    $sql = "INSERT INTO user (username, password)
        VALUES ('${dataUsername}', '${dataPassword}')";
    if (!mysqli_query($conn, $sql)) {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    echo "New record created successfully";
    mysqli_close($conn);
?>