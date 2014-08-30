$(document).ready(function (){
      
        var act='periodo/'; //amor pasame estos 5 archivos XD... no se qe paso uU... me olvide de ese 1 pipipipi, necesito pasamelos ahorita lo checo amor , mas rapido desde aqui XD esqe esta lento el inter :P
        //amor???
        
        //RELLENO PARA DIV
$("#inventarios").jqGrid({
       
	url:'getPeriodo',//funcion en el controller para datos json
	mtype : "post",//Ajax request type. It also could be GET
	datatype: "json",            //supported formats XML, JSON or Arrray
	colNames:['id_periodo','Periodo',''],       //Grid column headings
		
        colModel:[
		{name:'id_periodo',index:'id_periodo', align:"left", hidden:true, sortable:false, title:false},
		{name:'periodo',index:'periodo', width:100, align:"left", sortable:false, title:false},
                {name:'ver',index:'ver', width:40, align:"center",sortable:false,title:false},		
		],
	rowNum:15,
	height: 300,
        width:500,
	rowList:[5,15],
	pager: '#inventarios_pager',
	sortname: 'periodo.id_periodo',
	viewrecords: true,
	multiselect:true,
	//caption:"PLANTELES ACTIVOS  "/* + text */,
	gridComplete: function(){ //alerta sobre existencias
		var ids = $("#inventarios").jqGrid('getDataIDs'); 
		for(var i=0;i < ids.length;i++){ 
			var id = ids[i];
			row = $("#inventarios").getRowData(id);
				boton='<input type="button" value="Inventarios" onclick="cargar(\''+act+row.id_periodo+'\')">';
				$('#inventarios').setCell(id, 'ver', boton, {'background-color': '#FFF'});
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
