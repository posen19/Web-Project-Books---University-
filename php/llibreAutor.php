<?php
//la funcionalitat és aquí independent de si es truca vi WSDL o directament (php)
		require 'class/GestorLibro.php';
    //Definir la funcionalitat  
        function getLibro($autor) {
	        $DBManager = new GestorLibro();
	        $consulta = $DBManager->mostrarTitulo($autor);
	        if(!$array[0]=mysql_fetch_array($consulta)){
	        	return "No hay libros que haya escrito ".$autor.".";
	    	}else{
	    			$result[0]=$array[0][0];
	        	for($i=1;$array[$i]=mysql_fetch_array($consulta);$i++){
	        		$result[$i]=$array[$i][0];
	        	};
	        	return join(',',$result);
	    	}
   		}
?>