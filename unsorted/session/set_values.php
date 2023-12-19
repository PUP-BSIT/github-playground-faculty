<?php 
    session_start();
    $_SESSION['username'] = 'svillarosa';
    $_SESSION['email'] = 'test@sample.com';
    echo 'session values are set';
?>