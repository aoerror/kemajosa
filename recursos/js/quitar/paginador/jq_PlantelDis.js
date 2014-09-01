$(document).ready(function (){
     $("#distrito").change(function(){
        var distrito= $("#distrito").val();
        //url de los botones ver y editar
        var act='ver/'; //cambiar por funcion que se encarga de mostrar datos de plantel
     //var act2='editar/';
        
        var doc= 'distrito';
        var tipo= $("#tipo").val();
      //nombre(region); 
        
        //CONTENIDO DEL DIV ... codigo para borrar y rellenar el div 
        var divC = document.getElementById("grid_container");
        
        if(divC.style.display == "block" ){
            //si el div tiene contenido lo borra
            while(divC.hasChildNodes()){
                divC.removeChild(divC.lastChild);
            }
            
            //despues de borrar el contenido lo rellena poniendo la tabla etc.
           
            var contenido="<table id=\"distritos\"></table> <br> <div id=\"distritos_pager\"></div><br>";
           
            divC.style.display = "";
            divC.innerHTML=""+contenido+"";
            
        }
        else if(grid_container.style.display == "none" || grid_container.style.display == ""){
            divC.style.display = "block";
        }  
         
         
        //CONTENIDO DIV - RELLENO PARA DIV
        
	$("#distritos").jqGrid({
                
                editurl: 'delPlantel/',  
		url:'getDistritos/'+distrito,//funcion en el controller para datos json
		mtype : "post",//Ajax request type. It also could be GET
		datatype: "json",            //supported formats XML, JSON or Arrray
		colNames:['Plantel','Nombre del Plantel','Localidad','Municipio','IdPlantel','estatus',''],       //Grid column headings
		
                colModel:[
			{name:'num_plantel',index:'num_plantel', width:45, align:"center", key:true,title:false, hidden:false},
			{name:'nom_plantel',index:'nom_plantel', width:150, align:"left", sortable:true, title:false},
                        {name:'nombre_loc',index:'nombre_loc', width:160, align:"left", sortable:false, title:false},
			{name:'nombre_muni',index:'nombre_muni', width:140, align:"left", sortable:true, title:false},
                        {name:'id_plantel',index:'id_plantel', align:"left", hidden:true, sortable:false, title:false},
                        {name:'estatus',index:'estatus', align:"left", hidden:true, sortable:false, title:false},
                        {name:'ver',index:'ver', width:40, align:"left",sortable:false,title:false},
                        //{name:'editar',index:'editar', width:55, align:"left",sortable:false,title:false}		
		],
		rowNum:15,
		height: 400,
                width: 700,
		rowList:[5,15,30],
		pager: '#distritos_pager',
		sortname: 'distrito.id_distrito',
		viewrecords: true,
		multiselect:true,
		caption:"Titulo",
		gridComplete: function(){ //alerta sobre existencias
			var ids = $("#distritos").jqGrid('getDataIDs'); 
			for(var i=0;i < ids.length;i++){ 
				var id = ids[i];
				row = $("#distritos").getRowData(id);
					boton='<input type="button" value="Ver" onclick="cargar(\''+act+row.estatus+"/"+row.id_plantel+"/"+doc+'\')">';
					$('#distritos').setCell(id, 'ver', boton, {'background-color': '#FFF'});
                                        /*boton2='<input type="button" value="Editar" onclick="cargar(\''+act2+row.id_plantel+'\')">';
					$('#distritos').setCell(id, 'editar', boton2, {'background-color': '#FFF'}); */
			} 
		}
	}).navGrid('#distritos_pager',
			{
				view:false,
				edit:false,
				add:false,
				del:true,
				search:false,
				del:true, deltext:"Eliminar &nbsp;", 
				deltitle:"Elimina la(las) consulta(s) seleccionada(s)..."
			},
				{closeAfterEdit:true}, // use default settings for edit
				{closeAfterAdd:true}, // use default settings for add
				{},  // delete instead that del:false we need this
				{multipleSearch : false}, // enable the advanced searching
				{closeOnEscape:true} 
	);//jqgrid consultas

nombre(distrito);


    }); //region
    	
});//jquery

