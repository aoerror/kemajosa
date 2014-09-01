 function mostrarObservacion(){
     if (document.formulario.estado_fisico[1].selected) {
         document.getElementById('observacion').style.display='none';
     }
     else{
         document.getElementById('observacion').style.display='block';
     }
 }
//Funcion para ocultar los campos numero de serie y modelo cuando la marca sea = a ENSAMBLADA 
 function ocultarModeloNS(){
     if (document.formulario.id_marca.options[4].selected) {
         document.getElementById('modelons').style.display='none';
     } else{
         document.getElementById('modelons').style.display='block';
     }
 }
