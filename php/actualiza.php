<?php
require('class/GestorUsuari.php');
require('class/Usuari.php');
session_start();
$usuario=new Usuari($_POST['nom2'],$_POST['cnom2'],$_POST['mail2'],$_POST['tel2'],"",$_POST['fecha2'],$_POST['dir2'],$_POST['pob2'],$_POST['pais2'],$_POST['cp2'],$_POST['iban2'],0,$_SESSION['id'],"");
$DBManager=new GestorUsuario();

$DBManager->actualizar($usuario);

echo "El usuario no se ha podido crear correctamente.";
?>