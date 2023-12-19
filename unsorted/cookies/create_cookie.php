<?php
  $cookie_name = "user";
  $cookie_value = "John Doe";
  if (!isset($_COOKIE[$cookie_name])) {
    echo ("Cookie is not set. ");
    setcookie($cookie_name, $cookie_value, time() + 3600);
    echo ("Cookie is created.");
  }
?>