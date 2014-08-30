$(document).ready(function (){
     $("#buscar").keyup(function(){
        var distrito= $("#buscar").val();
        var act='ver/'; 
        //var act2='editar/';
       
       var doc = 'localidad';
       
       //CONTENIDO DEL DIV ... codigo para borrar y rellenar el div 
        var divC = document.getElementById("grid_container");
        
        if(divC.style.display == "block" ){
            //si el div tiene contenido lo borra
            while(divC.hasChildNodes()){
                divC.removeChild(divC.lastChild);
            }
            
            //despues de borrar el contenido lo rellena poniendo la tabla etc.
            var contenido="<table id=\"localidades\"></table> <br> <div id=\"localidades_pager\"></div><br>";
            divC.style.display = "";
            divC.innerHTML=""+contenido+"";
        }
        else if(grid_container.style.display == "none" || grid_container.style.display == ""){
            divC.style.display = "block";
        }  
         
        //CONTENIDO DIV - RELLENO PARA DIV    
        
	$("#localidades").jqGrid({
                
                editurl: 'editPlantel/',  
		url:'getLocalidad/'+distrito,//funcion en el controller para datos json
		mtype : "post",//Ajax request type. It also could be GET
		datatype: "json",            //supported formats XML, JSON or Arrray
		colNames:['Plantel','Nombre Plantel', 'Localidad','Distrito','IdPlantel','estatus',''],       //Grid column headings
		colModel:[
			{name:'num_plantel',index:'num_plantel', width:50, align:"center", key:true,title:false, hidden:false},
			{name:'nom_plantel',index:'nom_plantel', width:150, align:"left", sortable:true, title:false},
			{name:'nombre_loc',index:'nombre_loc', width:160, align:"left", sortable:true, title:false},
			{name:'nombre_dis',index:'distrito', width:100, align:"left", sortable:false, title:false},
			{name:'id_plantel',index:'id_plantel', align:"left", hidden:true, sortable:false, title:false},
                        {name:'estatus',index:'estatus', align:"left", hidden:true, sortable:false, title:false},
                        {name:'ver',index:'ver', width:35, align:"left",sortable:false,title:false},
                      //  {name:'editar',index:'editar', width:60, align:"left",sortable:false,title:false}		
		],
		rowNum:15,
		height: 400,
                width: 700,
		rowList:[5,15,30],
		pager: '#localidades_pager',
		sortname: 'localidad.id_loc',
		viewrecords: true,
		multiselect:true,
		caption:"Coincidencias: '" + distrito + "'",
		gridComplete: function(){ //alerta sobre existencias
			var ids = $("#localidades").jqGrid('getDataIDs'); 
			for(var i=0;i < ids.length;i++){ 
				var id = ids[i];
				row = $("#localidades").getRowData(id);
				//if(row.estado<=2){
					boton='<input type="button" value="Ver" onclick="cargar(\''+act+row.estatus+"/"+row.id_plantel+"/"+doc+'\')">';
					$('#localidades').setCell(id, 'ver', boton, {'background-color': '#FFF'});
                                     //   boton2='<input type="button" value="Editar" onclick="cargar(\''+act2+row.id_plantel+'\')">';
				//	$('#localidades').setCell(id, 'editar', boton2, {'background-color': '#FFF'});
				//}
			} 
		}
	}).navGrid('#localidades_pager',
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
        var distrito= $("#buscar").val();
        var act='ver/'; 
             
        var doc='localidad';
       
       //CONTENIDO DEL DIV ... codigo para borrar y rellenar el div 
        var divC = document.getElementById("grid_container");
        
        if(divC.style.display == "block" ){
            //si el div tiene contenido lo borra
            while(divC.hasChildNodes()){
                divC.removeChild(divC.lastChild);
            }
            
            //despues de borrar el contenido lo rellena poniendo la tabla etc.
           var contenido="<table id=\"localidades\"></table> <br> <div id=\"localidades_pager\"></div><br>";
            divC.style.display = "";
            divC.innerHTML=""+contenido+"";
        }
        else if(grid_container.style.display == "none" || grid_container.style.display == ""){
            divC.style.display = "block";
        }  
         
        //CONTENIDO DIV - RELLENO PARA DIV
        
	$("#localidades").jqGrid({
                
                editurl: 'editPlantel/',  
		url:'getLocalidad/'+distrito,//funcion en el controller para datos json
		mtype : "post",//Ajax request type. It also could be GET
		datatype: "json",            //supported formats XML, JSON or Arrray
		colNames:['Plantel','Nombre Plantel', 'Localidad', 'Distrito','IdPlantel','estatus',''],       //Grid column headings
		colModel:[
			{name:'num_plantel',index:'num_plantel', width:50, align:"center", key:true,title:false, hidden:false},
			{name:'nom_plantel',index:'nom_plantel', width:150, align:"left", sortable:true, title:false},
			{name:'nombre_loc',index:'nombre_loc', width:160, align:"left", sortable:true, title:false},
			{name:'nombre_dis',index:'distrito', width:100, align:"left", sortable:false, title:false},
			{name:'id_plantel',index:'id_plantel', align:"left", hidden:true, sortable:false, title:false},
                        {name:'estatus',index:'estatus', align:"left", hidden:true, sortable:false, title:false},
                        {name:'ver',index:'ver', width:35, align:"left",sortable:false,title:false},
                        //{name:'editar',index:'editar', width:60, align:"left",sortable:false,title:false}		
		],
		rowNum:15,
		height: 400,
                width: 700,
		rowList:[5,15,30],
		pager: '#localidades_pager',
		sortname: 'localidad.id_loc',
		viewrecords: true,
		multiselect:true,
		caption:"Coincidencias: '" + distrito + "'",
		gridComplete: function(){ //alerta sobre existencias
			var ids = $("#localidades").jqGrid('getDataIDs'); 
			for(var i=0;i < ids.length;i++){ 
				var id = ids[i];
				row = $("#localidades").getRowData(id);
					boton='<input type="button" value="Ver" onclick="cargar(\''+act+row.estatus+"/"+row.id_plantel+"/"+doc+'\')">';
					$('#localidades').setCell(id, 'ver', boton, {'background-color': '#FFF'});
                                       /* boton2='<input type="button" value="Editar" onclick="cargar(\''+act2+row.id_plantel+'\')">';
					$('#localidades').setCell(id, 'editar', boton2, {'background-color': '#FFF'});*/
			} 
		}
	}).navGrid('#localidades_pager',
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
        var distrito= $("#buscar").val();
        var act='ver/'; 
              
        var doc='localidad';
       
       //CONTENIDO DEL DIV ... codigo para borrar y rellenar el div 
        var divC = document.getElementById("grid_container");
        
        if(divC.style.display == "block" ){
            //si el div tiene contenido lo borra
            while(divC.hasChildNodes()){
                divC.removeChild(divC.lastChild);
            }
            
            //despues de borrar el contenido lo rellena poniendo la tabla etc.
           
           var contenido="<table id=\"localidades\"></table> <br> <div id=\"localidades_pager\"></div><br>";
            
            divC.style.display = "";
            divC.innerHTML=""+contenido+"";
            
        }
        else if(grid_container.style.display == "none" || grid_container.style.display == ""){
            divC.style.display = "block";
        }  
         
         
        //CONTENIDO DIV - RELLENO PARA DIV
        
	$("#localidades").jqGrid({
                
                editurl: 'editPlantel/',  
		url:'getLocalidad/'+distrito,//funcion en el controller para datos json
		mtype : "post",//Ajax request type. It also could be GET
		datatype: "json",            //supported formats XML, JSON or Arrray
		colNames:['Plantel','Nombre Plantel', 'Localidad', 'Distrito','IdPlantel','estatus',''],       //Grid column headings
		colModel:[
			{name:'num_plantel',index:'num_plantel', width:50, align:"center", key:true,title:false, hidden:false},
			{name:'nom_plantel',index:'nom_plantel', width:150, align:"left", sortable:true, title:false},
			{name:'nombre_loc',index:'nombre_loc', width:160, align:"left", sortable:true, title:false},
			{name:'nombre_dis',index:'distrito', width:100, align:"left", sortable:false, title:false},
			{name:'id_plantel',index:'id_plantel', align:"left", hidden:true, sortable:false, title:false},
                        {name:'estatus',index:'estatus', align:"left", hidden:true, sortable:false, title:false},
                        {name:'ver',index:'ver', width:35, align:"left",sortable:false,title:false},
                  //      {name:'editar',index:'editar', width:60, align:"left",sortable:false,title:false}		
		],
		rowNum:15,
		height: 400,
                width: 700,
		rowList:[5,15,30],
		pager: '#localidades_pager',
		sortname: 'localidad.id_loc',
		viewrecords: true,
		multiselect:true,
		caption:"Planteles por Localidad:  " + distrito,
		gridComplete: function(){ //alerta sobre existencias
			var ids = $("#localidades").jqGrid('getDataIDs'); 
			for(var i=0;i < ids.length;i++){ 
				var id = ids[i];
				row = $("#localidades").getRowData(id);
					boton='<input type="button" value="Ver" onclick="cargar(\''+act+row.estatus+"/"+row.id_plantel+"/"+doc+'\')">';
					$('#localidades').setCell(id, 'ver', boton, {'background-color': '#FFF'});
                                     //   boton2='<input type="button" value="Editar" onclick="cargar(\''+act2+row.id_plantel+'\')">';
					//$('#localidades').setCell(id, 'editar', boton2, {'background-color': '#FFF'});
			} 
		}
	}).navGrid('#localidades_pager',
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