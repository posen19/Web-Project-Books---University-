<?php
    require "nusoap-0.9.5/lib/nusoap.php";
    //Accés amb WSDL
	//penseu en crear l'arxiu WSDL prèviament :
    //Cal trucar llibres_WSDL.php?WSDL per crear,actualitzar (llibres.wsdl) i visualitzar i provar el servei
	//Un cop trucat, cal crear manualment el fitxer llibres.WSDL (a partir de copy paste del servei generat)
	//Després ja sempre és vàlid (si no canvia l'estructura de la petició)
	$var=$_GET['autor'];

	$client = new nusoap_client('../llibreAutor.wsdl','wsdl');  
    $error = $client->getError();
    if ($error) {
        echo "<h2>Constructor error</h2><pre>" . $error . "</pre>";
    }
    //Consumir el servei  
    $result = $client->call("getLibro", array("autor" => $var));
	echo "<h2>Directe</h2><pre>";
        print_r($result);
        echo "</pre>";	
	 
	//Presentació de resultats (o missatges d'error)  
    if ($client->fault) {
        echo "<h2>Fault</h2><pre>";
        print_r($result);
        echo "</pre>";
    }
    else {
        $error = $client->getError();
        if ($error) {
            echo "<h2>Error en client</h2><pre>" . $error . "</pre>";
        }
        else {
            echo "<h2>Llibres</h2><pre>";
            echo $result;
            echo "</pre>";
        }
    }
?>
