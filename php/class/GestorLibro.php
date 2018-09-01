<?php
include_once("conexio.php");


class GestorLibro{

 	var $db;
  var $mysqli;

 	function __construct(){
 	}

	function inserir($libro){
		if(!$db){
      $db = DBManager::getInstance();
    }
    $mysqli = $db->getConnection();
		return $mysqli->query("INSERT INTO libros (titulo, autor, imagen, url, descripcion) VALUES ('".$libro->getTitulo()."', '".$libro->getAutor()."','".$libro->getImagen()."','".$libro->getUrl()."','".$libro->getDescripcion()."')");
	}

	function actualizar($libro){
		if(!$db){
      $db = DBManager::getInstance();
    }
    $mysqli = $db->getConnection();
		return $mysqli->query("UPDATE libros SET titulo = '".$libro->getTitulo()."',autor = '".$libro->getAutor()."',imagen = '".$libro->getImagen()."',url = '".$libro->getUrl()."',descripcion = '".$libro->getDescripcion()."'");
	}

	function mostrarLibro($id){
		if(!$db){
      $db = DBManager::getInstance();
    }
    $mysqli = $db->getConnection();
		return $mysqli->query("SELECT * FROM libros WHERE idLibro=".$id);
	}

	function mostrarLibros(){
		if(!$db){
      $db = DBManager::getInstance();
    }
    $mysqli = $db->getConnection();
		return $mysqli->query("SELECT * FROM libros ORDER BY idLibro DESC");
	}

	function mostrarTitulo($autor){
		if(!$db){
      $db = DBManager::getInstance();
    }
    $mysqli = $db->getConnection();
		return $mysqli->query("SELECT titulo FROM libros WHERE autor = '".$autor."'");
	}

	function mostrarId($titulo){
		if(!$db){
      $db = DBManager::getInstance();
    }
    $mysqli = $db->getConnection();
		return $mysqli->query("SELECT idLibro FROM libros WHERE titulo = '".$titulo."'");
	}

	function eliminar($id){
		if(!$db){
      $db = DBManager::getInstance();
    }
    $mysqli = $db->getConnection();
		return $mysqli->query("DELETE FROM libros WHERE idLibro=".$id);
	}
}
?>
