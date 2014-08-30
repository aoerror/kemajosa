$(document).ready(function (){
      var act='ver/'; 
         
        //RELLENO PARA DIV
	$("#inventarios").jqGrid({        
		url:'getInventariosOfi',//funcion en el controller para datos json
		mtype : "post",//Ajax request type. It also could be GET
		datatype: "json",            //supported formats XML, JSON or Arrray
		colNames:['Inventario','Usuario', 'Departamento','Fecha de Envio',''],       //Grid column headings
                colModel:[
			{name:'num_inventario',index:'num_inventario', width:60, align:"center", key:true,title:false,sortable:false, hidden:false},
			{name:'nombre',index:'nombre', width:150, align:"left", sortable:false, title:false},
			{name:'nombre_ofi',index:'nombre_ofi', width:250, align:"center", sortable:false, title:false},
                        {name:'fecha_envio',index:'fecha_envio', width:90, align:"center", sortable:false, title:false},
                        {name:'ver',index:'ver', width:45, align:"left",sortable:false,title:false},		
		],
		rowNum:15,
		height: 400,
                width:700,
		rowList:[5,15,30],
		pager: '#inventarios_pager',
		sortname: 'inventario.num_inventario',
		viewrecords: true,
		multiselect:true,
		gridComplete: function(){ //alerta sobre existencias
			var ids = $("#inventarios").jqGrid('getDataIDs'); 
			for(var i=0;i < ids.length;i++){ 
				var id = ids[i];
				row = $("#inventarios").getRowData(id);
					boton='<input type="button" value="Ver" onclick="cargar(\''+act+row.num_inventario+'\')">';
					$('#inventarios').setCell(id, 'ver', boton, {'background-color': '#FFF'});
			} 
		}
	})
});//jquery

//funcion para botones dentro del grid (editar,ver)
function cargar(url){
	//alert('Cargando: ' + url);
	if (url.length > 5) document.location.href = url;
}
