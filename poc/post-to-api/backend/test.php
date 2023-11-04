<?php
  echo "HTTP Method: ".$_SERVER["REQUEST_METHOD"];
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo ',Message: '.$_POST['message'];
  }
  if ($_SERVER["REQUEST_METHOD"] == "GET") {
    echo ',Message: '.$_POST['message'];
  }
?>