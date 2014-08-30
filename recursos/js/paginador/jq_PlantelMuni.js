$(document).ready(function (){
     $("#buscar").keyup(function(){
        var municipio= $("#buscar").val();
        var act='ver/'; 
        var doc = 'municipio';
    
       //CONTENIDO DEL DIV ... codigo para borrar y rellenar el div 
        var divC = document.getElementById("grid_container");
        
        if(divC.style.display == "block" ){
            //si el div tiene contenido lo borra
            while(divC.hasChildNodes()){
                divC.removeChild(divC.lastChild);
            }
            
            //despues de borrar el contenido lo rellena poniendo la tabla etc.
           
            var contenido="<table id=\"municipios\"></table> <br> <div id=\"municipios_pager\"></div><br>";
           
            divC.style.display = "";
            divC.innerHTML=""+contenido+"";
            
        }
        else if(grid_container.style.display == "none" || grid_container.style.display == ""){
            divC.style.display = "block";
        }  
         
         
        //CONTENIDO DIV - RELLENO PARA DIV
               
	$("#municipios").jqGrid({
                
                editurl: 'editPlantel/',  
		url:'getMunicipio/'+municipio,//funcion en el controller para datos json
		mtype : "post",//Ajax request type. It also could be GET
		datatype: "json",            //supported formats XML, JSON or Arrray
		colNames:['Plantel','Nombre del Plantel','Municipio', 'Distrito','IdPlantel','estatus',''],       //Grid column headings
		colModel:[
			{name:'num_plantel',index:'num_plantel', width:50, align:"center", key:true,title:false, hidden:false},
			{name:'nom_plantel',index:'nom_plantel', width:140, align:"left", sortable:true, title:false},
			{name:'nombre_muni',index:'nombre_muni', width:160, align:"left", sortable:true, title:false},
			{name:'nombre_dis',index:'nombre_dis', width:100, align:"left", sortable:false, title:false},
                        {name:'id_plantel',index:'id_plantel', align:"left", hidden:true, sortable:false, title:false},
                        {name:'estatus',index:'estatus', align:"left", hidden:true, sortable:false, title:false},
                        {name:'ver',index:'ver', width:35, align:"left",sortable:false,title:false},
                       
		],
		rowNum:15,
		height: 400,
                width: 700,
		rowList:[5,15,30],
		pager: '#municipios_pager',
		sortname: 'municipio.id_muni',
		viewrecords: true,
		multiselect:true,
		caption:"Coincidencias: '" + municipio + "' ",
		gridComplete: function(){ //alerta sobre existencias
			var ids = $("#municipios").jqGrid('getDataIDs'); 
			for(var i=0;i < ids.length;i++){ 
				var id = ids[i];
				row = $("#municipios").getRowData(id);
					boton='<input type="button" value="Ver" onclick="cargar(\''+act+row.estatus+"/"+row.id_plantel+"/"+doc+'\')">';
					$('#municipios').setCell(id, 'ver', boton, {'background-color': '#FFF'});              
			} 
		}
	}).navGrid('#municipios_pager',
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

    }); //region
	
});//jquery

//funcion para botones dentro del grid (editar,ver)
function cargar(url){
	//alert('Cargando: ' + url);
	if (url.length > 5) document.location.href = url;
}

    
function visible_grid() {
        var municipio= $("#buscar").val();
        var act='ver/';
        var doc = 'municipio';
       
        //CONTENIDO DEL DIV ... codigo para borrar y rellenar el div 
        var divC = document.getElementById("grid_container");
        
        if(divC.style.display == "block" ){
            //si el div tiene contenido lo borra
            while(divC.hasChildNodes()){
                divC.removeChild(divC.lastChild);
            }
            
            //despues de borrar el contenido lo rellena poniendo la tabla etc.
            var contenido="<table id=\"municipios\"></table> <br> <div id=\"municipios_pager\"></div><br>";
            divC.style.display = "";
            divC.innerHTML=""+contenido+"";
        }
        else if(grid_container.style.display == "none" || grid_container.style.display == ""){
            divC.style.display = "block";
        }  
         
         
        //CONTENIDO DIV - RELLENO PARA DIV
        
	$("#municipios").jqGrid({
                
                editurl: 'editPlantel/',  
		url:'getMunicipio/'+municipio,//funcion en el controller para datos json
		mtype : "post",//Ajax request type. It also could be GET
		datatype: "json",            //supported formats XML, JSON or Arrray
		colNames:['Plantel','Nombre Plantel','Municipio', 'Distrito','IdPlantel','estatus',''],       //Grid column headings
		colModel:[
			{name:'num_plantel',index:'num_plantel', width:50, align:"center", key:true,title:false, hidden:false},
			{name:'nom_plantel',index:'nom_plantel', width:140, align:"left", sortable:true, title:false},
			{name:'nombre_muni',index:'nombre_muni', width:160, align:"left", sortable:true, title:false},
			{name:'nombre_dis',index:'nombre_dis', width:100, align:"left", sortable:false, title:false},
                        {name:'id_plantel',index:'id_plantel', align:"left", hidden:true, sortable:false, title:false},
                        {name:'estatus',index:'estatus', align:"left", hidden:true, sortable:false, title:false},
                        {name:'ver',index:'ver', width:35, align:"left",sortable:false,title:false},
                     
		],
		rowNum:15,
		height: 400,
                width:700,
		rowList:[5,15,30],
		pager: '#municipios_pager',
		sortname: 'municipio.id_muni',
		viewrecords: true,
		multiselect:true,
		caption:"Coincidencias: '" + municipio + "' ",
		gridComplete: function(){ //alerta sobre existencias
			var ids = $("#municipios").jqGrid('getDataIDs'); 
			for(var i=0;i < ids.length;i++){ 
				var id = ids[i];
				row = $("#municipios").getRowData(id);
					boton='<input type="button" value="Ver" onclick="cargar(\''+act+row.estatus+"/"+row.id_plantel+"/"+doc+'\')">';
					$('#municipios').setCell(id, 'ver', boton, {'background-color': '#FFF'});
                                        
				} 
		}
	}).navGrid('#municipios_pager',
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
}


function visible_grid2() {
     
        var municipio= $("#buscar").val();
        var act='ver/'; 
        var doc = 'municipio';
       
        //CONTENIDO DEL DIV ... codigo para borrar y rellenar el div 
        var divC = document.getElementById("grid_container");
        
        if(divC.style.display == "block" ){
            //si el div tiene contenido lo borra
            while(divC.hasChildNodes()){
                divC.removeChild(divC.lastChild);
            }
            
            //despues de borrar el contenido lo rellena poniendo la tabla etc.
            var contenido="<table id=\"municipios\"></table> <br> <div id=\"municipios_pager\"></div><br>";
            divC.style.display = "";
            divC.innerHTML=""+contenido+"";
        }
        else if(grid_container.style.display == "none" || grid_container.style.display == ""){
            divC.style.display = "block";
        }  
         
         
        //CONTENIDO DIV - RELLENO PARA DIV
        
	$("#municipios").jqGrid({
                editurl: 'editPlantel/',  
		url:'getMunicipio/'+municipio,//funcion en el controller para datos json
		mtype : "post",//Ajax request type. It also could be GET
		datatype: "json",            //supported formats XML, JSON or Arrray
		colNames:['Plantel','Nombre Plantel','Municipio', 'Distrito','IdPlantel','estatus',''],       //Grid column headings
		colModel:[
			{name:'num_plantel',index:'num_plantel', width:50, align:"center", key:true,title:false, hidden:false},
			{name:'nom_plantel',index:'nom_plantel', width:140, align:"left", sortable:true, title:false},
			{name:'nombre_muni',index:'nombre_muni', width:160, align:"left", sortable:true, title:false},
			{name:'nombre_dis',index:'nombre_dis', width:100, align:"left", sortable:false, title:false},
                        {name:'id_plantel',index:'id_plantel', align:"left", hidden:true, sortable:false, title:false},
                        {name:'estatus',index:'estatus', align:"left", hidden:true, sortable:false, title:false},
                        {name:'ver',index:'ver', width:35, align:"left",sortable:false,title:false},
                   ],
		rowNum:15,
		height: 400,
                width: 700,
		rowList:[5,15,30],
		pager: '#municipios_pager',
		sortname: 'municipio.id_muni',
		viewrecords: true,
		multiselect:true,
		caption:"Coincidencias: '" + municipio + "' ",
		gridComplete: function(){ //alerta sobre existencias
			var ids = $("#municipios").jqGrid('getDataIDs'); 
			for(var i=0;i < ids.length;i++){ 
				var id = ids[i];
				row = $("#municipios").getRowData(id);
					boton='<input type="button" value="Ver" onclick="cargar(\''+act+row.estatus+"/"+row.id_plantel+"/"+doc+'\')">';
					$('#municipios').setCell(id, 'ver', boton, {'background-color': '#FFF'});
                                       
			} 
		}
	}).navGrid('#municipios_pager',
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

}