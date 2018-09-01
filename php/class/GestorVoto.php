<?php
include_once("conexio.php");


class GestorVoto{

 	var $db;
  var $mysqli;

 	function __construct(){
 	}

	function inserir($voto){
		if(!$db){
      $db = DBManager::getInstance();
    }
    $mysqli = $db->getConnection();
		return $mysqli->query("INSERT INTO votaciones (idUser, idLibro, votacion) VALUES (".$voto->getIdUser().",".$voto->getIdLibro().",".$voto->getVoto().")");
	}

	function actualizarVoto($voto){
		if(!$db){
      $db = DBManager::getInstance();
    }
    $mysqli = $db->getConnection();
		return $mysqli->query("UPDATE votaciones SET votacion = ".$voto->getVoto()." WHERE idUser = ".$voto->getIdUser()." AND idLibro = ".$voto->getIdLibro());
	}

	function mostrarLibrosVotados($idUser){
		if(!$db){
      $db = DBManager::getInstance();
    }
    $mysqli = $db->getConnection();
		return $mysqli->query("SELECT idLibro FROM votaciones WHERE idUser = ".$idUser);
	}

	function mostrarVotosDeLibros($idLibro){
		if(!$db){
      $db = DBManager::getInstance();
    }
    $mysqli = $db->getConnection();
		return $mysqli->query("SELECT sum(votacion)/count(*) FROM votaciones WHERE idLibro = ".$idLibro);
	}

	function eliminar($idUser,$idLibro){
		if(!$db){
      $db = DBManager::getInstance();
    }
    $mysqli = $db->getConnection();
		return $mysqli->query("DELETE FROM votaciones WHERE idUser = ".$idUser." AND idLibro = ".$idLibro);
	}
}
?>
