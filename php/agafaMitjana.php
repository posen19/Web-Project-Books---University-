<?php
require('class/GestorVoto.php');
require('class/GestorLibro.php');
session_start();

$DBManagerLib=new GestorLibro();
$consulta=$DBManagerLib->mostrarId($_GET['tit1']);
if($consulta!==false){
	$id=mysql_fetch_array($consulta);
	unset($DBManagerLib);
	$DBManagerVot=new GestorVoto();
	$consultaVoto=$DBManagerVot->mostrarVotosDeLibros($id[0]);
	if ($consultaVoto!==false){
		echo mysql_fetch_array($consultaVoto)[0];
	}else{
		echo "Ha habido un error en cojer una mediana.";
	}
}
?>