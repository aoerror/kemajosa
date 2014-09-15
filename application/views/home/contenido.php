<?php

$data['title']  = $titulo;

$data['contenido'] = "" ;

if($contenido){
	$data['contenido'] = $contenido;

}


$this->load->view('home/header', $data);
$this->load->view($view, $data['contenido']);
$this->load->view('home/footer');

?>