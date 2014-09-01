$(document).ready(function (){
        //url de los botones ver y editar
        var act='ver_proveedor/'; //cambiar por funcion que se encarga de mostrar datos de plantel
        
       
       //CONTENIDO DEL DIV ... codigo para borrar y rellenar el div 
        var divC = document.getElementById("grid_container");
        
        if(divC.style.display == "block" ){
            //si el div tiene contenido lo borra
            while(divC.hasChildNodes()){
                divC.removeChild(divC.lastChild);
            }
            
            //despues de borrar el contenido lo rellena poniendo la tabla etc.
           
            var contenido="<table id=\"proveedores\"></table> <br> <div id=\"proveedores_pager\"></div><br>";
           
            divC.style.display = "";
            divC.innerHTML=""+contenido+"";
            
        }
        else if(grid_container.style.display == "none" || grid_container.style.display == ""){
            divC.style.display = "block";
        }  
         
	$("#proveedores").jqGrid({
                
        editurl: 'ver_proveedor/',  
		url:'ver_proveedores/',//funcion en el controller para datos json
		mtype : "post",//Ajax request type. It also could be GET
		datatype: "json",            //supported formats XML, JSON or Arrray
		colNames:['No. Proveedor','Proveedor', 'RFC','Banco','Sucursal',''],       //Grid column headings
		    colModel:[
			{name:'id_proveedor',index:'id_proveedor', width:70, align:"center", key:true,title:false,sortable:false, hidden:false},
			{name:'empresa',index:'empresa', width:150, align:"left", sortable:false, title:false},
			{name:'rfc',index:'rfc', width:50, align:"center", sortable:false, title:false},
            {name:'banco',index:'banco', width:80, align:"center", sortable:false, title:false},
			{name:'sucursal',index:'sucursal', width:100, align:"center",sortable:false,title:false},
			{name:'ver',index:'ver', width:100, align:"center",sortable:false,title:false},	
			
		],
		rowNum:10,
		height: 400,
                width: 1000,
		rowList:[5,10,20],
		pager: '#proveedores_pager',
		sortname: 'proveedores.id_proveedor',
		viewrecords: true,
		multiselect:true,
		caption:"Lista de Proveedores" ,
		gridComplete: function(){ //alerta sobre existencias
			var ids = $("#proveedores").jqGrid('getDataIDs'); 
			for(var i=0;i < ids.length;i++){ 
				var id = ids[i];
				row = $("#proveedores").getRowData(id);
				//if(row.estado<=2){
					boton='<input type="button" class="btn_ver" value="Ver Proveedor" onclick="cargar(\''+act+row.id_proveedor+'/elimina'+'\')">';
					$('#proveedores').setCell(id, 'ver', boton, {'background-color': '#FFF'});
				//}
			} 
		}
	}).navGrid('#proveedores_pager',
			{
				view:false,
				edit:false,
				add:false,
				del:false,
				search:false,
				del:false, deltext:"Eliminar &nbsp;", 
				deltitle:"Elimina la(las) consulta(s) seleccionada(s)..."
			},
				{closeAfterEdit:true}, // use default settings for edit
				{closeAfterAdd:true}, // use default settings for add
				{},  // delete instead that del:false we need this
				{multipleSearch : false}, // enable the advanced searching
				{closeOnEscape:true} 
	);//jqgrid consultas

     
	
});//jquery

//funcion para botones dentro del grid (editar,ver)
function cargar(url){
	
	if (url.length > 5) 
            //abrir en otra pestaña el enlace
            window.open(url,'_blank');
            
            //document.location.href = url;
}

     