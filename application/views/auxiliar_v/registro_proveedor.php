<style>
	#fisica{
		display: none;
	}

	#moral{
		display: none;
	}

	#banco_otro{
		display: none;
	}

</style>



<section>
	
	<div class="col-lg-6">
            <div class="well bs-component">
              <form class="form-horizontal" action="<?=base_url()?>auxiliar_c/registrar" method="post">
                <fieldset>
                  <legend>Registro Nuevo Proveedor </legend>
                  <div class="form-group">
                    <label for="nombre" class="col-lg-2 control-label">Nombre Proveedor:</label>
                    <div class="col-lg-10">
                      <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Nombre del Proveedor">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="sucursal" class="col-lg-2 control-label">Sucursal:</label>
                    <div class="col-lg-10">
                      <input type="text" class="form-control" id="sucursal" name="sucursal" placeholder="Sucursal del Proveedor">
                    </div>
                  </div>
				  

				  <div class="form-group">
                    <label class="col-lg-2 control-label">Tipo de Persona:</label>
                    <div class="col-lg-10">
                      <div class="radio">
                        <label>
                          <input type="radio" name="personalidad" id="optionsRadios1" value="Fisica" required="true">
                          Persona Fisica
                        </label>
                      </div>
                      <div class="radio">
                        <label>
                          <input type="radio" name="personalidad" id="optionsRadios2" value="Moral">
                          Persona Moral
                        </label>
                      </div>
                    </div>
                  </div>
				
				<div id="fisica"></div>


                <div id="moral"></div>


				<div class="form-group">
                    <label for="rfc" class="col-lg-2 control-label">RFC:</label>
                    <div class="col-lg-10">
                      <input type="text" class="form-control" id="rfc" name="rfc" placeholder="RFC Proveedor">
                    </div>
                </div>

                <div class="form-group">
                    <label for="select" class="col-lg-2 control-label">Banco:</label>
                    <div class="col-lg-10">
                      <select class="form-control" id="banco" name="banco" required="true">
                        <option value="">Seleccione un Banco</option>
                        <option value="Banamex">Banamex</option>
                        <option value="Bancomer">Bancomer</option>
                        <option value="Santander">Santander</option>
                        <option value="HSBC">HSBC</option>
                        <option value="Scotiabank Inverlat">Scotiabank Inverlat</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div id="banco_otro"></div>

                  <div class="form-group">
                    <label for="sucursal_banco" class="col-lg-2 control-label">Sucursal Banco:</label>
                    <div class="col-lg-10">
                      <input type="text" class="form-control" id="sucursal_banco" name="sucursal_banco" placeholder="Sucursal Banco">
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="n_cuenta" class="col-lg-2 control-label">No. de Cuenta:</label>
                    <div class="col-lg-10">
                      <input type="text" class="form-control" id="n_cuenta" name="n_cuenta" placeholder="No. de Cuenta">
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="clabe" class="col-lg-2 control-label">CLABE Cuenta:</label>
                    <div class="col-lg-10">
                      <input type="text" class="form-control" id="clabe" name="clabe" placeholder="CLABE de Cuenta de Banco">
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="clabe" class="col-lg-2 control-label">Referencia Bancaria:</label>
                    <div class="col-lg-10">
                      <input type="text" class="form-control" id="referencia" name="referencia" placeholder="Referencia Bancaria">
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="email" class="col-lg-2 control-label">Email de Proveedor:</label>
                    <div class="col-lg-10">
                      <input type="text" class="form-control" id="email" name="email" placeholder="Email de Proveedor">
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="telefono" class="col-lg-2 control-label">Teléfono de Proveedor:</label>
                    <div class="col-lg-10">
                      <input type="text" class="form-control" id="telefono" name="telefono" placeholder="Teléfono de Proveedor">
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="fax" class="col-lg-2 control-label">Fax de Proveedor:</label>
                    <div class="col-lg-10">
                      <input type="text" class="form-control" id="fax" name="fax" placeholder="Fax de Proveedor">
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="celular" class="col-lg-2 control-label">Fax de Proveedor:</label>
                    <div class="col-lg-10">
                      <input type="text" class="form-control" id="celular" name="celular" placeholder="Celular de Proveedor">
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="encargado" class="col-lg-2 control-label">Persona que Atiende:</label>
                    <div class="col-lg-10">
                      <input type="text" class="form-control" id="encargado" name="encargado" placeholder="Persona Encargada de Atender">
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="col-lg-10 col-lg-offset-2">
                      <button class="btn btn-default">Cancelar</button>
                      <button type="submit" class="btn btn-primary">Registrar</button>
                    </div>
                  </div>


                </fieldset>
              </form>
            <div id="source-button" class="btn btn-primary btn-xs" style="display: none;">&lt; &gt;</div></div>
          </div>

</section>


<script type="text/javascript">
	var x = $(document);
	x.ready(inicio);

	function inicio () {
		var x;
		x = $("#optionsRadios1");
		x.click(fisica);	
		x = $("#optionsRadios2");
		x.click(moral);
		x = $("#banco");
		x.change(sucursal);
	}

	function fisica () {
		var x = $("#fisica");
		x.css("display","block");

		x.html('<div class="form-group">'+
                    '<label for="ap_paterno" class="col-lg-2 control-label">Apellido Paterno:</label>'+
                    '<div class="col-lg-10">'+
                     ' <input type="text" class="form-control" id="ap_paterno" name="ap_paterno" placeholder="Apellido Paterno">'+
                    '</div></div>'+
                    '<div class="form-group">'+
                    '<label for="ap_materno" class="col-lg-2 control-label">Apellido Materno:</label>'+
                    '<div class="col-lg-10">'+
                      '<input type="text" class="form-control" id="ap_materno" name="ap_materno" placeholder="Apellido Materno">'+
                    '</div> </div>'+
                    '<div class="form-group">'+
                    '<label for="nombre_persona" class="col-lg-2 control-label">Nombre(s):</label>'+
                    '<div class="col-lg-10">'+
                      '<input type="text" class="form-control" id="nombre_persona" name="nombre_persona" placeholder="Nombre(s)">'+
                    '</div></div>');
		x = $("#moral");
		x.css("display","none");
		x.html('');
	}

	function moral () {
		var x = $("#moral");
		x.css("display","block");

		x.html('<div class="form-group">'+
                    '<label for="razon_social" class="col-lg-2 control-label">Razón Social:</label>'+
                    '<div class="col-lg-10">'+
                      '<input type="text" class="form-control" id="razon_social" name="razon_social" placeholder="Razón Social" >'+
                    '</div> </div>');

		x = $("#fisica");
		x.css("display","none");
		x.html('');
	}

	function sucursal () {
		var x = $("#banco");
		var sucursal = x.val();
		x = $("#banco_otro");
		x.css("display","block");
		// alert(sucursal);
		if(sucursal == "otro"){
			x.html('<div class="form-group">'+
                    '<label for="otro" class="col-lg-2 control-label">Otro:</label>'+
                    '<div class="col-lg-10">'+
                      '<input type="text" class="form-control" id="otro" name="otro" placeholder="Nombre del Banco" required="true">'+
                    '</div> </div>');
		}else{
			x.css("display","none");
			x.html("");
		}
	}



</script>
