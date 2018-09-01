<?php
include('class/rss.class.php');//archivo donde este el class 
$rss = new RssReader ("http://trabalibros.com/rssfeed/30/52.xml");//aqui donde esta http://dedydamy.com/feed  tienes que poner la url de tu feed o rss

$num_noticia=1;
$max_noticies=5;

foreach ($rss->get_items() as $item){ //aca hacemos un foreach para el array de las entradas que se muestren en el feed 

	$titol = $item->get_title();//escribimos titulo 
	$url = $item->get_url();///url del post 
	$descripcio = $item->get_description();//descripcion o lo principal del post 

	$noticia[0] = $titol; 
	$descripcio = html_entity_decode($descripcio);
	$noticia[1] = $descripcio; 
	$noticia[2] = $url; 
	$items[$num_noticia] = $noticia;


	$num_noticia++;
	if($num_noticia > $max_noticies){
		break;
	} 
	
} 

// echo json_encode($noticia);
	//Enviar capaçalera indicant JSON
 // header('Content-type: application/json');
// 	//Codificar en JSON i retornar petició en un array entenible per JS
 echo json_encode($items);

?> 