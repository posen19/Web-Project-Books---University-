var version=1;	//variable amb la funcio per que cada vegada que es realitza una modificació sigui una versió diferent.
var idb="";

window.onload=function(){ //conectors.
	document.getElementById("buttonCrearBD").onclick=abrirIndexDB;
	document.getElementById("buttonOrdena").onclick=getChecked;
	document.getElementById("buttonFiltre").onclick=getFiltre;
};

function abrirIndexDB(){	//obre la base de dades
	var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB; // segons el navegador
	var openRequest = indexedDB.open("DBLibros", version); //Li poso el nom i la versió a la base de dades.

	openRequest.onupgradeneeded = function(e) { //Si es crea una nova base de dades o es modifica la versio
		var db = e.target.result;
		var ee=db.createObjectStore("libros", {keyPath: "num", autoIncrement:true}); //Clau principal
		ee.createIndex("titulo","titulo",{unique:true}); //Creo un altra clau per evitar repeticions de titols de llibres.
	};

	openRequest.onsuccess = function(e) { //Si s'obre satisfactoriament
		idb=e.target.result;
		console.log("Base de datos abierta");//missatge a consola, pel seguiment.
		version++;//aumento la versio per la seguent vegada
		llenarBD(e.target.result); //truco a la funció que omplira la base de dades amb el xml i json.
		setTimeout(function () {//faig un wait per que no escrigi abans de omplirla.
			escribir(e.target.result);
		},500);//0,5 segons
	};

	openRequest.onerror = function(e) {
		console.log("Error al abrir o crear la base de datos.")
	};
}

//Omple la base de dades amb json i xml
function llenarBD(bd){
	//afegir json a la base de dades
	var ind=1;//index per que no es repeteixi cap num que es la keyPath del indexedDB.
	var transaction;
	console.log("aqui llego!")
	$.getJSON('xmljson/json.json', function(data) { //igual que en l'altre javascript, es podria haver fet un per als dos, no hi vaig pensar.
		transaction= bd.transaction(["libros"],"readwrite").objectStore("libros");
		$.each(data.libros, function(i, f) {
			var llibre = new Object;//creo un objecte per posar la info del json.
			llibre.num=ind;
			ind++;
			llibre.titulo=f.titulo;
			llibre.autor=f.autor;
			llibre.desc=f.descripcion;
			llibre.img=f.img;

			var request=transaction.add(llibre);//proba a afegirlo

			request.onerror=function(e){//Si error costuma a esser per que ja existeix i no es pot repetir.
				console.log("El fichero ha sufrido el siguiente error: ", e.target.error.name);
			};

			request.onsuccess=function(e){
				console.log("Fichero cargado con éxito.");
			};
		});
	});

	//afegir xml a la base de dades
  	var xmlhttp = new XMLHttpRequest();//Mateix amb xml que en l'altre fitxer js.
  	xmlhttp.onreadystatechange = function() {
  	if (this.readyState == 4 && this.status == 200) {
  	  transaction= bd.transaction(["libros"],"readwrite").objectStore("libros");
  	  var xmlDoc = this.responseXML;
  		var x = xmlDoc.getElementsByTagName("libro");
  		for (var i = 0; i <x.length; i++) {
			var llibre2=new Object;
  			llibre2.num=ind;
			ind++;
  			llibre2.titulo=x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue;
			llibre2.autor=x[i].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
  			llibre2.desc=x[i].getElementsByTagName("descripcion")[0].childNodes[0].nodeValue;
			llibre2.img=x[i].getElementsByTagName("img")[0].childNodes[0].nodeValue;

			var request=transaction.add(llibre2);

				request.onerror=function(e){
					console.log("El fichero ha sufrido el siguiente error: ", e.target.error.name);
				};

				request.onsuccess=function(e){
					console.log("Fichero xml cargado con éxito.");
				};
  		}
		}
  	};
  	xmlhttp.open("GET", "xmljson/text.xml", true);
  	xmlhttp.send();
}

//posar la informacio de la base de dades al html.
function escribir(bd){

		var transaction = bd.transaction(['libros'], "readonly");//obre la taula que es vol utilitzar i la manera de treballar, en aques cas nomes lectura.
		var store = transaction.objectStore('libros');
		var data = [];//array on es guardara els objectes.
		var html="";

		var request = store.openCursor();//obrim un cursor per recorre el indexedDB agafan els objectes.
		request.onsuccess = function (event) {
    		var cursor = event.target.result;
    		if (cursor) {
				console.log(cursor.value);
    		    data.push(cursor.value);
    		    cursor.continue();//continue lo que fa es que si existeix un seguent objecte al curos executa el onsucces un altre vegada.
    		} else {
    		    for(var i=0;i<data.length;i++){

					html+="<div class=\"tablaI\"><div class=\"indexI\">"+data[i].num+
					"</div><div class=\"imagenI\"><img src=\"" +
    				data[i].img +
    				"\"/></div><div class=\"tituloI\">" +
    				data[i].titulo +
					"</div><div class=\"autorI\">" +
    				data[i].autor +
    				"</div><div class=\"descipcionI\">" +
    				data[i].desc +
    				"</div></div>";

				}

				document.getElementById("DataBase").innerHTML=html;
				document.getElementById("content").style.display="block";//faig visible la zona de deposició de la informació

				document.getElementById("buttons").innerHTML="<input id=\"buttonCrearBD\" type=\"button\" value=\"CrearBD\"><input id=\"buttonEliminarBD\" type=\"button\" value=\"VaciarBD\">";

				document.getElementById("buttonEliminarBD").onclick=eliminar;//conector per al div creat a la instruccio precedent.
			}
		};
}

