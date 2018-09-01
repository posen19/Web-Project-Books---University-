<?php
    require_once "nusoap-0.9.5/lib/nusoap.php";
    //Funcionalitat del servei
    require_once('llibreAutor.php');  
    
    //Generació del WSDL
    //Cal trucar llibres_WSDL.php?WSDL per crear/actualitzar (llibres.wsdl) i visualitzar i provar el servei
    //Un cop trucat, cal crear manualment el fitxer llibres.WSDL (a partir de copy paste del servei generat)
    //Després ja sempre és vàlid (si no canvia l'estructura de la petició)
    $server = new soap_server();
    $server->configureWSDL("llibresAutor", "urn:llibresAutor");
    //Definició de les E/S del servei  
    $server->register("getLibro",
        array("autor" => "xsd:string"),
        array("return" => "xsd:string"),
        "urn:llibresAutor",
        "urn:llibresAutor#getLibro",
        "rpc",
        "encoded",
        "Retorna el llistat de tots el libres escrits per el autor que li pases.");
      
    //$server->service($HTTP_RAW_POST_DATA);
    if ( !isset( $HTTP_RAW_POST_DATA ) ) $HTTP_RAW_POST_DATA =file_get_contents( 'php://input' );
    $server->service($HTTP_RAW_POST_DATA);
    
?>