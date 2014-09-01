$(document).ready(function (){
        var act='ver/'; 
                
        //RELLENO PARA DIV
$("#usuarios").jqGrid({
        editurl: 'editUsuario/',  
	url:'getUsuarios',//funcion en el controller para datos json
	mtype : "post",//Ajax request type. It also could be GET
	datatype: "json",            //supported formats XML, JSON or Arrray
	colNames:['Nombre Completo','Usuario','Correo Electronico','Plantel','num_usuario','status','tipo_usuario',''],//Grid column headings
		
        colModel:[
		{name:'nombre',index:'nombre', width:160, align:"left", sortable:false, title:false},
                {name:'nom_usuario',index:'nom_usuario', width:110, align:"left", sortable:false, title:false},
		{name:'correo_e',index:'correo_e', width:110, align:"left", sortable:false, title:false},
                {name:'num_plantel',index:'num_plantel', width:40, align:"center", sortable:false, title:false},
                {name:'num_usuario',index:'num_usuario', align:"left", hidden:true, sortable:false, title:false},
                {name:'status',index:'status', align:"left", hidden:true, sortable:false, title:false},
                {name:'tipo_usuario',index:'tipo_usuario', align:"left", hidden:true, sortable:false, title:false},
                {name:'ver',index:'ver', width:35, align:"left",sortable:false,title:false}
		],
	rowNum:15,
	height: 400,
        width:680,
	rowList:[5,15],
	pager: '#usuarios_pager',
	sortname: 'usuario.num_usuario',
	viewrecords: true,
	multiselect:true,
	caption:"USUARIOS ACTIVOS",
	gridComplete: function(){ //alerta sobre existencias
		var ids = $("#usuarios").jqGrid('getDataIDs'); 
		for(var i=0;i < ids.length;i++){ 
			var id = ids[i];
			row = $("#usuarios").getRowData(id);
				boton='<input type="button" value="Ver" onclick="cargar(\''+act+row.status+"/"+row.tipo_usuario+"/"+row.num_usuario+'\')">';
				$('#usuarios').setCell(id, 'ver', boton, {'background-color': '#FFF'});
			} 
		}
   }).navGrid('#usuarios_pager',
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
