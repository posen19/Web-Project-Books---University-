<?php
	session_start();
	if(isset($_SESSION['id'])&&isset($_SESSION['mail'])){
		echo "1";
	}else{
		echo "0";
	}
?>