<?php

	require('class/GestorUsuari.php');
	session_start();

	$mail=$_POST['mail1'];
	$pass=$_POST['pass1'];

	$DBManager=new GestorUsuario();

	$consulta=$DBManager->comprobarLogin($mail,$pass);
	if($consulta!==false){
		$data=mysql_fetch_array($consulta);
		$_SESSION["id"]=$data[0];
		$_SESSION["mail"]=$data[3];
		header('Content-Type: application/json');
		echo json_encode($data);
	}else{	
		echo "usuario o contraseña incorrecto o otra cosa.. :)";
	}
?>