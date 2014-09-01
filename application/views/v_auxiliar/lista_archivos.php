<style>

	#archivos_section
	{
		/*margin-left: 20%;*/
		text-align: center;

	}

	#archivos {
		border: 1px solid #CCC;
		text-align: center;	
	}

	#archivos tr{
		border: 1px solid #CCC;
		width: 40%;
	}

	

	#archivos .descargar_archivo
	{
		border: 1px solid #CCC;
		margin: 2em;
	}

	#archivos , #archivos .ver_archivo a
	{
		color: #FFF;
		background: #428BCA;
		background-image: linear-gradient(to bottom,#428bca 0,#2d6ca2 100%);
		border-color: #2b669a;
		box-shadow: 0 1px 1px rgba(0,0,0,.075);
		display: inline-block;
		font-style: italic;
		margin: 0.5em 1em;
		padding: 0.5em;
		text-decoration: none;
		text-shadow: 0 -1px 0 rgba(0,0,0,.2);

		
	}

	#archivos .subir_archivo a
	{
		color: #FFF;
		background: #428BCA;
		background-image: linear-gradient(to bottom,#428bca 0,#2d6ca2 100%);
		border-color: #CCC;
		box-shadow: 0 1px 1px rgba(0,0,0,.075);
		display: block;
		font-style: italic;
		margin: 1em 2em;
		padding: 1em;
		text-decoration: none;
		text-shadow: 0 -1px 0 rgba(0,0,0,.2);
	}

</style>

<section id="archivos_section">

	<h2>Lista de archivos para disponibles para descargar</h2>
	

	<table id="archivos">
	<?php
	if($files){
	?>

	<tr>
		<td>Nombre Archivo</td>
		<td class="descargar_archivo" >Descargar</td>
		<td class="descargar_archivo">Ver</td>
	</tr>

	<?php

	  foreach($files as $file){
		  ?>
		    <tr>
		    	<td>
		    		<?=$file?>
		    	</td>
		    	<td class="ver_archivo">
		    		<?=anchor('c_pagos/descargarArchivos/'.$file, 'Descargar');?> 
		    	</td>

		    	<td class="ver_archivo">
		    		<?=anchor('c_pagos/verArchivo/'.$file, 'Ver')?> 
		    	</td>
		      
		     </tr>
		 <?php         
	  }
	  ?>
	  
	<?php
	
		}else{

		// echo heading('No hay archivos para descargar', 3).anchor('files', 'Subir un Archivo');

		} 

	?>
	  		<tr>
	  			<td class="subir_archivo">
	  			<?=anchor('c_pagos', 'Subir otro archivo'); ?> 
	  			</td>
	  		</tr>
	  	
	</table>

</section>