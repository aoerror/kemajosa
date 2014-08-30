$(document).ready(function (){
     $("#buscar").keyup(function(){
        var inventario= $("#buscar").val();
        //url de los botones ver y editar
        var act='ver/'; //cambiar por funcion que se encarga de mostrar datos de plantel
        
       
    
       
       //CONTENIDO DEL DIV ... codigo para borrar y rellenar el div 
        var divC = document.getElementById("grid_container");
        
        if(divC.style.display == "block" ){
            //si el div tiene contenido lo borra
            while(divC.hasChildNodes()){
                divC.removeChild(divC.lastChild);
            }
            
            //despues de borrar el contenido lo rellena poniendo la tabla etc.
           
            var contenido="<table id=\"inventarios\"></table> <br> <div id=\"inventarios_pager\"></div><br>";
           
            divC.style.display = "";
            divC.innerHTML=""+contenido+"";
            
        }
        else if(grid_container.style.display == "none" || grid_container.style.display == ""){
            divC.style.display = "block";
        }  
         
         
        //CONTENIDO DIV 
         
         
        //RELLENO PARA DIV
        
        
        
	$("#inventarios").jqGrid({
                
                editurl: 'delInvent/',  
		url:'busquedaInventario/'+inventario,//funcion en el controller para datos json
		mtype : "post",//Ajax request type. It also could be GET
		datatype: "json",            //supported formats XML, JSON or Arrray
		colNames:['No. Inventario','Usuario', 'Plantel','Fecha de Envio',''],       //Grid column headings
		
                 colModel:[
			{name:'num_inventario',index:'num_inventario', width:100, align:"center", key:true,title:false,sortable:false, hidden:false},
			{name:'nombre',index:'nombre', width:245, align:"left", sortable:false, title:false},
			{name:'num_plantel',index:'num_plantel', width:80, align:"center", sortable:false, title:false},
                        {name:'fecha_envio',index:'fecha_envio', width:150, align:"center", sortable:false, title:false},
			//{name:'fecha_envio',index:'fecha_envio', width:90, align:"center", title:false, formatter:"date", formatoptions:{
			//	srcformat:'Y-m-d',
			//	newformat:"d-M,Y"
			//	}
			//},
                        {name:'ver',index:'ver', width:40, align:"center",sortable:false,title:false},		
		],
		rowNum:15,
		height: 400,
		rowList:[5,15,30],
		pager: '#inventarios_pager',
		sortname: 'inventario.num_inventario',
		viewrecords: true,
		multiselect:true,
		caption:"Inventario No. :  " + inventario,
		gridComplete: function(){ //alerta sobre existencias
			var ids = $("#inventarios").jqGrid('getDataIDs'); 
			for(var i=0;i < ids.length;i++){ 
				var id = ids[i];
				row = $("#inventarios").getRowData(id);
				//if(row.estado<=2){
					boton='<input type="button" value="Ver" onclick="cargar(\''+act+row.num_inventario+'\')">';
					$('#inventarios').setCell(id, 'ver', boton, {'background-color': '#FFF'});
				//}
			} 
		}
	}).navGrid('#inventarios_pager',
			{
				view:false,
				edit:false,
				add:false,
				del:true,
				search:false,
				del:true, deltext:"Eliminar &nbsp;", 
				deltitle:"Elimina la(las) consulta(s) seleccionada(s)...",
				
                                refresh:true, 
				refreshtext:"Actualizar &nbsp;", 
				refreshtitle:"Actualiza la informacion desde la base de datos...",
				refreshstate:"current",
				searchtext:"Buscar &nbsp;", 
				searchtitle:"Dialogo de busqueda avanzada"
			},
				{closeAfterEdit:true}, // use default settings for edit
				{closeAfterAdd:true}, // use default settings for add
				{},  // delete instead that del:false we need this
				{multipleSearch : false}, // enable the advanced searching
				{closeOnEscape:true} 
	);//jqgrid consultas

        




//nombre(municipio);


}); //region
     
     
	
});//jquery

