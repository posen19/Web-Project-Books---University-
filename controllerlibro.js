$(document).ready(function(){
	comproba();
})

function comproba(){
	$.ajax
	({
		url:'php/comprobarSession.php',
		cache:false,
		success: function(result){
	    	if(result=="1"){
				mostrar();
			}
		}
	});

	var tit=$("#PresentaciónLibro h1").html();

	$.ajax
	({	
		data: {'tit1':tit},
		dataType:'json',
		type:'get',
		url:'php/agafaMitjana.php',
		cache:false,
		success: function(result){
			$("#puntu-media").html(result);
		}
		
	})
}

function mostrar(){
	$("#PresentaciónLibro").append('<div id="votar">Votar: 	<select id="votarr" name="voto"><option value="1">1</option> <option value="2">2</option> <option value="3">3</option><option value="4">4</option> <option value="5">5</option><option value="6">6</option> <option value="7">7</option><option value="8">8</option> <option value="9">9</option> <option value="10">10</option> </select></div>');
	$("#votarr").change(entrarVot);
}

function entrarVot(){
	var tit=$("#PresentaciónLibro h1").html();
	var voto=$("#votarr option:selected").text();
	$.ajax
	({
		data: {'tit1':tit,'voto1':voto},
		dataType:'json',
		type:'get',
		url:'php/realizarVoto.php',
		cache:false,
		success: function(result){
			console.log("todo ok");
		},
		error: function(result){
			setTimeout("location.reload()", 1);
		}
	});
}