// Peit javascript realitzat per fer animacions, molt sencill.
var x=false;
$(document).ready(conecta);


function conecta(){
	$("#estad").click(function(){
		if(!x){
			resize("#estad","+=150");
			dispAll("#contEstadistica","block");
			x=true;
		}else{
			resize("#estad","-=150");
			setTimeout(function () {
        		dispAll("#contEstadistica","none");}, 1500);
			x=false;
		}
	});
}


function resize(aa,bb){
	$(aa).animate({height:bb},1500);
}

function dispAll(aa,bb){
	$(aa).css("display",bb);
}
