$(document).ready(function(){
	llistatNoticies();
});

function llistatNoticies(){
	$.ajax
	({	url: 'php/rss.php',
		dataType: 'json',
		type: 'GET',
		cache: false, //IE per a defecte emmagatzema en caché (evitar-ho-->false)
		//Trucada a funció (per no programar-la aquí i respectar el model)
		success: function(data) {presentaNoticies(data,0);},
		error: function(result){
			console.log(JSON.stringify(result));
		}

	});

	$.ajax
	({	url: 'php/rss2.php',
		dataType: 'json',
		type: 'GET',
		cache: false, //IE per a defecte emmagatzema en caché (evitar-ho-->false)
		//Trucada a funció (per no programar-la aquí i respectar el model)
		success: function(data) {presentaNoticies(data,1);},
		error: function(result){
			console.log(JSON.stringify(result));
		}

	});
}

function presentaNoticies(data,num){
	var txt = '';
	$("#rss").html("");

	$.each(data, function(index){
		var titol = data[index][0];
		var descripcio = data[index][1];
		var url = data[index][2];

		txt = txt +'<a href="'+url+'" title="'+titol+'">';
		txt = txt +'<div class="seccio2">';
		txt = txt +'<h1 class="pageTitle2">'+titol+'</h1>';
		txt = txt + descripcio;
		txt = txt +'</div></a><hr>';

		});
	if(num==0){
		$("#noticias").append(txt);
	}else if(num==1){
		$("#citas").append(txt);
	}
}