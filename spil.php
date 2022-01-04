<?php
session_start();
 
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: login.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="main.js" defer></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
</head>
<body class="startpage-body" onload="intro()">
<a href="login.php"><img src="images/pepe_cool2.png" id="logo"></a>
    <div class="container">
        <div class="d-flex flex-row justify-content-center">
            <div class="d-flex flex-column col-md-4">
                <p id=pScore>Player score: </p>
                <p id=eScore>NPC score: </p>
                <p>Use arrow keys to control character</p>
                <p id=smallText>(Only use reset button if game crashes, game resets automatically)</p>
                <canvas id="canvas1" width="500px" height="500px"></canvas>
            </div>
        </div>
    </div>           
</body>
</html>