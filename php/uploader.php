<?php
	require('class/GestorUsuari.php');
	session_start();

	$DBManager=new GestorUsuario();

	echo $_FILES['uploadedfile']['name'];

	$file_name=$_FILES['uploadedfile']['name'];
	$add="../Img/$file_name";
	if(move_uploaded_file ($_FILES['uploadedfile']['tmp_name'], $add)){
		echo " Ha sido subido satisfactoriamente";
		$DBManager->actualizarImg($_SESSION['id'], $file_name);
		header('Location: ../perfil.html');
	}else{
		echo "Error al subir el archivo";
	}
?>
