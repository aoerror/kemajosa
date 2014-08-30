$(document).ready(function (){
    var act='ver/'; 
         
        //RELLENO PARA DIV    
	$("#inventarios").jqGrid({
                 
		url:'getInventarios',//funcion en el controller para datos json
		mtype : "post",//Ajax request type. It also could be GET
		datatype: "json",            //supported formats XML, JSON or Arrray
		colNames:['Inventario','Usuario', 'Plantel','Fecha de Envio',''],       //Grid column headings
		
                colModel:[
			{name:'num_inventario',index:'num_inventario', width:60, align:"center", key:true,title:false,sortable:false, hidden:false},
			{name:'nombre',index:'nombre', width:200, align:"left", sortable:false, title:false},
			{name:'num_plantel',index:'num_plantel', width:50, align:"center", sortable:false, title:false},
                        {name:'fecha_envio',index:'fecha_envio', width:110, align:"center", sortable:false, title:false},
                        {name:'ver',index:'ver', width:40, align:"center",sortable:false,title:false},		
		],
		rowNum:15,
		height: 400,
                width:650,
		rowList:[5,15,30],
		pager: '#inventarios_pager',
		sortname: 'inventario.num_inventario',
		viewrecords: true,
		//multiselect:true,
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

function cargar(url){
	if (url.length > 5) document.location.href = url;
}
