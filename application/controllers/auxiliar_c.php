<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Auxiliar_c extends CI_Controller {

	function __construct()
	{
		parent::__construct();

		$this->load->model('proveedores_m');
	}

/*
    funcion index: Cargara la vista principal del AUXILIAR, 
	en este caso cargara la vista de 
	registro de proveedor de forma predeterminada.
*/	public function index()
	{
		$data["titulo"] = "REGISTRO PROVEEDORES";
		$data["mensaje"] = "";
		$data["contenido"] = "";
		$data['view'] = "auxiliar_v/registro_proveedor";

		$this->load->view('home/contenido', $data);

	}

	public function registrar()
	{
		$datos = $this->input->post();

		$nombre_persona = "";
		$ap_paterno = "";
		$ap_materno = "";
		$razon_social = "";
		// echo $datos['nombre_persona'];
		if($datos['personalidad'] == "Fisica"){
			$nombre_persona = $datos['nombre_persona'];
			$ap_paterno = $datos['ap_paterno'];
			$ap_materno = $datos['ap_materno'];

		}else {
			$razon_social = $datos["razon_social"] ;

		}

		if($datos['banco']=="otro"){
			$banco = $datos["otro"];
		}else{
			$banco = $datos["banco"];
		}

		$proveedor = array(
			'empresa' 			=> 	$datos['nombre'],
			'sucursal_empresa'	=>	$datos['sucursal'],
			'nombre_persona'	=>  $nombre_persona,
			'ap_paterno' 		=> 	$ap_paterno,
			'ap_materno' 		=> 	$ap_materno,
			'razon_social'		=>	$razon_social,
			'personalidad'		=>	$datos['personalidad'],
			'rfc'				=>	$datos['rfc'],
			'banco'				=>	$banco,
			'sucursal'			=>	$datos['sucursal'],
			'cuenta'			=>	$datos['n_cuenta'],
			'clabe'				=>	$datos['clabe'],
			'referencia'		=>	$datos['referencia'],
			'correo'			=>	$datos['email'],
			'telefono'			=>	$datos['telefono'],
			'fax'				=>	$datos['fax'],
			'celular'			=>	$datos['celular'],
			'atiende'			=>	$datos['encargado']
			);

		if($this->proveedores_m->insertarProveedor($proveedor)){
			redirect(base_url().'auxiliar_c/listaProveedores');
		}else{
			redirect(base_url().'auxiliar_c');
		}
	}

	public function listaProveedores($opcion='')
	{
		echo "bien";
	}

}

/* End of file auxiliar_c.php */
/* Location: ./application/controllers/auxiliar_c.php */