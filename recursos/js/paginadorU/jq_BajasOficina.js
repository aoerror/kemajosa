$(document).ready(function (){
      //copia todo el documen ready
        var act='ver/'; 
        var act2='act/'; 
        
        var tipo_usuario='Oficina';
        
        //RELLENO PARA DIV
$("#usuarios").jqGrid({
                
        url:'getBajas/'+tipo_usuario,//funcion en el controller para datos json
	mtype : "post",//Ajax request type. It also could be GET
	datatype: "json",            //supported formats XML, JSON or Arrray
	colNames:['Nombre Completo','Usuario','Correo Electronico','num_usuario','status','tipo_usuario','','Dar de Alta'],       //Grid column headings
	colModel:[
		{name:'nombre',index:'nombre', width:130, align:"left", sortable:false, title:false},
                {name:'nom_usuario',index:'nom_usuario', width:100, align:"left", sortable:false, title:false},
                {name:'correo_e',index:'correo_e', width:100, align:"left", sortable:false, title:false},
                {name:'num_usuario',index:'num_usuario', align:"left", hidden:true, sortable:false, title:false},
                {name:'status',index:'status', align:"left", hidden:true, sortable:false, title:false},
                {name:'tipo_usuario',index:'tipo_usuario', align:"left", hidden:true, sortable:false, title:false},
                {name:'ver',index:'ver', width:30, align:"center",sortable:false,title:false},	
                {name:'radio',index:'radio', width:50, align:"center",sortable:false,title:true},		
		],
	rowNum:15,
	height: 400,
        width:680,
	rowList:[5,15],
	pager: '#usuarios_pager',
	sortname: 'usuario.num_usuario',
	viewrecords: true,
	//multiselect:true,
	caption:"USUARIOS DE OFICINA INACTIVOS  ",
	gridComplete: function(){ //alerta sobre existencias
		var ids = $("#usuarios").jqGrid('getDataIDs'); 
		for(var i=0;i < ids.length;i++){ 
			var id = ids[i];
			row = $("#usuarios").getRowData(id);
				boton='<input type="button" value="Ver" onclick="cargar(\''+act+row.status+"/"+row.tipo_usuario+"/"+row.num_usuario+'\')">';
				$('#usuarios').setCell(id, 'ver', boton, {'background-color': '#FFF'});
                                boton2='<input type="radio" value="1" onclick="cargar(\''+act2+row.status+"/"+row.num_usuario+'\')">';
				$('#usuarios').setCell(id, 'radio', boton2, {'background-color': '#FFF'});
} 
		}
   })
   
});//jquery

//funcion para botones dentro del grid (editar,ver)
function cargar(url){
	//alert('Cargando: ' + url);
	if (url.length > 5) document.location.href = url;
}