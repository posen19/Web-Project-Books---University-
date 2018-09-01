<?php
	require('class/GestorUsuari.php');
	session_start();
	$DBManager=new GestorUsuario();

	$consulta=$DBManager->mostrarUser($_SESSION['id']);
	if($consulta!==false){
		$data=mysql_fetch_array($consulta);
		header('Content-Type: application/json');
		echo json_encode($data);
	}else{	
		echo "usuario o contraseña incorrecto o otra cosa.. :)";
	}
?>