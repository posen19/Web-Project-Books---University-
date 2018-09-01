$(document).ready(init);
//Inicialitzar associacions Events-formulari
//Altres inits
function init(){
	llistatClients();
}
//Connector Events--Formulari
function associaEvents(){
}

//Peticó AJAX (llistat total de clients de la BD)
function llistatClients(){


    $.ajax
	({	url: "php/listadoCompletoLibros.php",
		dataType: "json",
		type: "get",
		cache: false,
		success: function(data) {
			console.log("entro aqui!!!!!!");
			$.ajax
			({
				url:'php/comprobarSession.php',
				cache:false,
				success: function(result){
			    	if(result=="0"){
						presentaDades1(data);
					}else if(result=="1"){
						presentaDades2(data);
					}
				}
			});
		},
		error: function(data) {
			console.log("AJAX error in request: " + JSON.stringify(data, null, 2));
		}
	});
}


//Funció de presentació quan es rebin les dades formatades
function presentaDades1(data){
	$.each(data, function(index){
		var titulo = data[index].titulo;
		var imagen = data[index].imagen;
		var url = data[index].url;
		var descripcion=data[index].descripcion;
		$('#listalibros').append('<div class="libro"><div class="contlib"><a href="'+url+'"><img src="Img/'+imagen+'" alt="Portada libro"/><div class="titulo"><h1>'+titulo+'</h1><h2>'+descripcion.substr(0,160)+'...</h2></div></a></div></div>');

	})
}

function presentaDades2(data){
	$('#listalibros').append('<div id="afegir"><a href="Libro-Crea.html"><img src="http://img.freepik.com/freie-ikonen/pluszeichen-im-kreis_318-53198.jpg?size=338&ext=jpg"/></a></div>');
	$.each(data, function(index){
		var titulo = data[index].titulo;
		var imagen = data[index].imagen;
		var url = data[index].url;
		var descripcion=data[index].descripcion;
		$('#listalibros').append('<div class="libro"><div class="contlib"><a href="'+url+'"><img src="Img/'+imagen+'" alt="Portada libro"/><div class="titulo"><h1>'+titulo+'</h1><h2>'+descripcion.substr(0,160)+'...</h2></div></a></div></div>');

	})
}
