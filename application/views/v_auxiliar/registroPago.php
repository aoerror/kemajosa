<script type="text/javascript" src=" <?= base_url() ?>recursos/js/jquery-1.7.2.js"> </script>
    
<script type="text/javascript" src=" <?= base_url() ?>recursos/js/auxiliar/valida_archivo.js"></script> 


<section id="form_archivo" class="container theme-showcase">
	
	<h2>Registro de Transferencia </h2>

	<div id="formulario_archivo" class="jumbotron">

		<?=$mensaje['error'];?>

		<?php

		$attributes = array('id' => 'formu_archivo');

		echo form_open_multipart('c_pagos/do_upload', $attributes);?>

		<!-- <form enctype="multipart/form-data" class="form-signin" action="<?=base_url()?>c_pagos/registroPago" method="POST"> -->
			
			<label>
				Nombre Archivo:
				<input type="text" id="nombre" name="nombre" placeholder="Nombre del Archivo" required="true" class="form-control">
			</label> 
			
			<label>
				Seleccionar Archivo
				<input name="userfile" id="userfile" type="file" size="20" required="true"/>
			</label>
			<label>
				Seleccione Fecha de Transferencia:
				<input type="date" id="fecha" name="fecha" placeholder="Fecha" required="true" class="form-control"> 
			</label>
			

			<label>
				Correo Electrónico:
				<input type="email" id="correo" name="correo" placeholder="Correo Electrónico" required="true" class="form-control">
			</label>

			<label>
				Descripción:
				<input type="text" id="descripcion" name="descripcion" placeholder="Escriba una breve descripcion" class="form-control">
			</label>
 
				
			<input type="submit" value="Guardar" class="btn btn-primary btn-enviar">

		</form>	
	

	</div>
	

</section>