//funcion para botones dentro del grid (editar,ver)
function cargar(url){
	//alert('Cargando: ' + url);
	if (url.length > 5) document.location.href = url;
}

     


function visible_grid() {
       var inventario= $("#buscar").val();
        //url de los botones ver y editar
        var act='ver/'; //cambiar por funcion que se encarga de mostrar datos de plantel
        
       
    
       
       //CONTENIDO DEL DIV ... codigo para borrar y rellenar el div 
        var divC = document.getElementById("grid_container");
        
        if(divC.style.display == "block" ){
            //si el div tiene contenido lo borra
            while(divC.hasChildNodes()){
                divC.removeChild(divC.lastChild);
            }
            
            //despues de borrar el contenido lo rellena poniendo la tabla etc.
           
            var contenido="<table id=\"inventarios\"></table> <br> <div id=\"inventarios_pager\"></div><br>";
           
            divC.style.display = "";
            divC.innerHTML=""+contenido+"";
            
        }
        else if(grid_container.style.display == "none" || grid_container.style.display == ""){
            divC.style.display = "block";
        }  
         
         
        //CONTENIDO DIV 
         
         
        //RELLENO PARA DIV
        
        
        
	$("#inventarios").jqGrid({
                
                editurl: 'delInvent/',  
		url:'busquedaInventario/'+inventario,//funcion en el controller para datos json
		mtype : "post",//Ajax request type. It also could be GET
		datatype: "json",            //supported formats XML, JSON or Arrray
		colNames:['No. Plantel','Nombre Plantel', 'Localidad','Municipio', 'Distrito','Region','IdPlantel','estatus','',''],       //Grid column headings
		
                 colModel:[
			{name:'num_inventario',index:'num_inventario', width:100, align:"center", key:true,title:false,sortable:false, hidden:false},
			{name:'nombre',index:'nombre', width:245, align:"left", sortable:false, title:false},
			{name:'num_plantel',index:'num_plantel', width:80, align:"center", sortable:false, title:false},
                        {name:'fecha_envio',index:'fecha_envio', width:150, align:"center", sortable:false, title:false},
			//{name:'fecha_envio',index:'fecha_envio', width:90, align:"center", title:false, formatter:"date", formatoptions:{
			//	srcformat:'Y-m-d',
			//	newformat:"d-M,Y"
			//	}
			//},
                        {name:'ver',index:'ver', width:40, align:"center",sortable:false,title:false},		
		],
		rowNum:15,
		height: 400,
		rowList:[5,15,30],
		pager: '#inventarios_pager',
		sortname: 'inventario.num_inventario',
		viewrecords: true,
		multiselect:true,
		caption:"Inventario No. :  " + inventario,
		gridComplete: function(){ //alerta sobre existencias
			var ids = $("#inventarios").jqGrid('getDataIDs'); 
			for(var i=0;i < ids.length;i++){ 
				var id = ids[i];
				row = $("#inventarios").getRowData(id);
				//if(row.estado<=2){
					boton='<input type="button" value="Ver" onclick="cargar(\''+act+row.num_inventario+'\')">';
					$('#inventarios').setCell(id, 'ver', boton, {'background-color': '#FFF'});
				//}
			} 
		}
	}).navGrid('#inventarios_pager',
			{
				view:false,
				edit:false,
				add:false,
				del:true,
				search:false,
				del:true, deltext:"Eliminar &nbsp;", 
				deltitle:"Elimina la(las) consulta(s) seleccionada(s)...",
				
                                refresh:true, 
				refreshtext:"Actualizar &nbsp;", 
				refreshtitle:"Actualiza la informacion desde la base de datos...",
				refreshstate:"current",
				searchtext:"Buscar &nbsp;", 
				searchtitle:"Dialogo de busqueda avanzada"
			},
				{closeAfterEdit:true}, // use default settings for edit
				{closeAfterAdd:true}, // use default settings for add
				{},  // delete instead that del:false we need this
				{multipleSearch : false}, // enable the advanced searching
				{closeOnEscape:true} 
	);//jqgrid consultas

        




//nombre(municipio);


}