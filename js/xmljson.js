window.onload=function(){
	document.getElementById("xml").onclick=loadXMLDoc;
	document.getElementById("json").onclick=putJson2;
}


//Carrega el fitxer xml
function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "xmljson/text.xml", true);
  xmlhttp.send();
}

//Funció que escriu en html la informació xml
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table =""; //variable on es va afegin tot lo que es vol posar al html.
  var x = xmlDoc.getElementsByTagName("libro");
  for (i = 0; i <x.length; i++) { 
    table += "<div class=\"tabla\"><div class=\"imagen\"><img src=\"" +
    x[i].getElementsByTagName("img")[0].childNodes[0].nodeValue +
    "\"\/></div><div class=\"titulo\">" +
    x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +
    "</div><div class=\"descipcion\">" +
    x[i].getElementsByTagName("descripcion")[0].childNodes[0].nodeValue +
    "</div></div>";
  }
  document.getElementById("content").style.display="block";//mostra un div amagat
  document.getElementById("xmlf").innerHTML = table;
}


//Funcio de escriur en html el json
var ok=1;
function putJson2(){
	
	if(ok==1){ //variable de control ja que sino es podria afegir indefinidament la mateixa informació
		$(function() {
			$.getJSON('xmljson/json.json', function(data) {//Carrega el json y si ho consegueix realitza la funció.
				$.each(data.libros, function(i, f) {  //mentre hi hagi informació de libres seguira donant voltes.
					var tblRow ="<div class=\"tabla\"><div class=\"imagen\"><img src=\"" +
					f.img +
					"\"\/></div><div class=\"titulo\">" +
					f.titulo +
					"</div><div class=\"descipcion\">" +
					f.descripcion +
					"</div></div>";
					$(tblRow).appendTo("#jsonf"); //A cada volta posa la info del json al html.
				});
				ok=0;
				document.getElementById("content").style.display="block";
			});
		});
	}
}