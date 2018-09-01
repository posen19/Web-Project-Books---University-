<?php
 
    $conn=mysql_connect("192.168.3.3","ep1","ep1"); // host, username, password...
    mysql_select_db("paulo"); // db name...
   
  	$i=0;
	while ($i < $_POST['Size']) {

		$nom1='Nombre'.$i;
	    $oboj1='Objetivo'.$i;
	    $persEnc1='PersonasEncuestadas'.$i;
	    $dataI1='DataIni'.$i;
	    $dataO1='DataObj'.$i;
	    $user1='User'.$i;
	    $estado1='Estado'.$i;

	    $nom=$_POST[$nom1];
	    $obj=$_POST[$oboj1];
	    $persEnc=$_POST[$persEnc1];
	    $dataI=$_POST[$dataI1];
	    $dataO=$_POST[$dataO1];
	    $user=$_POST[$user1];
	    $estado=$_POST[$estado1];
	      
	    $q=mysql_query("INSERT INTO encuestas (Nombre, Objetivo, PersonasEncuestadas ,DataIni, DataObj, User, Estado) VALUES ('$nom','$obj','$persEnc','$dataI','$dataO','$user',      '$estado')");
	    mysql_query($q,$conn);
	    $i=$i+1;
   	}   
    mysql_close();
?>
