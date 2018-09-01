		window.onload=function(){
			eventDOM();
			//loginIn();
		};
		
		//variables de control per evitar repetir validació si no fa falta.
		var o1=0;
		var o2=0;
		var o3=0;
		var o4=0;
		var o5=0;
		var o6=0;
		var o7=0;
		var o8=0;
		var o9=0;
		var o10=0;
		var o11=0;
		var o12=0;
		var o13=0;
		var i1=0;
		var i2=0;
		
		
		//Validación del nombre
		function valNom(){//aquesta funcio s'executa cada vegada que pulsem una tecla.
		var elemVal = document.getElementById("nom");
  		var regex2 = /[a-z]{2,11}$/; //Ho separo amb dos per verificar cada part per separat i tenir un millor control.
		var regex =/^[A-Z]{1}/;
  		var valor =  elemVal.value;
		
		document.getElementById("nom2").innerHTML="Introduce entre 3 y 12 letras";
		document.getElementById("nom1").innerHTML="Primera letra en mayuscula";
		if (regex.test(valor)&&regex2.test(valor)){
			document.getElementById("nom1").style.color="#34a143";
			document.getElementById("nom2").style.color="#34a143";
			if(o1==0){
				o1=1;
				//Si aquest camp es valida correctament mira si tots els altres ho estan i si es aixi habilita el enviar dades.			
				valTot();	
			}
			return true;
		}else{
			if(regex.test(valor)){ //si no es valida cambi de color i avís de que ha fallat mostrant la pestanyeta
				document.getElementById("nom1").style.color="#34a143";
			}else{
				document.getElementById("nom1").style.color="red";
			}
			
			if(regex2.test(valor)){
				document.getElementById("nom2").style.color="#34a143";
			}else{
				document.getElementById("nom2").style.color="red";
			}
			if(o1==1){
				o1=0;
			}
			return false;
		}
		}
		function dispNom(){ //funcio que s'executa al fer onFocus al element.
		valNom();//Verifica si es correcte o no. 
		document.getElementById("user").style.display="block";//Mostra la pestanyeta
		}
		function inDispNom(){		
		if (valNom()){ //funcio que s'executa al fer onBlur al elemnet.
			document.getElementById("nom").style.border="1px solid #34a143";
			document.getElementById("nom").style.boxShadow="0px 0px 2px 1px rgba(52,161,67,0.83)";
			document.getElementById("user").style.display="none";//Si es correcte la pestanya de informacio desapareix.
		}else{
			document.getElementById("nom").style.border="1px solid rgb(255,0,0)";
			document.getElementById("nom").style.boxShadow="0px 0px 2px 1px rgb(255,0,0)";
		}
		}
		
		//Totes les validacions comparteix la mateixa estructura que el NOM aqui a sobre.
		
		//Validación del apellido
		function valCnom(){
		var elemVal = document.getElementById("cnom");
  		var regex2 = /[a-z]{2,11}$/;
		var regex =/^[A-Z]{1}/;
  		var valor =  elemVal.value;
		
		document.getElementById("cnom2").innerHTML="Introduce entre 3 y 12 letras";
		document.getElementById("cnom1").innerHTML="Primera letra en mayuscula";
		if (regex.test(valor)&&regex2.test(valor)){
			document.getElementById("cnom1").style.color="#34a143";
			document.getElementById("cnom2").style.color="#34a143";
			if(o2==0){
				o2=1;
				valTot();				
			}
			
			return true;
		}else{
			if(regex.test(valor)){
				document.getElementById("cnom1").style.color="#34a143";
			}else{
				document.getElementById("cnom1").style.color="red";
			}
			
			if(regex2.test(valor)){
				document.getElementById("cnom2").style.color="#34a143";
			}else{
				document.getElementById("cnom2").style.color="red";
			}
			if(o2==1){
				o2=0;
			}
			return false;
		}
		}
		function dispCnom(){
		valCnom();
		document.getElementById("cuser").style.display="block";
		}
		function inDispCnom(){		
		if (valCnom()){
			document.getElementById("cnom").style.border="1px solid #34a143";
			document.getElementById("cnom").style.boxShadow="0px 0px 2px 1px rgba(52,161,67,0.83)";
			document.getElementById("cuser").style.display="none";
		}else{
			document.getElementById("cnom").style.border="1px solid rgb(255,0,0)";
			document.getElementById("cnom").style.boxShadow="0px 0px 2px 1px rgb(255,0,0)";
		}
		}
		
		//Validación del email
		function valMail(){
		var elemVal = document.getElementById("mail");
		var regex =/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  		var valor =  elemVal.value;
		
		document.getElementById("cmail").innerHTML="Introduce un correo válido.<br/>Ej: user@mail.com";
		
		if (regex.test(valor)){
			document.getElementById("cmail").style.color="#34a143";
			
			if(o3==0){
				o3=1;
				valTot();				
			}
			
			return true;
		}else{
			document.getElementById("cmail").style.color="red";
			if(o3==1){
				o3=0;
			}
			return false;
		}
		}
		function dispMail(){
		valMail();
		document.getElementById("ccorreo").style.display="block";
		}
		function inDispMail(){		
		if (valMail()){
			document.getElementById("mail").style.border="1px solid #34a143";
			document.getElementById("mail").style.boxShadow="0px 0px 2px 1px rgba(52,161,67,0.83)";
			document.getElementById("ccorreo").style.display="none";
		}else{
			document.getElementById("mail").style.border="1px solid rgb(255,0,0)";
			document.getElementById("mail").style.boxShadow="0px 0px 2px 1px rgb(255,0,0)";
		}
		}
		
		//Validación del telefono
		function valTel(){
		var elemVal = document.getElementById("tel");
		var regex =/^\+376\-(3|6|7|8)[0-9]{5}$/; //(\+3763|6|7|8[0-9]{5})$/i
  		var valor =  elemVal.value;
		
		document.getElementById("fono").innerHTML="Introduce un teléfono válido.<br/>Ej: +376-777777";
		
		if (regex.test(valor)){
			document.getElementById("fono").style.color="#34a143";
			if(o4==0){
				o4=1;
				valTot();				
			}
			return true;
		}else{
			document.getElementById("fono").style.color="red";
			if(o4==1){
				o4=0;
			}
			return false;
		}
		}
		function dispTel(){
		valTel();
		document.getElementById("tele").style.display="block";
		}
		function inDispTel(){		
		if (valTel()){
			document.getElementById("tel").style.border="1px solid #34a143";
			document.getElementById("tel").style.boxShadow="0px 0px 2px 1px rgba(52,161,67,0.83)";
			document.getElementById("tele").style.display="none";
		}else{
			document.getElementById("tel").style.border="1px solid rgb(255,0,0)";
			document.getElementById("tel").style.boxShadow="0px 0px 2px 1px rgb(255,0,0)";
		}
		}
		
		//Validación de contraseña
		function valPas(){
		var elemVal = document.getElementById("password");
		var regex =/^[0-9a-zA-Z]{8,}$/;
		var regex2 =/(?=.*[a-z])/;
		var regex3 =/(?=.*[A-Z])/;
		var regex4 =/(?=.*\d{2,})/;
  		var valor =  elemVal.value;
		
		document.getElementById("pas").innerHTML="Mínimo 8 carácteres";
		document.getElementById("pas2").innerHTML="Almenos 1 letra minus";
		document.getElementById("pas3").innerHTML="Almenos 1 letra mayus";
		document.getElementById("pas4").innerHTML="Almenos 2 numeros";
		
		if (regex.test(valor)&&regex2.test(valor)&&regex3.test(valor)&&regex4.test(valor)){
			document.getElementById("pas").style.color="#34a143";
			document.getElementById("pas2").style.color="#34a143";
			document.getElementById("pas3").style.color="#34a143";
			document.getElementById("pas4").style.color="#34a143";
			
			if(o5==0){
				o5=1;
				valTot();				
			}
			
			return true;
		}else{
			if(regex.test(valor)){
				document.getElementById("pas").style.color="#34a143";
			}else{
				document.getElementById("pas").style.color="red";
			}
			
			if(regex2.test(valor)){
				document.getElementById("pas2").style.color="#34a143";
			}else{
				document.getElementById("pas2").style.color="red";
			}
			
			if(regex3.test(valor)){
				document.getElementById("pas3").style.color="#34a143";
			}else{
				document.getElementById("pas3").style.color="red";
			}
			
			if(regex4.test(valor)){
				document.getElementById("pas4").style.color="#34a143";
			}else{
				document.getElementById("pas4").style.color="red";
			}
			
			if(o5==1){
				o5=0;
			}
			
			return false;
		}
		}
		function dispPas(){
		valPas();
		document.getElementById("pass").style.display="block";
		}
		function inDispPas(){		
		if (valPas()){
			document.getElementById("password").style.border="1px solid #34a143";
			document.getElementById("password").style.boxShadow="0px 0px 2px 1px rgba(52,161,67,0.83)";
			document.getElementById("pass").style.display="none";
		}else{
			document.getElementById("password").style.border="1px solid rgb(255,0,0)";
			document.getElementById("password").style.boxShadow="0px 0px 2px 1px rgb(255,0,0)";
		}
		}
		
		//Validación de rep contraseña
		function valPasRep(){
		var elemVal = document.getElementById("passwordrep");
		var elemVal2 = document.getElementById("password");
  		var valor =  elemVal.value;
		var valor2 =  elemVal2.value;
		
		document.getElementById("pasrep").innerHTML="Contraseña coincide";
		
		if ((valor==valor2)&&(valor.length>0)){
			document.getElementById("pasrep").style.color="#34a143";
			
			if(o6==0){
				o6=1;
				valTot();				
			}
			
			return true;
		}else{
			document.getElementById("pasrep").style.color="red";
			
			if(o6==1){
				o6=0;
			}
			
			return false;
		}
		}
		function dispPasRep(){
		valPasRep();
		document.getElementById("passrep").style.display="block";
		}
		function inDispPasRep(){		
		if (valPasRep()){
			document.getElementById("passwordrep").style.border="1px solid #34a143";
			document.getElementById("passwordrep").style.boxShadow="0px 0px 2px 1px rgba(52,161,67,0.83)";
			document.getElementById("passrep").style.display="none";
		}else{
			document.getElementById("passwordrep").style.border="1px solid rgb(255,0,0)";
			document.getElementById("passwordrep").style.boxShadow="0px 0px 2px 1px rgb(255,0,0)";
		}
		}
		//Calendar Jquery
		$(function(){
    		$("#datepicker").datepicker({ minDate: "-80Y", maxDate: 0, changeMonth: true, changeYear: true});
			$("#datepicker").datepicker( "option", "yearRange", "-80:+0" );
  		});
		function valNac(){//utilitzacio de datePicker
			var valor= document.getElementById("datepicker").value;
			
			if (!valor==""){//mirar si no está vacio
				document.getElementById("datepicker").style.border="1px solid #34a143";
				document.getElementById("datepicker").style.boxShadow="0px 0px 2px 1px rgba(52,161,67,0.83)";
				
				if(o7==0){
					o7=1;
					valTot();
				}
				
				return true;
			}else{
				document.getElementById("datepicker").style.border="1px solid rgb(255,0,0)";
				document.getElementById("datepicker").style.boxShadow="0px 0px 2px 1px rgb(255,0,0)";
				if(o7==1){
					o7=0;
				}
				return false;
			}
		}
		
		//Validación de dirección
		function valDir(){
			var elemVal = document.getElementById("direccion");
  			var valor =  elemVal.value;
			var regexp =/^[a-zA-Z0-9\,\-\.\º\ª\s\ñ\Ñ]{5,}$/
			
			document.getElementById("dir").innerHTML="No válido";
			
			if (regexp.test(valor)){
				document.getElementById("dir").innerHTML="Válido";
				document.getElementById("dir").style.color="#34a143";
				
				if(o8==0){
					o8=1;
					valTot();
				}
				
				return true;
			}else{
				document.getElementById("dir").innerHTML="No válido";
				document.getElementById("dir").style.color="red";
				if(o8==1){
					o8=0;
				}
				return false;
			}
		}	
		function dispDir(){
			valDir();
			document.getElementById("dire").style.display="block";
		}
		function inDispDir(){		
			if (valDir()){
				document.getElementById("direccion").style.border="1px solid #34a143";
				document.getElementById("direccion").style.boxShadow="0px 0px 2px 1px rgba(52,161,67,0.83)";
				document.getElementById("dire").style.display="none";
			}else{
				document.getElementById("direccion").style.border="1px solid rgb(255,0,0)";
				document.getElementById("direccion").style.boxShadow="0px 0px 2px 1px rgb(255,0,0)";
			}
		}
		
		//Validación de población
		function valPob(){
			var elemVal = document.getElementById("poblacion");
  			var valor =  elemVal.value;
			var regexp =/^[a-zA-Z\s\ñ\Ñ]{3,}$/
			
			document.getElementById("pob").innerHTML="No válido";
			
			if (regexp.test(valor)){
				document.getElementById("pob").innerHTML="Válido";
				document.getElementById("pob").style.color="#34a143";
				
				if(o9==0){
					o9=1;
					valTot();
				}
				
				return true;
			}else{
				document.getElementById("pob").innerHTML="No válido";
				document.getElementById("pob").style.color="red";
				if(o9==1){
					o9=0;
				}
				return false;
			}
		}	
		function dispPob(){
			valPob();
			document.getElementById("pobla").style.display="block";
		}
		function inDispPob(){		
			if (valPob()){
				document.getElementById("poblacion").style.border="1px solid #34a143";
				document.getElementById("poblacion").style.boxShadow="0px 0px 2px 1px rgba(52,161,67,0.83)";
				document.getElementById("pobla").style.display="none";
			}else{
				document.getElementById("poblacion").style.border="1px solid rgb(255,0,0)";
				document.getElementById("poblacion").style.boxShadow="0px 0px 2px 1px rgb(255,0,0)";
			}
		}
		
		//Validación de pais
		function valPais(){
			var elemVal = document.getElementById("pais");
  			var valor =  elemVal.value;
			var regexp =/^[a-zA-Z\s\ñ\Ñ]{3,}$/
			
			document.getElementById("pa").innerHTML="No válido";
			
			if (regexp.test(valor)){
				document.getElementById("pa").innerHTML="Válido";
				document.getElementById("pa").style.color="#34a143";
					
				if(o10==0){
					o10=1;
					valTot();
				}
				
				return true;
			}else{
				document.getElementById("pa").innerHTML="No válido";
				document.getElementById("pa").style.color="red";
				if(o10==1){
					o10=0;
				}
				return false;
			}
		}	
		function dispPais(){
			valPais();
			document.getElementById("pai").style.display="block";
		}
		function inDispPais(){		
			if (valPais()){
				document.getElementById("pais").style.border="1px solid #34a143";
				document.getElementById("pais").style.boxShadow="0px 0px 2px 1px rgba(52,161,67,0.83)";
				document.getElementById("pai").style.display="none";
			}else{
				document.getElementById("pais").style.border="1px solid rgb(255,0,0)";
				document.getElementById("pais").style.boxShadow="0px 0px 2px 1px rgb(255,0,0)";
			}
		}
		
		//Validación de cp
		function valCp(){
			var elemVal = document.getElementById("codipostal");
  			var valor =  elemVal.value;
			var regexp =/^AD[1-7]{1}[0-9]{2}$|^[0-9]{5}$/
			
			document.getElementById("cp").innerHTML="No válido";
			
			if (regexp.test(valor)){
				document.getElementById("cp").innerHTML="Válido";
				document.getElementById("cp").style.color="#34a143";
				
				if(o11==0){
					o11=1;
					valTot();
				}
				
				return true;
			}else{
				document.getElementById("cp").innerHTML="No válido";
				document.getElementById("cp").style.color="red";
				if(o11==1){
					o11=0;
				}
				return false;
			}
		}	
		function dispCp(){
			valCp();
			document.getElementById("copo").style.display="block";
		}
		function inDispCp(){		
			if (valCp()){
				document.getElementById("codipostal").style.border="1px solid #34a143";
				document.getElementById("codipostal").style.boxShadow="0px 0px 2px 1px rgba(52,161,67,0.83)";
				document.getElementById("copo").style.display="none";
			}else{
				document.getElementById("codipostal").style.border="1px solid rgb(255,0,0)";
				document.getElementById("codipostal").style.boxShadow="0px 0px 2px 1px rgb(255,0,0)";
			}
		}
		
		
		//Validación de iban banco
		function valIban(){
			var elemVal = document.getElementById("iban");
  			var valor =  elemVal.value;
			var regMoraBanc = /AD[0-9]{2}0001[0-9]{16}/;
      		var regCredit = /AD[0-9]{2}0003[0-9]{16}/;
			
			document.getElementById("ib").innerHTML="No válido";
			document.getElementById("ib2").innerHTML="ejemplo:<br/>AD770001(+16 dígitos)";
			
			if (regMoraBanc.test(valor)||regCredit.test(valor)){
				document.getElementById("ib").innerHTML="Válido";
				if(regMoraBanc.test(valor)){
					document.getElementById("ib2").innerHTML="Banco: MoraBanc";
					document.getElementById("ib2").style.display="block";
				}else{
					document.getElementById("ib2").innerHTML="Banco: Credit";
					document.getElementById("ib2").style.display="block";
				}
				document.getElementById("ib").style.color="#34a143";
				document.getElementById("ib2").style.color="#34a143";
				
				
				if(o13==0){
					o13=1;
					valTot();
					
				}
				return true;
			}else{
				document.getElementById("ib").innerHTML="No válido";
				document.getElementById("ib2").style.display="ejemplo:<br/>AD770001(+16 dígitos)";
				document.getElementById("ib").style.color="red";
				document.getElementById("ib2").style.color="red";
				if(o13==1){
					o13=0;
				}
				return false;
			}
		}	
		function dispIban(){
			valIban();
			document.getElementById("iba").style.display="block";
		}
		function inDispIban(){		
			if (valIban()){
				document.getElementById("iban").style.border="1px solid #34a143";
				document.getElementById("iban").style.boxShadow="0px 0px 2px 1px rgba(52,161,67,0.83)";
				document.getElementById("iba").style.display="none";
			}else{
				document.getElementById("iban").style.border="1px solid rgb(255,0,0)";
				document.getElementById("iban").style.boxShadow="0px 0px 2px 1px rgb(255,0,0)";
			}
		}
		
		//Validar todo
		function valTot(){
			if(o1==1 && o2==1 && o3==1 && o4==1 && o5==1 && o6==1 && o7==1 && o8==1 && o9==1 && o10==1 && o11==1 && o13==1){
				document.getElementById("registroboton").style.backgroundColor="#34a143";
				document.getElementById("registroboton").disabled = false;
			}else{
				document.getElementById("registroboton").style.backgroundColor="#70BD7B";
				document.getElementById("registroboton").disabled = true;
			}
		}

		//funcio que 
		function envia(){
			document.cookie = "nom="+document.getElementById("nom").value; //guardar la informacio a les cookies
			document.cookie = "cnom="+document.getElementById("cnom").value;
			document.cookie = "mail="+document.getElementById("mail").value;
			document.cookie = "tel="+document.getElementById("tel").value;
			document.cookie = "data="+document.getElementById("datepicker").value;
			document.cookie = "direccion="+document.getElementById("direccion").value;
			document.cookie = "poblacion="+document.getElementById("poblacion").value;
			document.cookie = "pais="+document.getElementById("pais").value;
			document.cookie = "cp="+document.getElementById("codipostal").value;
			document.cookie = "iban="+document.getElementById("iban").value;
		}

		//funcio que enseña la cookie en les seves input
		function veure(){
			document.getElementById("nom").value=getCookie("nom"); //trucada a getCookie per que ens retorni el valor de la cookie desitjat.
			document.getElementById("cnom").value=getCookie("cnom");
			document.getElementById("mail").value=getCookie("mail");
			document.getElementById("tel").value=getCookie("tel");
			document.getElementById("datepicker").value=getCookie("data");
			document.getElementById("direccion").value=getCookie("direccion");
			document.getElementById("poblacion").value=getCookie("poblacion");
			document.getElementById("pais").value=getCookie("pais");
			document.getElementById("codipostal").value=getCookie("cp");
			document.getElementById("iban").value=getCookie("iban");
			actu();
		}
		
		/*function mirarMailLogin(){
			var elemVal = document.getElementById("loginuserormail");
			var regex =/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
			var valor =  elemVal.value;
						
			if (regex.test(valor)){
				
	
				document.getElementById("loginuserormail").style.border="1px solid #34a143";
				document.getElementById("loginuserormail").style.boxShadow="0px 0px 2px 1px rgba(52,161,67,0.83)";
				if(i1==0){
					i1=1;
					loginIn();				
				}
				
			}else{
				document.getElementById("loginuserormail").style.border="1px solid rgb(255,0,0)";
				document.getElementById("loginuserormail").style.boxShadow="0px 0px 2px 1px rgb(255,0,0)";
				if(i1==1){
					i1=0;
				}
			}
		
		}
		
		function mirarPassLogin(){
			var elemVal = document.getElementById("loginpass");
			var regex =/(?=.*[a-z])(?=.*[A-Z])(?=.*\d{2,})[0-9a-zA-Z]{8,}$/;
			var valor =  elemVal.value;
						
			if (regex.test(valor)){
				
	
				document.getElementById("loginpass").style.border="1px solid #34a143";
				document.getElementById("loginpass").style.boxShadow="0px 0px 2px 1px rgba(52,161,67,0.83)";
				if(i2==0){
					i2=1;
					loginIn();				
				}
				
			}else{
				document.getElementById("loginpass").style.border="1px solid rgb(255,0,0)";
				document.getElementById("loginpass").style.boxShadow="0px 0px 2px 1px rgb(255,0,0)";
				if(i2==1){
					i2=0;
				}
			}
		}
		
		function loginIn(){
			if(i1==1&&i2==1){
				document.getElementById("loginboton").style.backgroundColor="#34a143";
				document.getElementById("loginboton").disabled=false;
			}else{
				document.getElementById("loginboton").style.backgroundColor="#70BD7B";
				document.getElementById("loginboton").disabled = true;
			}
		}*/

		function actu(){   
			setTimeout(function(){
			inDispCnom();
			inDispCp();
			inDispDir();
			inDispIban();
			inDispMail();
			inDispNom();
			inDispPais();
			inDispPob();
			inDispTel();
			valNac();
			},100);
		}
	
		//Funcio que agafa una cookie en concret
		function getCookie(cname) {
			var name = cname + "=";
			var decodedCookie = decodeURIComponent(document.cookie);
			var ca = decodedCookie.split(';');
			for(var i = 0; i <ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
			return "";
		}

		//Funcions de guardar al localStorage
    	/*function lsNom () {
    	  var elemLS = document.getElementById("nom").value;
    	  document.cookie = "username=John Doe";
    	}	
    	function lsCnom () {
    	  var elemLS = document.getElementById("cnom").value;
    	  localStorage.setItem('cnom', elemLS);
    	}			
    	function lsMail () {
    	  var elemLS = document.getElementById("mail").value;
    	  localStorage.setItem('mail', elemLS);
    	}			
    	function lsTel () {
    	  var elemLS = document.getElementById("tel").value;
    	  localStorage.setItem('tel', elemLS);
    	}	
		function lsDatePicker() {
			var elemLS = document.getElementById("datepicker").value;
			localStorage.setItem('datepicker', elemLS);
		}			
    	function lsDireccion () {
    	  var elemLS = document.getElementById("direccion").value;
    	  localStorage.setItem('direccion', elemLS);
    	}	
    	function lsPoblacion () {
    	  var elemLS = document.getElementById("poblacion").value;
    	  localStorage.setItem('poblacion', elemLS);
    	}			
		function lsPais () {
			  var elemLS = document.getElementById("pais").value;
			  localStorage.setItem('pais', elemLS);
			}	
    	function lsCp () {
    	  var elemLS = document.getElementById("codipostal").value;
    	  localStorage.setItem('cp', elemLS);
    	}			
		function lsEspectaculo(){
			var elemLS = docuemnt.getElementById("espectacle").value;
			localStorage.setItem('espectacle', elemLS);
		}		
    	function lsIban () {
    	  var elemLS = document.getElementById("iban").value;
    	  localStorage.setItem('iban', elemLS);
    	}	*/	
		
		function eventDOM(){ //Totes les conexions.
		
			//conexions nom
			document.getElementById("nom").onblur=inDispNom;
			document.getElementById("nom").onfocus=dispNom;
			document.getElementById("nom").onkeyup=valNom;
			
			//conexions cnom
			document.getElementById("cnom").onblur=inDispCnom;
			document.getElementById("cnom").onfocus=dispCnom;
			document.getElementById("cnom").onkeyup=valCnom;
			
			//conexions email
			document.getElementById("mail").onblur=inDispMail;
			document.getElementById("mail").onfocus=dispMail;
			document.getElementById("mail").onkeyup=valMail;
			
			//conexions tel
			document.getElementById("tel").onblur=inDispTel;
			document.getElementById("tel").onfocus=dispTel;
			document.getElementById("tel").onkeyup=valTel;
			
			//conexions pass
			document.getElementById("password").onblur=inDispPas;
			document.getElementById("password").onfocus=dispPas;
			document.getElementById("password").onkeyup=valPas;
			
			//conexions pass rep
			document.getElementById("passwordrep").onblur=inDispPasRep;
			document.getElementById("passwordrep").onfocus=dispPasRep;
			document.getElementById("passwordrep").onkeyup=valPasRep;
			
			//conexion datepicker
			document.getElementById("datepicker").onchange=valNac;
			
			//conexion direccion
			document.getElementById("direccion").onblur=inDispDir;
			document.getElementById("direccion").onfocus=dispDir;
			document.getElementById("direccion").onkeyup=valDir;
			
			//conexion poblacion
			document.getElementById("poblacion").onblur=inDispPob;
			document.getElementById("poblacion").onfocus=dispPob;
			document.getElementById("poblacion").onkeyup=valPob;
			
			//conexion pais
			document.getElementById("pais").onblur=inDispPais;
			document.getElementById("pais").onfocus=dispPais;
			document.getElementById("pais").onkeyup=valPais;
			
			//conexion cp
			document.getElementById("codipostal").onblur=inDispCp;
			document.getElementById("codipostal").onfocus=dispCp;
			document.getElementById("codipostal").onkeyup=valCp;
			
			//conexion iban
			document.getElementById("iban").onblur=inDispIban;
			document.getElementById("iban").onfocus=dispIban;
			document.getElementById("iban").onkeyup=valIban;
			
			//conexion button
			document.getElementById("registroboton").onclick=envia;
			
			//conexion cookie
			document.getElementById("botoncookie").onclick=veure;
			
			document.getElementById("clearbutton").onclick=actu;
			
			//conexion login
			/*document.getElementById("loginuserormail").onkeyup=mirarMailLogin;
			document.getElementById("loginpass").onkeyup=mirarPassLogin;*/
		}
		
		/*function iniciar() {

 			if (localStorage["nom"]) {
 			  document.getElementById("nom").value = localStorage.getItem('nom');
 			}
 			if (localStorage["cnom"]) {
 			  document.getElementById("cnom").value = localStorage.getItem('cnom');
 			}
 			if (localStorage["tel"]) {
 			  document.getElementById("tel").value = localStorage.getItem('tel');
 			}
 			if (localStorage["direccion"]) {
 			  document.getElementById("direccion").value = localStorage.getItem('direccion');
 			}
 			if (localStorage["poblacion"]) {
 			  document.getElementById("poblacion").value = localStorage.getItem('poblacion');
 			}
 			if (localStorage["cp"]) {
 			  document.getElementById("cp").value = localStorage.getItem('cp');
 			}
 			if (localStorage["pais"]) {
 			  document.getElementById("pais").value = localStorage.getItem('pais');
 			}
 			if (localStorage["datepicker"]) {
 			  document.getElementById("datepicker").value = localStorage.getItem('datepicker');
 			}
 			if (localStorage["mail"]) {
 			  document.getElementById("mail").value = localStorage.getItem('mail');
 			}
 			if (localStorage["iban"]) {
 			  document.getElementById("iban").value = localStorage.getItem('iban');
 			}
			
		}*/