//elminar la base de dades.
function eliminar(){
	var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB; // segons el navegador
	idb.close();//tanquem la versio que estem utilitzant per evitar bloquejos.
	var openRequest = indexedDB.deleteDatabase("DBLibros",version-1);//versio que es vol elimanr, com em aumentat la variable al crear la base de dades, ara per borrarla es posa version-1
	openRequest.onsuccess=function (e){
		console.log("Base de datos borrada");
		document.getElementById("DataBase").innerHTML="";
		document.getElementById("content").style.display="none";
		document.getElementById("buttons").innerHTML="<input id=\"buttonCrearBD\" type=\"button\" value=\"CrearBD\" onClick=\"abrirIndexDB()\">";
	};

	openRequest.onerror = function () {
		console.log("Couldn't delete database");
	};
	openRequest.onblocked = function () { //Has d'anar amb molt de compte per que no es bloqueji la base de dades.
		console.log("Couldn't delete database due to the operation being blocked");
	};
}

function getChecked(){//agafar la informacio del combobox per poder filtrar.
	var a=document.getElementById("comboBoxSel");
	ordenar(a.value);
}

var aa=1;//variable per que alterni ascendent i descendent.
function ordenar(as){
	var indexedDB=window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
	var openRequest = indexedDB.open("DBLibros", version-1);
	var data=[];
	openRequest.onsuccess = function(e) {
		var transaction = e.target.result.transaction(['libros'], "readwrite");
		var store = transaction.objectStore('libros');
		var request = store.openCursor();
		request.onsuccess = function (event) {
    		var cursor = event.target.result;
    		if (cursor) {
				//guardo la info de DB a l'array data.
    		    data.push(cursor.value);
    		    cursor.continue();
    		} else {
				//aqui miro si as, que es la info del comboBox, es titol o num i ordenarlo segons sigui un o l'altre.
				if(as=="titulo"){
					if(aa==0){//si es igual a 0, ascendent.
						data.sort(function(a,b){//funcio sencilla per comparar camps d'objectes, el sort s'ocupa de fer el bucle per ordenarlo.
							if (a.titulo < b.titulo){
								return -1;
							}
							if (a.titulo > b.titulo){
								return 1;
							}
							return 0;
						});
						aa=1;//si s'ha fet ascendent la proxima vegada es fa descendent.
					}else{//sino ordena descendent.
						data.sort(function(b,a){//repetició, es podria fer la function per separat per evitarlo...
							if (a.titulo < b.titulo){
								return -1;
							}
							if (a.titulo > b.titulo){
								return 1;
							}
							return 0;
						});
						aa=0;
					}
				}else{
					if(aa==0){//igual que abans per ordenat per numero...
						data.sort(function(a,b){
							if (a.num < b.num){
								return -1;
							}
							if (a.num > b.num){
								return 1;
							}
							return 0;
						});
						aa=1;
					}else{
						data.sort(function(b,a){
							if (a.num < b.num){
								return -1;
							}
							if (a.num > b.num){
								return 1;
							}
							return 0;
						});
						aa=0;
					}
				}
				var html="";
				for(var i=0;i<data.length;i++){

					html+="<div class=\"tablaI\"><div class=\"indexI\">"+data[i].num+
					"</div><div class=\"imagenI\"><img src=\"" +
    				data[i].img +
    				"\"\/></div><div class=\"tituloI\">" +
    				data[i].titulo +
					"</div><div class=\"autorI\">" +
    				data[i].autor +
    				"</div><div class=\"descipcionI\">" +
    				data[i].desc +
    				"</div></div>";

				}

				document.getElementById("DataBase").innerHTML=html;

			}
		};
	};
}

function getFiltre(){ //agafo la infor que es vol filtrar en el combobox
	var a=document.getElementById("comboBoxFil");
	filtre(a.value);
}

function filtre(as){
	var indexedDB=window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
	var openRequest = indexedDB.open("DBLibros", version-1);
	var data=[];
	openRequest.onsuccess = function(e) {
		var transaction = e.target.result.transaction(['libros'], "readwrite");
		var store = transaction.objectStore('libros');
		var request = store.openCursor();
		request.onsuccess = function (event) {
    		var cursor = event.target.result;
    		if (cursor) {
				var object=cursor.value;
				if(as==object.autor){//aquest if es per agafar nomès els objectes que el autor coincideix amb el escollit al combobox.
    		    	data.push(object);
				}
    		    cursor.continue();
    		} else {

				var html="";
				for(var i=0;i<data.length;i++){

					html+="<div class=\"tablaI\"><div class=\"indexI\">"+data[i].num+
					"</div><div class=\"imagenI\"><img src=\"" +
    				data[i].img +
    				"\"\/></div><div class=\"tituloI\">" +
    				data[i].titulo +
					"</div><div class=\"autorI\">" +
    				data[i].autor +
    				"</div><div class=\"descipcionI\">" +
    				data[i].desc +
    				"</div></div>";

				}

				document.getElementById("DataBase").innerHTML=html;

			}
		};
	};
}
