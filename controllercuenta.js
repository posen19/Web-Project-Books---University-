$(document).ready(init);

function init(){
	associaEvents();
}
//Connector Events--Formulari
function associaEvents(){
	$("#registroboton").click(signup);
	$("#loginboton").click(login);
}

function signup(){

	var nom=$("#nom").val();
	var cnom=$("#cnom").val();
	var mail=$("#mail").val();
	var tel=$("#tel").val();
	var pass=$("#password").val();
	var fecha=$("#datepicker").val();
	var dir=$("#direccion").val();
	var pob=$("#poblacion").val();
	var pais=$("#pais").val();
	var cp=$("#codipostal").val();
	var iban=$("#iban").val();
	var img="Img/Noticia3.jpg";


	$.ajax
	({	data: {'nom1': nom,'cnom1':cnom, 'mail1':mail, 'tel1':tel, 'password1':pass, 'datepicker1':fecha, 'direccion1':dir, 'poblacion1':pob, 'pais1':pais, 'codipostal1':cp, 'iban1':iban, 'img2':img},
		url: 'php/alta.php',
		type:'post',
		cache:false,
		success: function(result) {
			console.log("usuario correctamente creado");
			setTimeout("location.href='http://exemples.ua.ad/Paulo/Cuenta.html'", 500);

		},
		error: function (xhr) {
			alert(xhr.responseText);
			setTimeout("location.href='http://exemples.ua.ad/Paulo/Cuenta.html'", 500);
		}
	});


}


function login(){
	var mail=$("#loginuserormail").val();
	var seña=$("#loginpass").val();

	$.ajax({
		data:{'mail1':mail,'pass1':seña},
		url: 'php/login.php',
		dataType: 'json',
		type:'post',
		cache:false,
		success: function(result){
			setTimeout("location.href='http://exemples.ua.ad/Paulo/index.html'", 500);
		},
		error: function(result){
			setTimeout("location.href='http://exemples.ua.ad/Paulo/Cuenta.html'", 500);
		}
	})
}

/*
//Altres inits
function altres(){};

//Peticó AJAX (llistat total de clients de la BD)
function llistatClients(dades){
    $.ajax
	({	url: 'llistatComplert.php',
		dataType: 'json',
		type: 'get',
		cache: false, //IE per a defecte emmagatzema en caché (evitar-ho-->false)
		//Trucada a funció (per no programar-la aquí i respectar el model)
		success: function(data) {presentaDades(data);} 
	});
}

function f2(valor) {
//alert(valor);
$.ajax
	({	url: 'eliminar.php?id='+valor,
		dataType: 'json',
		type: 'get',
		cache: false, //IE per a defecte emmagatzema en caché (evitar-ho-->false)
		//Trucada a funció (per no programar-la aquí i respectar el model)
		//Decidim que després d'eliminar tornem a presentar les dades
		success: function(data) {presentaDades(data);} 
	});
}	
//Funció de presentació quan es rebin les dades formatades
function presentaDades(data){
	$("#resultats").html("");
	$("#resultats").append(
		$.each(data, function(index){
			var nom = data[index].noms;
			var ciutat = data[index].ciutat;
			var telf = data[index].telefon;
			var idClient=data[index].id;
			$("#resultats").append('<p>Id    : '+idClient+'</p>');
			//Proposta 1. Crear enllaços dinàmics amb href 
			$("#resultats").append('<a href=modificar.php?id='+idClient+'>Editar ');
			$("#resultats").append('<span>  |  </span> <a href=eliminar.php?id='+idClient+'>Eliminar');
			//Proposta 2. Crear botó o imatge que invoqui una funció amb paràmetre
			$cadena="<button name='"+ idClient + "' onclick='f2("+idClient +");'>Eliminar</button>";
			$("#resultats").append($cadena);
			$("#resultats").append('<p><b>Nom    : </b>'+nom+'\t <b>Telefon  : </b>'+telf+'\t <b>Ciutat : </b>'+ciutat+'</p><br>');
			
		})
	);
}*/