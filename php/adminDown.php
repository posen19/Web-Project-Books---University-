<?php
require('class/GestorUsuari.php');

$id=$_GET['id1'];
$DBManager=new GestorUsuario();

$DBManager->actualizarPermiso(0,$id);
?>
