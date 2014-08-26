<section id="proveedores">
	
	<h2>Registro de proveedores</h2>
		

	<div id="formulario_proveedores">
		<form action="<?=base_url()?>index.php/c_auxiliar/grabar_proveedores">
			
			<label>
				Nombre Empresa:
				<input type="text" id="nombre_empresa" name="nombre_empresa" placeholder="Nombre de la Empresa" required="true" >
			</label>
			
			<label>
				RFC:
				<input type="text" id="rfc_empresa" name="rfc_empresa" placeholder="RFC de la Empresa" required="true" pattern="[a-zA-Z]{4}[0-9]{6}[a-zA-Z0-9]{3}">
			</label>

			<label>
				Banco de la Empresa:
				<input type="text" id="banco" name="banco" placeholder="Banco" required="true">
			</label>

			<label>
				Sucursal de Banco de la Empresa:
				<input type="text" id="sucursal" name="sucursal" placeholder="Sucursal" required="true"> 
			</label>

			<label>
				No. de Cuenta: 
				<input type="number" id="n_cuenta" name="n_cuenta" placeholder="Número de Cuenta" required="true">
			</label>

			<label>
				CLABE: 
				<input type="numbre" id="clabe" name="clabe" placeholder="CLABE" required="true" pattern="[0-9]{18}">
			</label>

			<label>
				Referencia:
				<input type="text" id="referencia" name="referencia" placeholder="Referencia">
			</label>

			<label>
				Correo Electrónico:
				<input type="email" id="email" name="email" placeholder="Correo Electrónico">
			</label>

			<label>
				Teléfono:
				<input type="tel" id="telefono" name="telefono" placeholder="Teléfono">
			</label>

			<label>
				Fax:
				<input type="tel" id="fax" name="telefono" placeholder="Fax">
			</label>

			<label>
				Celular:
				<input type="tel" id="celular" name="celular" placeholder="Celular">
			</label>

			<label>
				Encargada:
				<input type="text" id="encargada" name="encargada" placeholder="Nombre de la Persona que Atiende">
			</label>

				
			<input type="submit" value="Guardar">

		</form>	
	

	</div>
	









</section>