//funcion para botones dentro del grid (editar,ver)
function cargar(url){
	//alert('Cargando: ' + url);
	if (url.length > 5) document.location.href = url;
}

//funcion para colocar el nombre de la region seleccionada en el 
//titulo del grid...
function nombre(id_distrito){
    
    var cargar='nombreDistrito/'+id_distrito;
    $.post(cargar,function(responseText){
        $('.ui-jqgrid-title').html(responseText); 
        
    });    
 }    
     
function visible_grid() {
    $("#distrito").change(function(){
        var distrito= $("#distrito").val();
        //url de los botones ver y editar
        var act='ver/'; //cambiar por funcion que se encarga de mostrar datos de plantel
       
        var tipo= $("#tipo").val();
        var doc= 'distrito';
       
      //nombre(region); 
        
        //CONTENIDO DEL DIV ... codigo para borrar y rellenar el div 
        var divC = document.getElementById("grid_container");
        
        if(divC.style.display == "block" ){
            //si el div tiene contenido lo borra
            while(divC.hasChildNodes()){
                divC.removeChild(divC.lastChild);
            }
            
            //despues de borrar el contenido lo rellena poniendo la tabla etc.
            var contenido="<table id=\"distritos\"></table> <br> <div id=\"distritos_pager\"></div><br>";
            divC.style.display = "";
            divC.innerHTML=""+contenido+"";
        }
        else if(grid_container.style.display == "none" || grid_container.style.display == ""){
            divC.style.display = "block";
        }  
         
         
        //CONTENIDO DIV - RELLENO PARA DIV
        
	$("#distritos").jqGrid({
                
                editurl: 'editPlantel/',  
		url:'getDistritos/'+distrito,//funcion en el controller para datos json
		mtype : "post",//Ajax request type. It also could be GET
		datatype: "json",            //supported formats XML, JSON or Arrray
		colNames:['Plantel','Nombre Plantel','Localidad','Municipio','IdPlantel','estatus',''],       //Grid column headings
		
                colModel:[
			{name:'num_plantel',index:'num_plantel', width:45, align:"center", key:true,title:false, hidden:false},
			{name:'nom_plantel',index:'nom_plantel', width:150, align:"left", sortable:true, title:false},
			{name:'nombre_loc',index:'nombre_loc', width:160, align:"left", sortable:false, title:false},
			{name:'nombre_muni',index:'nombre_muni', width:140, align:"left", sortable:true, title:false},
                        {name:'id_plantel',index:'id_plantel', align:"left", hidden:true, sortable:false, title:false},
                        {name:'estatus',index:'estatus', align:"left", hidden:true, sortable:false, title:false},
                        {name:'ver',index:'ver', width:40, align:"left",sortable:false,title:false},
                        //{name:'editar',index:'editar', width:55, align:"left",sortable:false,title:false}		
		],
		rowNum:15,
		height: 400,
                width: 700,
		rowList:[5,15,30],
		pager: '#distritos_pager',
		sortname: 'distrito.id_distrito',
		viewrecords: true,
		multiselect:true,
		caption:"Titulo",
		gridComplete: function(){ //alerta sobre existencias
			var ids = $("#distritos").jqGrid('getDataIDs'); 
			for(var i=0;i < ids.length;i++){ 
				var id = ids[i];
				row = $("#distritos").getRowData(id);
				boton='<input type="button" value="Ver" onclick="cargar(\''+act+row.estatus+"/"+row.id_plantel+"/"+doc+"/"+tipo+'\')">';
					$('#distritos').setCell(id, 'ver', boton, {'background-color': '#FFF'});
                                      /*  boton2='<input type="button" value="Editar" onclick="cargar(\''+act2+row.id_plantel+'\')">';
					$('#distritos').setCell(id, 'editar', boton2, {'background-color': '#FFF'});*/
				
			} 
		}
	}).navGrid('#distritos_pager',
			{
				view:false,
				edit:false,
				add:false,
				del:true,
				search:false,
				del:true, deltext:"Eliminar &nbsp;", 
				deltitle:"Elimina la(las) consulta(s) seleccionada(s)..."
			},
				{closeAfterEdit:true}, // use default settings for edit
				{closeAfterAdd:true}, // use default settings for add
				{},  // delete instead that del:false we need this
				{multipleSearch : false}, // enable the advanced searching
				{closeOnEscape:true} 
	);//jqgrid consultas

});

}

