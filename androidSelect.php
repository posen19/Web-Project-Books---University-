<?php
 
    mysql_connect("192.168.3.3","ep1","ep1"); // host, username, password...
    mysql_select_db("paulo"); // db name...
      
    $q=mysql_query("SELECT * FROM encuestas");
    while($row=mysql_fetch_assoc($q))
            $json_output[]=$row;
      
    print(json_encode($json_output));
      
    mysql_close();
     
?>
