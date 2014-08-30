<?php

$data['title']  = $title;
$this->load->view('contenido/header', $data);
$this->load->view($view);
$this->load->view('contenido/footer');

?>