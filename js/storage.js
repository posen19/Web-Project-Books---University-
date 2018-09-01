// Realitzar primer el mirarAbans per mostar la ultima vegada que has entrar en la página y no la actual.
window.onload=function(){
	if(window.location=="http://exemples.ua.ad/Paulo/index.html"||window.location=="http://exemples.ua.ad/Paulo/"){
		document.getElementById("abrirEstadistica").onclick=ponerVisit;
	}
	mirarAbans();
	actualitza();
};

//funció per escriure les estadistiques.
function ponerVisit(){
	var llib=getComptaLlibre();
	var aut=getComptaAutor();
	var biblio=getComptaBiblio();
	var inici=getComptaInici();
	//paso totes les variables a integer per poder sumar-les
	var total=parseInt(llib)+parseInt(aut)+parseInt(biblio)+parseInt(inici);  
	
	var html="<div class=\"cabeActu\">VISITES</div><div class=\"infoActu\">Llibres: </div><div class=\"resulActu\">"+llib+
		"</div><div class=\"infoActu\">Autors: </div><div class=\"resulActu\">"+aut+
		"</div><div class=\"infoActu\">Biblioteca: </div><div class=\"resulActu\">"+biblio+
		"</div><div class=\"infoActu\">Inici: </div><div class=\"resulActu\">"+inici+
		"</div><div class=\"infoActu\">Total: </div><div class=\"resulActu\">"+total+
		"</div>";
	
	document.getElementById("contEstadistica").innerHTML = html;
}
//funcio per mostrar la informació pasada.
function mirarAbans(){
	var html="<div class=\"lsind\">Anterior acceso:<br/>"+getData()+
		"</div><div class=\"lsind\">Veces pasadas por el Inicio:<br/>"+getComptaInici()+
		"</div><div class=\"lsind\">Ultima URL:<br/>"+getUltimaUrl()+"</div>";
	
  	document.getElementById("localStorageInside").innerHTML = html;
}
//actualitzar dades
function actualitza(){
	setData();
	setComptaInici();
	setUltimaUrl();
	setTaula();
}
//Data ultima visita
function setData(){
	var data= new Date();
	var dia=data.getDate();
	var mes=data.getMonth();
	var any=data.getFullYear();
	var hora=data.getHours();
	var min=data.getMinutes();
	localStorage.setItem('fecha',"Fecha: "+dia+"/"+mes+"/"+any+" - Hora: "+hora+":"+min);
}

function getData(){
	if(localStorage.getItem('fecha')===null){
		return "No hay ninguna entrada anterior.";
	}else{
		return localStorage.getItem('fecha');
	}
}
//Comptador INICI
function setComptaInici(){
	if (window.location=="http://exemples.ua.ad/Paulo/index.html"||window.location=="http://exemples.ua.ad/Paulo/"){
		if (localStorage.getItem('comptadorInici')===null){
			localStorage.setItem('comptadorInici',"1");
		}else{
			var a=localStorage.getItem('comptadorInici');
			a=parseInt(a);//em sembla que no fa falta, amb a++ seria suficient pero he pasat el string a integer.
			a++;
			a=a.toString();
			localStorage.setItem('comptadorInici',a);
		}
	}
}

function getComptaInici(){
	if(localStorage.getItem('comptadorInici')===null){
		return 0;
	}else{
		return localStorage.getItem('comptadorInici');
	}
}
//ultima URL
function setUltimaUrl(){
	localStorage.setItem('ultimaUrl',window.location);
}

function getUltimaUrl(){
	if (localStorage.getItem('ultimaUrl')===null){
		return "No hay ninguna Url anterior.";
	}else{
		return localStorage.getItem('ultimaUrl');
	}
}
//actualitza valors estadistics
function setTaula(){
	if (window.location=="http://exemples.ua.ad/Paulo/Biblioteca.html"){
		if (localStorage.getItem('comptaBiblio')===null){
			localStorage.setItem('comptaBiblio',"1");
		}else{
			var a=localStorage.getItem('comptaBiblio');
			a=parseInt(a);
			a++;
			a=a.toString();
			localStorage.setItem('comptaBiblio',a);
		}
	}else{
		if (window.location=="http://exemples.ua.ad/Paulo/Libro-ElNombreDelViento.html"||window.location=="http://exemples.ua.ad/Paulo/Libro-ElTemoDeUnHombreSabio.html"||window.location=="http://exemples.ua.ad/Paulo/Libro-ElImperioFinal.html"){
			if (localStorage.getItem('comptaLlibre')===null){
				localStorage.setItem('comptaLlibre',"1");
			}else{
				var a=localStorage.getItem('comptaLlibre');
				a=parseInt(a);
				a++;
				a=a.toString();
				localStorage.setItem('comptaLlibre',a);
			}
		}else{
			if (window.location=="http://exemples.ua.ad/Paulo/Autor-BrandonSanderson.html"||window.location=="http://exemples.ua.ad/Paulo/Autor-PatrickRothfuss.html"){
				if (localStorage.getItem('comptaAutor')===null){
					localStorage.setItem('comptaAutor',"1");
				}else{
					var a=localStorage.getItem('comptaAutor');
					a=parseInt(a);
					a++;
					a=a.toString();
					localStorage.setItem('comptaAutor',a);
				}
			}
		}
	}
}

function getComptaBiblio(){
	if(localStorage.getItem('comptaBiblio')===null){
		return 0;
	}else{
		return localStorage.getItem('comptaBiblio');
	}
}

function getComptaLlibre(){
	if(localStorage.getItem('comptaLlibre')===null){
		return 0;
	}else{
		return localStorage.getItem('comptaLlibre');
	}
}

function getComptaAutor(){
	if(localStorage.getItem('comptaAutor')===null){
		return 0;
	}else{
		return localStorage.getItem('comptaAutor');
	}
}
 //getter y setters, practicament iguals entre ells.