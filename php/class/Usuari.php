<?php

class Usuari{
	
	var $queconiopasa;
	var $id;
	var $nom;
	var $cognom;
	var $email;
	var $tel;
	var $fecha;
	var $pass;
	var $dir;
	var $pob;
	var $pais;
	var $cp;
	var $iban;
	var $premis;
	var $img;
	
	function Usuari($nom,$cognom,$email,$tel,$pass,$feNa,$dir,$pob,$pais,$cp,$iban,$permis,$id,$img)
	{		
		$this->id=$id;
		$this->nom=$nom;
		$this->cognom=$cognom;
		$this->email=$email;
		$this->tel=$tel;
		$this->pass=$pass;
		$this->fecha=$feNa;
		$this->dir=$dir;
		$this->pob=$pob;
		$this->pais=$pais;
		$this->cp=$cp;
		$this->iban=$iban;
		$this->permis=$permis;
		$this->img=$img;

	}
	
	//GETTERS
	function getPermis(){
		return $this->permis;
	}
	function getId(){
		return $this->id;
	}
	function getNom(){
		return $this->nom;
	}
	function getCognom(){
		return $this->cognom;
	}
	function getEmail(){
		return $this->email;
	}
	function getTel(){
		return $this->tel;
	}
	function getFeNa(){
		return $this->fecha;
	}
	function getDire(){
		return $this->dir;
	}
	function getPob(){
		return $this->pob;
	}
	function getPais(){
		return $this->pais;
	}
	function getCp(){
		return $this->cp;
	}
	function getIban(){
		return $this->iban;
	}
	function getPass(){
		return $this->pass;
	}
	function getImg(){
		return $this->img;
	}
	
	//SETTERS
	function setPermis($permis){
		$this->permis=$permis;
	}
	function setId($id){
		$this->id=$id;
	}
	function setNom($nom){
		$this->nom=$nom;
	}
	function setCognom($cognom){
		$this->cognom=$cognom;
	}
	function setEmail($email){
		$this->email=$email;
	}
	function setTel($tel){
		$this->tel=$tel;
	}
	function setFeNa($feNa){
		$this->fecha=$feNa;
	}
	function setDire($dir){
		$this->dir=$dir;
	}
	function setPob($pob){
		$this->pob=$pob;
	}
	function setPais($pais){
		$this->pais=$pais;
	}
	function setCp($cp){
		$this->cp=$cp;
	}
	function setIban($iban){
		$this->iban=$iban;
	}
	function setPass($pass){
		$this->pass=$pass;
	}
	function setImg($img){
		$this->img=$img;
	}
	
}

?>