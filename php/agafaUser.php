<?php
	require('class/GestorUsuari.php');
	
	$DBManager=new GestorUsuario();

	$consulta=$DBManager->mostrar_User();
	if($consulta!==false){

		for($i=0;$data[$i]=mysql_fetch_array($consulta);$i++);
		array_pop($data);

		header('Content-Type: application/json');

		echo json_encode($data);
	}else{	
		echo "usuario o contraseña incorrecto o otra cosa.. :)";
	}
?>