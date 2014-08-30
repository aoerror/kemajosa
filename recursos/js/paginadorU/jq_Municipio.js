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
                
                editurl: 'editUsuario/',  
		url:'getMunicipio/'+municipio,//funcion en el controller para datos json
		mtype : "post",//Ajax request type. It also could be GET
		datatype: "json",            //supported formats XML, JSON or Arrray
		colNames:['Nombre Completo','Usuario','Correo Electronico','Plantel','Municipio','num_usuario','status','tipo_usuario',''],//Grid column headings
		
        colModel:[
		{name:'nombre',index:'nombre', width:150, align:"left", sortable:false, title:false},
                {name:'nom_usuario',index:'nom_usuario', width:60, align:"left", sortable:false, title:false},
		{name:'correo_e',index:'correo_e', width:100, align:"left", sortable:false, title:false},
                {name:'num_plantel',index:'num_plantel', width:40, align:"center", sortable:false, title:false},
                {name:'nombre_muni',index:'nombre_muni', width:100, align:"left", sortable:false, title:false},
                {name:'num_usuario',index:'num_usuario', align:"left", hidden:true, sortable:false, title:false},
                {name:'status',index:'status', align:"left", hidden:true, sortable:false, title:false},
                {name:'tipo_usuario',index:'tipo_usuario', align:"left", hidden:true, sortable:false, title:false},
                {name:'ver',index:'ver', width:40, align:"left",sortable:false,title:false},		
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
					boton='<input type="button" value="Ver" onclick="cargar(\''+act+row.status+"/"+row.tipo_usuario+"/"+row.num_usuario+"/"+doc+'\')">';
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
                
                editurl: 'editUsuario/',  
		url:'getMunicipio/'+municipio,//funcion en el controller para datos json
		mtype : "post",//Ajax request type. It also could be GET
		datatype: "json",            //supported formats XML, JSON or Arrray
		colNames:['Nombre Completo','Usuario','Correo Electronico','Plantel','Municipio','num_usuario','status','tipo_usuario',''],//Grid column headings
		
        colModel:[
		{name:'nombre',index:'nombre', width:150, align:"left", sortable:false, title:false},
                {name:'nom_usuario',index:'nom_usuario', width:60, align:"left", sortable:false, title:false},
		{name:'correo_e',index:'correo_e', width:100, align:"left", sortable:false, title:false},
                {name:'num_plantel',index:'num_plantel', width:40, align:"center", sortable:false, title:false},
                {name:'nombre_muni',index:'nombre_muni', width:100, align:"left", sortable:false, title:false},
                {name:'num_usuario',index:'num_usuario', align:"left", hidden:true, sortable:false, title:false},
                {name:'status',index:'status', align:"left", hidden:true, sortable:false, title:false},
                {name:'tipo_usuario',index:'tipo_usuario', align:"left", hidden:true, sortable:false, title:false},
                {name:'ver',index:'ver', width:40, align:"left",sortable:false,title:false},			
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
					boton='<input type="button" value="Ver" onclick="cargar(\''+act+row.status+"/"+row.tipo_usuario+"/"+row.num_usuario+"/"+doc+'\')">';
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
                
                editurl: 'editUsuario/',  
		url:'getMunicipio/'+municipio,//funcion en el controller para datos json
		mtype : "post",//Ajax request type. It also could be GET
		datatype: "json",            //supported formats XML, JSON or Arrray
		colNames:['Nombre Completo','Usuario','Correo Electronico','Plantel','Municipio','num_usuario','status','tipo_usuario',''],//Grid column headings
		
        colModel:[
		{name:'nombre',index:'nombre', width:150, align:"left", sortable:false, title:false},
                {name:'nom_usuario',index:'nom_usuario', width:60, align:"left", sortable:false, title:false},
		{name:'correo_e',index:'correo_e', width:100, align:"left", sortable:false, title:false},
                {name:'num_plantel',index:'num_plantel', width:40, align:"center", sortable:false, title:false},
                {name:'nombre_muni',index:'nombre_muni', width:100, align:"left", sortable:false, title:false},
                {name:'num_usuario',index:'num_usuario', align:"left", hidden:true, sortable:false, title:false},
                {name:'status',index:'status', align:"left", hidden:true, sortable:false, title:false},
                {name:'tipo_usuario',index:'tipo_usuario', align:"left", hidden:true, sortable:false, title:false},
                {name:'ver',index:'ver', width:40, align:"left",sortable:false,title:false},				
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
					boton='<input type="button" value="Ver" onclick="cargar(\''+act+row.status+"/"+row.tipo_usuario+"/"+row.num_usuario+"/"+doc+'\')">';
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