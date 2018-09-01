<?php
//Carregar codi de la Classe Client
require('class/GestorLibro.php');
//Instància de l'objecte
$objLibro=new GestorLibro;
//Invocar mètode (Recollir tots els Clients)
$consulta=$objLibro->mostrarLibros();
//Cal que el primer index sigui 1 (per poder usar each en JS)
/*while($r = mysqli_fetch_assoc($consulta)) {
    $dades[] = $r;
}*/
for($i = 0; $dades[$i] = $consulta->fetch_array(); $i++) ;
array_pop($dades); //Eliminar l'últim ja que crea un últim element buid
//Enviar capaçalera indicant JSON
header('Content-Type: application/json');
//Codificar en JSON i retornar petició en un array entenible per JS
echo json_encode($dades);
	//echo $dades;
?>
