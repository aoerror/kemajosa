<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?=$title?></title>

		<link rel="shortcut icon" href="<?=base_url()?>dist/img/logo.png">
		<link href="<?=base_url()?>dist/css/bootstrap.css" rel="stylesheet">
        <link href="<?=base_url()?>dist/css/bootstrap.min.css" rel="stylesheet">
        <link href="<?=base_url()?>dist/css/boots.min.css" rel="stylesheet">
        <!-- <link rel="stylesheet" href="<?=base_url()?>dist/css/jquery-ui.css" /> --> 

 		<script src="<?=base_url()?>dist/js/jquery.js"></script>
	    <script src="<?=base_url()?>dist/js/jquery-ui/jquery-ui.js"></script>
	    <script src="<?=base_url()?>dist/js/bootstrap.min.js"></script>
	  <script src="<?=base_url()?>dist/js/boots.js"></script>

</head>
<body>

	<nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a href="#" class="navbar-brand">Empleado Auxiliar</a>
        </div>
        <div class="navbar-collapse collapse" id="navbar-main">
          <ul class="nav navbar-nav">
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" id="themes">Proveedores <span class="caret"></span>
              </a>
              <ul class="dropdown-menu" aria-labelledby="themes">
                <li><a href="<?=base_url()?>auxiliar_c">Nuevo Proveedor</a></li>
                <li class="divider"></li>
                <li><a href="<?=base_url()?>auxiliar_c/listaProveedores">Lista de Proveedores</a></li>
                <li><a href="<?=base_url()?>auxiliar_c/listaProveedores/modificar">Modificar Proveedor</a></li>
                <li><a href="<?=base_url()?>auxiliar_c/listaProveedores/eliminar">Eliminar Proveedor</a></li>
              </ul>
            </li>
            
            
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li><a href="#" target="_blank">Cerrar Sesión</a></li>
          </ul>

        </div>
      </div>
    </nav>

	