 function oculta(id){
            var elDiv = document.getElementById(id); 
            elDiv.style.display='none'; 
 }
 
 function muestra(id){
            var elDiv = document.getElementById(id);
            elDiv.style.display='block';
 }
 window.onload = function(){
            oculta('portatil');
 }
 
 function mostrarReferencia(){
     if (document.icompu.id_marca[25].selected) {
         document.getElementById('otramarca').style.display='block';
     } else{
         document.getElementById('otramarca').style.display='none';
     }
 }