<?php
    $cookie_name = "user";
    if (isset($_COOKIE[$cookie_name])) {
        echo "Cookie has key $cookie_name with value: ${_COOKIE[$cookie_name]}";
        echo "<br>The raw array of cookies: ";
        print_r($_COOKIE);
    }
?>