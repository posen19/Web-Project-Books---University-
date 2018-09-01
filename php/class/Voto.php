<?php

class Voto{
	
	var $idLibro;
	var $idUser;
	var $voto;
	
	function Voto($idUser,$idLibro,$voto)
	{		
		$this->idLibro=$idLibro;
		$this->idUser=$idUser;
		$this->voto=$voto;
	}
	
	//GETTERS
	function getIdUser(){
		return $this->idUser;
	}
	function getIdLibro(){
		return $this->idLibro;
	}
	function getVoto(){
		return $this->voto;
	}	
	
	//SETTERS
	function setIdUser($idUser){
		$this->idUser=$idUser;
	}
	function setIdLibro($idLibro){
		$this->idLibro=$idLibro;
	}
	function setVoto($voto){
		$this->voto=$voto;
	}
	
}

?>