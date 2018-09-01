<?php

require('class/GestorLibro.php');
require('class/GestorVoto.php');
session_start();
$objVoto=new GestorVoto;
$consulta=$objVoto->mostrarLibrosVotados($_SESSION['id']);

for($i = 0; $dades[$i] = mysql_fetch_array($consulta); $i++) ;
array_pop($dades);
unset($objVoto);

$objLibro=new GestorLibro;
for($i=0;$i<count($dades);$i++){
	$consulta2=$objLibro->mostrarLibro($dades[$i][0]);
	$libro[$i]=mysql_fetch_array($consulta2);
}

header('Content-Type: application/json');

echo json_encode($libro);

?>