$(document).ready(function(){
	$("#user").click(mostrarusuarios);
	$("#book").click(mostrarlibros);
})

function mostrarusuarios(){
	$.ajax
	({
		url:'php/agafaUser.php',
		type:'post',
		cache:false,
		success: function(result){
			mostrar(result);
		}
	});
}

function mostrarlibros(){
	$.ajax
	({
		url: 'php/listadoCompletoLibros.php',
		cache:false,
		success: function(result){
			mostrarlibro(result);
		}
	});
}

function mostrarlibro(libros){
	
	var contenido='<table><tr><td><strong>IDLibro</strong></td><td><strong>TITULO</strong></td><td><strong>AUTOR</strong></td><td><strong>IMAGEN</strong></td><td><strong>URL</strong></td><td><strong>ACCIONS</strong></td></tr>';
	$.each(libros, function(index){
		contenido = contenido +'<tr><td>'+libros[index].idLibro+'</td><td>'+libros[index].titulo+'</td><td>'+libros[index].autor+'</td><td>'+libros[index].imagen.substr(0,15)+'...</td><td>'+libros[index].url.substr(0,15)+'...</td><td><button class="del" onclick="eliminarLib('+libros[index].idLibro+')">Del</button></td></tr>';
	});

	$("#contenidoBoton").html(contenido+'</table>');
}

function eliminarLib(idlibro){
	$.ajax
	({
		data: {'idL':idlibro},	
		type: 'get',
		url: 'php/eliminarLib.php',
		cache: false,
		success: function(result){
			setTimeout("location.reload()", 1);
		}
	})
}

function mostrar(user){
	var contenido='<table><tr><td><strong>ID</strong></td><td><strong>NOMBRE</strong></td><td><strong>APELLIDO</strong></td><td><strong>EMAIL</strong></td><td><strong>ADMIN</strong></td><td><strong>ACCIONS</strong></td></tr>';
	var a="";
	$.each(user, function(index){
		if(user[index].permiso==0){
			a='No';
		}else{
			a='Si';
		}
		contenido = contenido +'<tr><td>'+user[index].id+'</td><td>'+user[index].Nom+'</td><td>'+user[index].Cognom+'</td><td>'+user[index].Email+'</td><td>'+a+'</td><td><button class="del" onclick="eliminar('+user[index].id+')">Del</button>/<button class="adm" onclick="admin'+user[index].permiso+'('+user[index].id+')">Adm</button></td></tr>';
	});

	$("#contenidoBoton").html(contenido+'</table>');
}

function eliminar(id){
	$.ajax
	({
		data: {'id1':id},	
		type: 'get',
		url: 'php/eliminar.php',
		cache: false,
		success: function(result){
			setTimeout("location.reload()", 1);
		},
		error: function(result){
			console.log(JSON.stringify(result));
		}
	})
}

function admin1(id){
	$.ajax
	({
		data: {'id1':id},	
		type: 'get',
		url: 'php/adminDown.php',
		cache: false,
		success: function(result){
			setTimeout("location.reload()", 1);
		}
	})
}

function admin0(id){
	$.ajax
	({
		data: {'id1':id},	
		type: 'get',
		url: 'php/adminUp.php',
		cache: false,
		success: function(result){
			setTimeout("location.reload()", 1);
		}
	})
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