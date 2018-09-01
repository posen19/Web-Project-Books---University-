<?php
include_once("conexio.php");


class GestorUsuario{

 	var $db;
  var $mysqli;

 	function __construct(){
 	}

	function inserir($usuari){
		if(!$db){
      $db = DBManager::getInstance();
    }
    $mysqli = $db->getConnection();
		return $mysqli->query("INSERT INTO user (Nom, Cognom, Email, Tel, pass, FechaNacimiento, Direccion, Poblacion, Pais, CodigoPostal, Iban, permiso, img) VALUES ('".$usuari->getNom()."', '".$usuari->getCognom()."','".$usuari->getEmail()."','".$usuari->getTel()."','".$usuari->getPass()."','".$usuari->getFeNa()."','".$usuari->getDire()."','".$usuari->getPob()."','".$usuari->getPais()."','".$usuari->getCp()."','".$usuari->getIban()."',".$usuari->getPermis().",'".$usuari->getImg()."')");
	}

	function actualizarPermiso($perm,$id){
		if(!$db){
      $db = DBManager::getInstance();
    }
    $mysqli = $db->getConnection();
		return $mysqli->query("UPDATE user SET permiso = '".$perm."' WHERE id = ".$id);
	}

	function actualizar($user){
		if(!$db){
      $db = DBManager::getInstance();
    }
    $mysqli = $db->getConnection();
		return $mysqli->query("UPDATE user SET Nom = '".$user->getNom()."',Cognom = '".$user->getCognom()."',Email = '".$user->getEmail()."',Tel = '".$user->getTel()."',FechaNacimiento = '".$user->getFeNa()."',Direccion = '".$user->getDire()."',Poblacion = '".$user->getPob()."',Pais = '".$user->getPais()."',CodigoPostal = '".$user->getCp()."',Iban = '".$user->getIban()."' WHERE id = ".$user->id);
	}

	function actualizarImg($idUser, $img){
		if(!$db){
      $db = DBManager::getInstance();
    }
    $mysqli = $db->getConnection();
		return $mysqli->query("UPDATE user SET img = 'Img/".$img."' WHERE id = ".$idUser);
	}

	function comprobarLogin($mail,$pass){
		if(!$db){
      $db = DBManager::getInstance();
    }
    $mysqli = $db->getConnection();
		return $mysqli->query("SELECT * FROM user WHERE Email='".$mail."' AND pass='".$pass."'");
	}

	function mostrarUser($id){
		if(!$db){
      $db = DBManager::getInstance();
    }
    $mysqli = $db->getConnection();
		return $mysqli->query("SELECT * FROM user WHERE id='".$id."'");
	}


	function mostrar_User(){
		if(!$db){
      $db = DBManager::getInstance();
    }
    $mysqli = $db->getConnection();
		return $mysqli->query("SELECT * FROM user ORDER BY id DESC");
	}

	function eliminar($id){

		if(!$db){
      $db = DBManager::getInstance();
    }
    $mysqli = $db->getConnection();
		return $mysqli->query("DELETE FROM user WHERE id=".$id);
	}
}
?>
