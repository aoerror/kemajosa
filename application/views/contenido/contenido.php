<?php

$data['title']  = $title;

$data['contenido'] = "" ;

if($contenido){
	$data['contenido'] = $contenido;

}


$this->load->view('contenido/header', $data);
$this->load->view($view, $data['contenido']);
$this->load->view('contenido/footer');

?>