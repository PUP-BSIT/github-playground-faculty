<?php
    $conn = mysqli_connect("localhost", "root", "", "comp20163");
    
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
        return;
    }

    $sql = "SELECT id, username FROM user";
    $result = mysqli_query($conn, $sql);
    $response = [];
    while($row = mysqli_fetch_assoc($result)) { 
        array_push($response, array(
            'id'=>$row["id"],
            'username'=> $row["username"]));
    }
    
    echo json_encode($response);
    $conn->close();
?>
