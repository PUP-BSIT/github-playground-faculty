<?php
    $conn = mysqli_connect("localhost", "root", "", "comp20163");
    if (!$conn) return;

    parse_str(file_get_contents('php://input'), $_PATCH);
    $dataUserId = $_PATCH["id"] ?? "";
    $dataUsername = $_PATCH["username"] ?? "";
    $dataPassword = $_PATCH["password"] ?? "";

    $sql = "UPDATE user 
        SET username='${dataUsername}',password='${dataPassword}'
        WHERE id=${dataUserId}";
    if (!mysqli_query($conn, $sql)) {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    echo "Updated successfully";
    mysqli_close($conn);
?>