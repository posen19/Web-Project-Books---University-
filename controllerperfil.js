$(document).ready(function(){
	comproba();
	$("#actualizar").click(actualiza);
})

function comproba(){
	$.ajax
	({
		url:'php/agafa.php',
		type:'post',
		cache:false,
		success: function(result){
			mostrar(result);

			$.ajax
			({
				url:'php/buscarLibros.php',
				cache:false,
				dataType: 'json',
				success: function(result){
					mostrarlibros(result);
				},
				error: function(result){
					console.log(JSON.stringify(result));
				}
			});

		}
	});
}

$(function(){
    $("#datepicker").datepicker({ minDate: "-80Y", maxDate: 0, changeMonth: true, changeYear: true});
	$("#datepicker").datepicker( "option", "yearRange", "-80:+0" );
 });

function mostrarlibros(libros){
	$.each(libros, function(index){
		var titulo = libros[index].titulo;
		var imagen = libros[index].imagen;
		var url = libros[index].url;
		$('#libros').append(
			'<div class="novedadescont">'+
 				'<a href="'+url+'">'+
 					'<div>'+
 						'<img src="Img/'+imagen+'" alt="Portada del libro"/>'+
 						'<div>'+
							'<h1 class="titlibro">'+titulo+'</h1>'+
						'</div>'+
					'</div>'+
				'</a>'+
 			'</div>'
 		);
	})
}

function mostrar(user){
	$('#abimg').html('<div id="abimg"><img src="'+user.img+'"/></div>');
	$('#nom2').val(user.Nom);
	$('#cnom2').val(user.Cognom);
	$('#mail2').val(user.Email);
	$('#tel2').val(user.Tel);
	$('#datepicker').val(user.FechaNacimiento);
	$('#direccion2').val(user.Direccion);
	$('#poblacion2').val(user.Poblacion);
	$('#pais2').val(user.Pais);
	$('#codipostal2').val(user.CodigoPostal);
	$('#iban2').val(user.Iban);
	if(user.permiso==1){
		$('#admin').css("display","block");
	}
}

function actualiza(){
	nom=$('#nom2').val();
	cnom=$('#cnom2').val();
	mail=$('#mail2').val();
	tel=$('#tel2').val();
	fecha=$('#datepicker').val();
	dir=$('#direccion2').val();
	pob=$('#poblacion2').val();
	pais=$('#pais2').val();
	cp=$('#codipostal2').val();
	iban=$('#iban2').val();

	$.ajax
	({
		data: {'nom2':nom,'cnom2':cnom,'mail2':mail,'tel2':tel,'fecha2':fecha,'dir2':dir,'pob2':pob,'pais2':pais,'cp2':cp,'iban2':iban},
		dataType:'json',
		type:'post',
		url:'php/actualiza.php',
		cache:false,
		success: function(result){
			setTimeout("location.reload()", 1);
		},
		error: function(result){
			setTimeout("location.reload()", 1);
		}
	});
}