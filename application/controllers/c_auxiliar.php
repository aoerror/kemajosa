<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class C_auxiliar extends CI_Controller {

	public function index()
	{
		$this->load->view('c_auxiliar/index');
	}

	public function registroPago()
	{	
		$this->load->view('c_auxiliar/registroPago');
	}


}

/* End of file c_auxiliar.php */
/* Location: ./application/controllers/c_auxiliar.php */