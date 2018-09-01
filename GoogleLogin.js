$(document).ready(function(){
  comprobar();
});

function onSignIn(googleUser) {
	var hola=comprobar();
	if(!hola){
  		var profile = googleUser.getBasicProfile();
  		console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  		console.log('Name: ' + profile.getName());
  		console.log('Image URL: ' + profile.getImageUrl());
  		console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.


		$.ajax
		({	data: {'nom1': profile.getGivenName(),'cnom1':profile.getFamilyName(), 'mail1':profile.getEmail(), 'tel1':"", 'password1':"", 'datepicker1':"", 'direccion1':"", 'poblacion1':"", 'pais1':"", 'codipostal1':"", 'iban1':"",'img2':profile.getImageUrl()},
			url: 'php/alta.php',
			type:'post',
			cache:false,
			success: function(result) {
	      		if(document.location=="http://exemples.ua.ad/Paulo/Cuenta.html"){
					setTimeout("location.href='http://exemples.ua.ad/Paulo/index.html'", 1);
	      		}

	      		$.ajax
	      		({
	        		data: {'mail1':profile.getEmail(),'pass1':""},
	        		url: 'php/login.php',
	        		type:'post',
	        		cache:false,
	        		success: function(result){
	        		},
	        		error:function(result){
	            		console.log(JSON.stringify(result));
	        		}
	      		});
			},
			error: function (xhr) {
				alert(xhr.responseText);
				setTimeout("location.href='http://exemples.ua.ad/Paulo/Cuenta.html'", 1);
			}
		});
	}
}

function comprobar(){
	var a=false;
  $.ajax
  ({
    url:'php/comprobarSession.php',
    cache:false,
    async: false,
    success: function(result){
        if(result=="1"){
          	$.ajax
          	({url: 'php/agafa.php',
            type:'post',
            cache:false,
            success: function(result){
              	$("#Cuenta").html(
                	'<div class="dropdownGoogle"><div id="login">'+
                  		'<div id="imgLogin">'+
                    		'<img src="'+result.img+'">'+
                  		'</div>'+
                  		'<div id="nombreLoginp">'+
                    		'<div id="nombreLogin">'+result.Nom+" "+result.Cognom+'</div>'+
                  		'</div>'+
                 		'<div class="dropdown-contentGoogle">'+
                    		'<a href="perfil.html">perfil</a>'+
                    		'<a id="signout" href="#" >Tancar sesió</a>'+
                		'</div>'+
                	'</div></div>'
              	);
              	$("#signout").click(signOut);
            },
            error:function(result){
                console.log(JSON.stringify(result));
            }
          });
          a=true;
        }else{
          a=false;
        }
    }
  });
  return a;
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    $("#Cuenta").html('<a href="Cuenta.html"><span>CUENTA</span><div class="aba">CUENTA</div></a>');
     $.ajax
      ({url: 'php/logout.php',
        cache:false,
        success: function(result){
            setTimeout("location.href='http://exemples.ua.ad/Paulo/index.html'", 1);
        },
        error:function(result){
            console.log(JSON.stringify(result));
        }
      });
  }


function tryAPIGeolocation(aux,map) {
	jQuery.post( "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBhjM0d0w1thL-D77ORIQ2R2RxSiOlkju4", function(success) {
		var pos={lat: success.location.lat, lng: success.location.lng};
		aux.setPosition(pos);
	    aux.setContent('Location found.');
	    map.setCenter(pos);
	});
}




  function initMap() {
        var uluru = {lat: 42.465370, lng: 1.493171};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: uluru
        });

        var marker = new Array();
        marker[0]=  new google.maps.Marker({
          position: uluru,
          map: map
        });
        marker[1] = new google.maps.Marker({
          position: {lat: 42.466320, lng: 1.492575},
          map: map
        });
        marker[2] = new google.maps.Marker({
          position: {lat: 42.469122, lng: 1.493347},
          map: map
        });
        marker[3] = new google.maps.Marker({
          position: {lat: 42.491112, lng: 1.495338},
          map: map
        });
        var infoWindow = new google.maps.InfoWindow({map: map});
        if (navigator.geolocation) {
	        tryAPIGeolocation(infoWindow,map);
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        if(browserHasGeolocation){
        	var a='Error: The Geolocation service failed.';
        }else{
        	var a='Error: Your browser doesn\'t support geolocation.';
        }
        infoWindow.setContent(a);
      }
