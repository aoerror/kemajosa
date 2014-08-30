/* Carga los distritos pertenecientes a la region seleccionada */
function cargarDis(){
    $('#distrito').html('<option value="null" selected>Cargando</option>');
	
    var idregion= $('#region').val();
    var cargar='cargarDistritos/'+idregion;
    $.post(cargar,function(responseText){
        $('#distrito').html(responseText); 
    });
}
	
/* Carga los municipios pertenecientes al distrito seleccionado */        
function cargarMuni(){
    $('#municipio').html('<option value="null" selected>Cargando</option>');
    var idDistrito= $('#distrito').val();
    var cargarMunicipios='cargarMunicipios/'+idDistrito;
    $.post(cargarMunicipios,function(responseText){
        $('#municipio').html(responseText);
		
    });
}

/* Carga las localidades pertenecientes al municipio seleccionado */        
function cargarLoc(){
    $('#localidad').html('<option value="null" selected>Cargando</option>');
    var idMuni= $('#municipio').val();
    var cargarLoc='cargarLocal/'+idMuni;
    $.post(cargarLoc,function(responseText){
        $('#localidad').html(responseText);
    });
}

//Ocultar y hacer visible un div (Editar plantel)
function visible() {
    var divC = document.getElementById("resul");
    var divC1 = document.getElementById("resul2");
    if(resul.style.display == "block" || resul.style.display == ""){
        divC.style.display = "none";
        divC1.style.display = "block";               
    } else {
        divC.style.display = "block";
        divC1.style.display = "none";               
    }
               
}


//Carga la lista dependiendo del tipo de usuario que se elegio.(Crear Usuario y Modificar Usuario)
function cargarTipo(){
    $('#oficina').html('<option value="null" selected>Cargando</option>');
	
    var tipo_u= $('#tipo').val();
    var cargar='cargarTipo/'+tipo_u;
    
    $.post(cargar,function(responseText){
        $('#oficina').html(responseText); 
    });
}

//Carga la lista dependiendo del tipo de usuario que se elegio.Es usada para la busqueda al modificar un usuario
function cargarTipoU(){
    $('#usu').html('<option value="null" selected>Cargando</option>');
	
    var tipo_u= $('#tipo_u').val();
    var cargar='cargarTipoU/'+tipo_u;
    
    $.post(cargar,function(responseText){
        $('#usu').html(responseText); 
    });
}

//Accion Boton Cancelar (Editar Usuario)
function redireccion() {
    var vista = 'editar';
    document.location.href=vista;
}

//Accion Boton Cancelar (Editar Plantel)
function cancelar() {
    var vista = 'editar';
    document.location.href=vista;
}

//Accion Boton Cancelar (Editar Administrador)
function cancelar2() {
    var vista = 'mostrar';
    document.location.href=vista;
}