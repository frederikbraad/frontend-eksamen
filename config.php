<?php
/* Database oplysninger */
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', 'root');
define('DB_NAME', 'game_site');
 
/* Connecter til MySQL database */
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
// Tjekker forbindelse
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
?>