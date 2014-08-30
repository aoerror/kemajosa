function portatilhabilitada(){ 
    document.icompu.pulgadas.disabled = false; 
   } 

function escritoriodeshabilitado(){ 
    document.icompu.ns_monitor.disabled = true;
    document.icompu.ns_monitor.value="";
    document.icompu.ns_teclado.disabled=true;
    document.icompu.ns_teclado.value="";
    document.icompu.ns_mouse.disabled=true; 
    document.icompu.ns_mouse.value="";
}
	
function escritoriohabilitado(){ 
    document.icompu.ns_monitor.disabled = false;
    document.icompu.ns_teclado.disabled= false;
    document.icompu.ns_mouse.disabled= false;
   } 
   
function portatildeshabilitada(){ 
    document.icompu.pulgadas.disabled = true; 
    document.icompu.pulgadas.value="";
   } 


