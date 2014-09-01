
<script type="text/javascript">

function crear_input_text(name,id,value,clas)
{
    obj_tem= document.createElement("input");
    obj_tem.type= "text";
    obj_tem.name = name;
    obj_tem.id = id;
    obj_tem.placeholder = value;
    obj_tem.setAttribute("class",clas);
        //obj_tem.maxLength = max_long;

    return obj_tem;
}

function nuevo_elemento(padre,hijo)
{   
    padre.appendChild(hijo);

}

function generar(){
	seleccion_banco = $('#banco');
	opcion=seleccion_banco.val();
	if(opcion=="otro")
	{
	    valor=crear_input_text("otro","otro-banco","Escriba el nombre del Banco","form-control otro-banco");
	    padre= document.getElementsByClassName("seleccion")[0];
	    nuevo_elemento(padre,valor);
	}
	else
	{
	    valor = $('#otro-banco');
	    valor.remove();
	}
}


</script>

<section id="form_proveedores" class="container theme-showcase">
	
	<h2>Registro de proveedores</h2>

	<div id="formulario_proveedores" class="jumbotron">
		<form class="form-signin" action="<?=base_url()?>c_auxiliar/nuevo_proveedor" method="POST">
			
			<label>
				Nombre Empresa:
				<input type="text" id="nombre_empresa" name="nombre_empresa" placeholder="Nombre del Proveedor" required="true" class="form-control">
			</label>
			
			<label>
				RFC:
				<input type="text" id="rfc_empresa" name="rfc_empresa" placeholder="RFC del Proveedor" required="true" pattern="[a-zA-Z]{4}[0-9]{6}[a-zA-Z0-9]{3}" class="form-control">
			</label>
		<div class="seleccion">
			<label>
				Banco del Proveedor:
				<select id="banco" name="banco" onChange='generar()' class="form-control" required="true">
				  <option value=""></option>
			      <option value="Bancomer">Bancomer</option>
			      <option value="Santander Serfin">Santander Serfin</option>
			      <option value="Banamex">Banamex</option>
			      <option value="HSBC">HSBC</option>
			      <option value="Scotiabank Inverlat">Scotiabank Inverlat</option>
			      <option value="otro">Otro...</option>
			    </select>
			
			</label>
		</div>
			<label>
				Sucursal de Banco de la Empresa:
				<input type="text" id="sucursal" name="sucursal" placeholder="Sucursal" required="true" class="form-control"> 
			</label>

			<label>
				No. de Cuenta: 
				<input type="text" id="n_cuenta" name="n_cuenta" placeholder="Número de Cuenta" required="true" class="form-control">
			</label>

			<label>
				CLABE: 
				<input type="text" id="clabe" name="clabe" placeholder="CLABE" required="true" pattern="[0-9]{18}" class="form-control">
			</label>

			<label>
				Referencia:
				<input type="text" id="referencia" name="referencia" placeholder="Referencia" class="form-control">
			</label>

			<label>
				Correo Electrónico:
				<input type="email" id="email" name="correo" placeholder="Correo Electrónico" required="true" class="form-control">
			</label>

			<label>
				Teléfono:
				<input type="tel" id="telefono" name="telefono" placeholder="Teléfono" required="true" class="form-control">
			</label>

			<label>
				Fax:
				<input type="tel" id="fax" name="fax" placeholder="Fax" class="form-control">
			</label>

			<label>
				Celular:
				<input type="tel" id="celular" name="celular" placeholder="Celular" class="form-control">
			</label>

			<label>
				Encargado/a:
				<input type="text" id="atiende" name="atiende" placeholder="Nombre de la Persona que Atiende" class="form-control">
			</label>

				
			<input type="submit" value="Guardar" class="btn btn-primary btn-enviar">

		</form>	
	

	</div>
	

</section>
