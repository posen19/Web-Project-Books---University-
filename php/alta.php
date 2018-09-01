<?php
require('class/GestorUsuari.php');
require('class/Usuari.php');

$usuario=new Usuari($_POST['nom1'],$_POST['cnom1'],$_POST['mail1'],$_POST['tel1'],$_POST['password1'],$_POST['datepicker1'],$_POST['direccion1'],$_POST['poblacion1'],$_POST['pais1'],$_POST['codipostal1'],$_POST['iban1'],0,"a",$_POST['img2']);
$DBManager=new GestorUsuario();

$DBManager->inserir($usuario);

echo "El usuario no se ha podido crear correctamente.";
?>
