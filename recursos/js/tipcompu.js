function oculta(id){
	 var elDiv = document.getElementById(id); 
	 elDiv.style.display='none'; 
	}
 
function muestra(id){
	 var elDiv = document.getElementById(id); 
	 elDiv.style.display='block';
	}
 
 
window.onload = function(){
oculta('escritorio'); 
}