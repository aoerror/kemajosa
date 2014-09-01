$(document).ready(function (){
      
        var act='ver/'; 
        
        //RELLENO PARA DIV
$("#planteles").jqGrid({
        editurl: 'editPlantel/',  
	url:'getPlanteles',//funcion en el controller para datos json
	mtype : "post",//Ajax request type. It also could be GET
	datatype: "json",            //supported formats XML, JSON or Arrray
	colNames:['N° Plantel','Nombre Plantel','id_plantel','estatus',''],       //Grid column headings
		
        colModel:[
		{name:'num_plantel',index:'num_plantel', width:50, align:"center", sortable:false, title:false},
		{name:'nom_plantel',index:'nom_plantel', width:180, align:"left", sortable:false, title:false},
                {name:'id_plantel',index:'id_plantel', align:"left", hidden:true, sortable:false, title:false},
                {name:'estatus',index:'estatus', align:"left", hidden:true, sortable:false, title:false},
                {name:'ver',index:'ver', width:40, align:"center",sortable:false,title:false},		
		],
	rowNum:15,
	height: 400,
        width:630,
	rowList:[5,15],
	pager: '#planteles_pager',
	sortname: 'plantel.id_plantel',
	viewrecords: true,
	multiselect:true,
	caption:"PLANTELES ACTIVOS  "/* + text */,
	gridComplete: function(){ //alerta sobre existencias
		var ids = $("#planteles").jqGrid('getDataIDs'); 
		for(var i=0;i < ids.length;i++){ 
			var id = ids[i];
			row = $("#planteles").getRowData(id);
				boton='<input type="button" value="Ver" onclick="cargar(\''+act+row.estatus+"/"+row.id_plantel+'\')">';
				$('#planteles').setCell(id, 'ver', boton, {'background-color': '#FFF'});
			} 
		}
   }).navGrid('#planteles_pager',
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
});//jquery

//funcion para botones dentro del grid (editar,ver)
function cargar(url){
	//alert('Cargando: ' + url);
	if (url.length > 5) document.location.href = url;
}
