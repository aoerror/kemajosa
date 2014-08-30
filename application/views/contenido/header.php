<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	 <meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?=$title?></title>
	<link rel="stylesheet" href="<?=base_url()?>recursos/css/normalize.css">
	<!-- <link rel="stylesheet" href="<?=base_url()?>recursos/css/estiloAuxiliar.css"> -->

	<link rel="shortcut icon" href="<?=base_url()?>assets/ico/favicon.ico">
        <link href="<?=base_url()?>dist/css/bootstrap.min.css" rel="stylesheet">
        <link href="<?=base_url()?>dist/css/bootstrap-theme.min.css" rel="stylesheet">
        <link href="<?=base_url()?>dist/css/estilos.css" rel="stylesheet" />
        <link href="<?=base_url()?>dist/css/sistema.css" rel="stylesheet" />
        <script src="<?=base_url()?>dist/js/respond.js"></script>
        <script src="<?=base_url()?>dist/js/jquery-1.11.0.min.js"></script>
        <script src="<?=base_url()?>dist/js/bootstrap-datepicker.js"></script>
        <script src="<?=base_url()?>dist/js/movimiento.js"></script>

        <link rel="stylesheet" href="<?=base_url()?>recursos/css/estiloAuxiliar1.css">

</head>
<body>

	<header id="auxiliar" class="navbar navbar-inverse">
		<figure>
			<img src="<?=base_url()?>recursos/imgs/logo.png" alt="" id="avatar">
		</figure>

		<h2 class="titulo_pagina">
			Auxiliar Administrativo
		</h2>

		<span><?=date("d-m-Y");?></span>
	</header>

	
	<nav class="navbar-inverse" id="nav-auxiliar">
		<ul>
			<li><a href="<?=base_url()?>c_auxiliar/registroPago"> Registro de Pago</a></li>
			<li><a href="<?=base_url()?>c_auxiliar/graficos"> Graficos</a></li>
			<li><a href=""> Reportes</a></li>
		</ul>
	</nav>