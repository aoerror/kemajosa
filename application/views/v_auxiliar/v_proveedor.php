<link rel="stylesheet" href="//code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.css">
  <script src="//code.jquery.com/jquery-1.10.2.js"></script>
  <script src="//code.jquery.com/ui/1.11.1/jquery-ui.js"></script>

<section id="v_proveedor">
	
	<h2>
		Consulta de Proveedor
	</h2>

	<div class="jumbotron muestra_datos">
		
		<label>
				Nombre Empresa:
				<input type="text" id="nombre_empresa" name="nombre_empresa" value="<?=$contenido['nombre']?>" readonly class="form-control">
			</label>
			
			<label>
				RFC:
				<input type="text" id="rfc_empresa" name="rfc_empresa" value="<?=$contenido['rfc']?>" readonly pattern="[a-zA-Z]{4}[0-9]{6}[a-zA-Z0-9]{3}" class="form-control">
			</label>
			<label>
				Banco del Proveedor:
				<input type="text" id="banco" name="banco" value="<?=$contenido['banco']?>" readonly class="form-control">
			
			</label>
		
			<label>
				Sucursal de Banco de la Empresa:
				<input type="text" id="sucursal" name="sucursal" value="<?=$contenido['sucursal']?>" readonly class="form-control"> 
			</label>

			<label>
				No. de Cuenta: 
				<input type="text" id="n_cuenta" name="n_cuenta" value="<?=$contenido['cuenta']?>" readonly class="form-control">
			</label>

			<label>
				CLABE: 
				<input type="text" id="clabe" name="clabe" value="<?=$contenido['clabe']?>" readonly pattern="[0-9]{18}" class="form-control">
			</label>

			<label>
				Referencia:
				<input type="text" id="referencia" name="referencia" value="<?=$contenido['referencia']?>" readonly class="form-control">
			</label>

			<label>
				Correo Electrónico:
				<input type="email" id="email" name="correo" value="<?=$contenido['correo']?>" readonly class="form-control">
			</label>

			<label>
				Teléfono:
				<input type="tel" id="telefono" name="telefono" value="<?=$contenido['telefono']?>" readonly class="form-control">
			</label>

			<label>
				Fax:
				<input type="tel" id="fax" name="fax" value="<?=$contenido['fax']?>" readonly class="form-control">
			</label>

			<label>
				Celular:
				<input type="tel" id="celular" name="celular" value="<?=$contenido['celular']?>" readonly class="form-control">
			</label>

			<label>
				Encargado/a:
				<input type="text" id="encargada" name="encargada" value="<?=$contenido['encargado']?>" readonly class="form-control">
			</label>
		
		<div id="enlaces">

		<?php
			if($mensaje == "elimina"){
				?>
			<a href="<?=base_url()?>c_auxiliar/eliminaProveedores/<?=$contenido['id_proveedor']?>" id="eliminar_enlace">Eliminar Proveedor</a>
		<?php
			}else{
		?>
			<a href="<?=base_url()?>c_pdfs/imprimirProveedor/<?=$contenido['id_proveedor']?>">Imprimir Datos Proveedor</a>
			<a href="<?=base_url()?>c_auxiliar/modificar_proveedor/<?=$contenido['id_proveedor']?>">Modificar Datos Proveedor</a>
		<?php
			}
		?>

		</div>

	</div>

	<div id="dialog-confirm" title="Eliminar Proveedor" style="display:none;">
	  <p><span class="ui-icon ui-icon-alert" style="float:left; margin:0 7px 20px 0;"></span>Los Datos de este proveedor se eliminaran, Esta seguro?</p>
	</div>
	
</section>

 

<script type="text/javascript">
	
	   	$('#eliminar_enlace').click(function(e){
	   		//alert('Confirma Eliminar Proveedor');

	   		e.preventDefault();
	   		$("#dialog-confirm").dialog({
	   			resizable: false,
	   			height:170,
	   			modal: true,
	   			buttons: {
	   				"Eliminar": function() {
	   					var href = $('#eliminar_enlace').attr('href');
	   					$(this ).dialog( "close" );
	   					window.location.href=href;
	   				},
	   				Cancelar: function() {
	   					$(this ).dialog( "close" );
	   				}
	   			}
	   		});
	   	});

</script>
