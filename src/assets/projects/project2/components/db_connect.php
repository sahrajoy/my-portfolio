<?php
    // XAMPP Apache and MySQL needs to run

    $host = "173.212.235.205";        // hostname, you can find the information in phpMyAdmin at the house symbol you can write localhost or 127.0.0.1 
    $user = "sahracodefactory";             // username, root is mostly default root
    $pass = "zj}(sYH(NC]J";                 // password, by default normaly not set
    $dbName = "library";   // Databasename like in phpMyAdmin

    // connection to the database
    $conn = mysqli_connect($host, $user, $pass, $dbName);

    // if the connection failed you get a message
    if(!$conn){
        die("connection failed");
    }