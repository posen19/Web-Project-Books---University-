<?php
require('class/GestorVoto.php');
require('class/GestorLibro.php');
require('class/Voto.php');
require('class/Libro.php');
session_start();

$DBManagerLib=new GestorLibro();
$consulta=$DBManagerLib->mostrarId($_GET['tit1']);
if($consulta!==false){
	$id=mysql_fetch_array($consulta);
	unset($DBManagerLib);
	$voto=new Voto($_SESSION['id'],$id[0],$_GET['voto1']);
	$DBManagerVot=new GestorVoto();
	$consultaVoto=$DBManagerVot->inserir($voto);
	if ($consultaVoto!==false){
		echo "Agregado correctamente";
	}else{
		$conculta2Voto=$DBManagerVot->actualizarVoto($voto);
		if ($conculta2Voto==false){
			echo "No se ha podido actualizar.";
		}else{
			echo "Se ha actualizado correctamente.";
		}
	}
}
?>