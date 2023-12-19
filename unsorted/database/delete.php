<?php
    $conn = mysqli_connect("localhost", "root", "", "comp20163");
    if (!$conn) return;

    parse_str(file_get_contents('php://input'), $_DELETE);
    $id = $_DELETE["id"] ?? "";

    $sql = "DELETE FROM user WHERE id=${id}";
    if (!mysqli_query($conn, $sql)) {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    echo "Deleted successfully!";
    mysqli_close($conn);
?>