function visible_grid2(distrito) {
        var act='ver/'; //cambiar por funcion que se encarga de mostrar datos de plantel
        
        var tipo= $("#tipo").val();
        var doc= 'distrito';
       
      //nombre(region); 
        
        //CONTENIDO DEL DIV ... codigo para borrar y rellenar el div 
        var divC = document.getElementById("grid_container");
        
        if(divC.style.display == "block" ){
            //si el div tiene contenido lo borra
            while(divC.hasChildNodes()){
                divC.removeChild(divC.lastChild);
            }
            
            //despues de borrar el contenido lo rellena poniendo la tabla etc.
           
            var contenido="<table id=\"distritos\"></table> <br> <div id=\"distritos_pager\"></div><br>";
           
            divC.style.display = "";
            divC.innerHTML=""+contenido+"";
            
        }
        else if(grid_container.style.display == "none" || grid_container.style.display == ""){
            divC.style.display = "block";
        }  
         
         
        //CONTENIDO DIV - RELLENO PARA DIV
              
	$("#distritos").jqGrid({
                
                editurl: 'editPlantel/',  
		url:'getDistritos/'+distrito,//funcion en el controller para datos json
		mtype : "post",//Ajax request type. It also could be GET
		datatype: "json",            //supported formats XML, JSON or Arrray
		colNames:['Plantel','Nombre Plantel','Localidad','Municipio','IdPlantel','estatus',''],       //Grid column headings
		
                colModel:[
			{name:'num_plantel',index:'num_plantel', width:45, align:"center", key:true,title:false, hidden:false},
			{name:'nom_plantel',index:'nom_plantel', width:150, align:"left", sortable:true, title:false},
			{name:'nombre_loc',index:'nombre_loc', width:160, align:"left", sortable:false, title:false},
			{name:'nombre_muni',index:'nombre_muni', width:140, align:"left", sortable:true, title:false},
                        {name:'id_plantel',index:'id_plantel', align:"left", hidden:true, sortable:false, title:false},
                        {name:'estatus',index:'estatus', align:"left", hidden:true, sortable:false, title:false},
                        {name:'ver',index:'ver', width:40, align:"left",sortable:false,title:false},
                     //   {name:'editar',index:'editar', width:55, align:"left",sortable:false,title:false}		
		],
		rowNum:15,
		height: 400,
                width: 700,
		rowList:[5,15,30],
		pager: '#distritos_pager',
		sortname: 'distrito.id_distrito',
		viewrecords: true,
		multiselect:true,
		caption:"Titulo",
		gridComplete: function(){ //alerta sobre existencias
			var ids = $("#distritos").jqGrid('getDataIDs'); 
			for(var i=0;i < ids.length;i++){ 
				var id = ids[i];
				row = $("#distritos").getRowData(id);
					boton='<input type="button" value="Ver" onclick="cargar(\''+act+row.estatus+"/"+row.id_plantel+"/"+doc+"/"+tipo+'\')">';
					$('#distritos').setCell(id, 'ver', boton, {'background-color': '#FFF'});
                                     /*   boton2='<input type="button" value="Editar" onclick="cargar(\''+act2+row.id_plantel+'\')">';
					$('#distritos').setCell(id, 'editar', boton2, {'background-color': '#FFF'}); */
			} 
		}
	}).navGrid('#distritos_pager',
			{
				view:false,
				edit:false,
				add:false,
				del:true,
				search:false,
				del:true, deltext:"Eliminar &nbsp;", 
				deltitle:"Elimina la(las) consulta(s) seleccionada(s)..."
			},
				{closeAfterEdit:true}, // use default settings for edit
				{closeAfterAdd:true}, // use default settings for add
				{},  // delete instead that del:false we need this
				{multipleSearch : false}, // enable the advanced searching
				{closeOnEscape:true} 
	);//jqgrid consultas
        
nombre(distrito);

}