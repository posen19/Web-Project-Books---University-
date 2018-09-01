<?php
require('class/GestorLibro.php');

$idLibro=$_GET['idL'];
$DBManager=new GestorLibro();

$DBManager->eliminar($idLibro);
?>
