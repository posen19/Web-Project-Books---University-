<?php

class Libro{
	
	var $idLibro;
	var $titulo;
	var $autor;
	var $imagen;
	var $url;
	var $descripcion;

	
	function Usuari($idLibro,$titulo,$autor,$imagen,$url,$descripcion)
	{		
		$this->idLibro=$idLibro;
		$this->titulo=$titulo;
		$this->autor=$autor;
		$this->imagen=$imagen;
		$this->url=$url;
		$this->descripcion=$descripcion;
	}
	
	//GETTERS
	function getTitulo(){
		return $this->titulo;
	}
	function getIdLibro(){
		return $idLibro->idLibro;
	}
	function getAutor(){
		return $this->autor;
	}
	function getImagen(){
		return $this->imagen;
	}
	function getUrl(){
		return $this->url;
	}
	function getDescripcion(){
		return $this->descripcion;
	}
	
	
	//SETTERS
	function setTitulo($titulo){
		$this->titulo=$titulo;
	}
	function setIdLibro($idLibro){
		$this->idLibro=$idLibro;
	}
	function setAutor($autor){
		$this->autor=$autor;
	}
	function setImagen($imagen){
		$this->imagen=$imagen;
	}
	function setUrl($url){
		$this->url=$url;
	}
	function setDescripcion($descripcion){
		$this->descripcion=$descripcion;
	}
	
}

?>