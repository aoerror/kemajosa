<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class C_auxiliar extends CI_Controller {

	public function index()
	{
		$this->load->view('v_auxiliar/index');
	}

	public function registroPago()
	{	
		$this->load->view('v_auxiliar/registroPago');
	}

	public function registroProveedores()
	{
		$data['view']='v_auxiliar/registroProveedores';
		$this->load->view('contenido/contenido', $data);

	}




}

/* End of file c_auxiliar.php */
/* Location: ./application/controllers/c_auxiliar.php */