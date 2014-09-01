<section id="form_proveedores" class="container theme-showcase">
	
	<h2>Registro de Transferencia </h2>

	<div id="formulario_proveedores" class="jumbotron">

		<?=form_open_multipart('c_pagos/do_upload');?>

		<!-- <form enctype="multipart/form-data" class="form-signin" action="<?=base_url()?>c_pagos/registroPago" method="POST"> -->
			
			<!-- <label>
				Nombre Archivo:
				<input type="text" id="nombre" name="nombre" placeholder="Nombre del Archivo" required="true" class="form-control">
			</label> -->
			
			<label>
				Seleccionar Archivo
				<input name="userfile" type="file" size="20" />
			</label>
			<!-- <label>
				Seleccione Fecha de Transferencia:
				<input type="date" id="fecha" name="fecha" placeholder="Fecha" required="true" class="form-control"> 
			</label>


			<label>
				Correo Electrónico:
				<input type="email" id="email" name="correo" placeholder="Correo Electrónico" required="true" class="form-control">
			</label>

			<label>
				Descripción:
				<input type="text" id="descripcion" name="descripcion" placeholder="Escriba una breve descripcion" class="form-control">
			</label> -->

				
			<input type="submit" value="Guardar" class="btn btn-primary btn-enviar">

		</form>	
	

	</div>
	

</section>