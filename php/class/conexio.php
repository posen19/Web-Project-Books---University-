<?php
//Classe per la connexió al SGBD i BD
class DBManager{
		private $_connection;
		private static $_instance; //The single instance
		private $_database = "2682957_libros";
		private $_host = "pdb24.awardspace.net";
		private $_username = "2682957_libros";
		private $_password = "paulo123";

		/*
		Get an instance of the Database
		@return Instance
		*/
		public static function getInstance() {
			if(!self::$_instance) { // If no instance then make one
				self::$_instance = new self();
			}
			return self::$_instance;
		}
		// Constructor
		private function __construct() {
			$this->_connection = new mysqli($this->_host, $this->_username,
				$this->_password, $this->_database);
			// Error handling
			if(mysqli_connect_error()) {
				trigger_error("Failed to conencto to MySQL: " . mysql_connect_error(),
					 E_USER_ERROR);
			}
		}
		// Magic method clone is empty to prevent duplication of connection
		private function __clone() { }
		// Get mysqli connection
		public function getConnection() {
			return $this->_connection;
		}
}
?>
