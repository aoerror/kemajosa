$(document).ready(function (){
      //var text= $("#buscar").val();
        var act='ver/'; 
        var act2='act/'; 
        
        //RELLENO PARA DIV
$("#planteles").jqGrid({
                
        //editurl: 'editPlantel/',  
	url:'getBajas',//funcion en el controller para datos json
	mtype : "post",//Ajax request type. It also could be GET
	datatype: "json",            //supported formats XML, JSON or Arrray
	colNames:['N° Plantel','Nombre Plantel','id_plantel','estatus','','Dar de Alta'],       //Grid column headings
		
        colModel:[
		{name:'num_plantel',index:'num_plantel', width:50, align:"center", sortable:false, title:false},
		{name:'nom_plantel',index:'nom_plantel', width:130, align:"left", sortable:false, title:false},
                {name:'id_plantel',index:'id_plantel', align:"left", hidden:true, sortable:false, title:false},
                {name:'estatus',index:'estatus', align:"left", hidden:true, sortable:false, title:false},
                {name:'ver',index:'ver', width:40, align:"center",sortable:false,title:false},		
                {name:'radio',index:'radio', width:40, align:"center",sortable:false,title:true},		
		],
	rowNum:15,
	height: 400,
        width:580,
	rowList:[5,15],
	pager: '#planteles_pager',
	sortname: 'plantel.id_plantel',
	viewrecords: true,
	multiselect:true,
	caption:"PLANTELES INACTIVOS  "/* + text */,
	gridComplete: function(){ //alerta sobre existencias
		var ids = $("#planteles").jqGrid('getDataIDs'); 
		for(var i=0;i < ids.length;i++){ 
			var id = ids[i];
			row = $("#planteles").getRowData(id);
				boton='<input type="button" value="Ver" onclick="cargar(\''+act+row.estatus+"/"+row.id_plantel+'\')">';
				$('#planteles').setCell(id, 'ver', boton, {'background-color': '#FFF'});
                                boton2='<input type="radio" value="1" onclick="cargar(\''+act2+row.estatus+"/"+row.id_plantel+'\')">';
				$('#planteles').setCell(id, 'radio', boton2, {'background-color': '#FFF'});
			} 
		}
   })
});//jquery

//funcion para botones dentro del grid (editar,ver)
function cargar(url){
	//alert('Cargando: ' + url);
	if (url.length > 5) document.location.href = url;
}
