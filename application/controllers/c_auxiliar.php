<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class C_auxiliar extends CI_Controller {

	function __construct()
	{
		parent::__construct();

		$this->load->model('m_proveedores');

		// $this->load->model('registro_proveedor');
	}

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

	public function nuevo_proveedor()
    {
        if ($_POST) {
            $ban='No Seleccionado';

            if($_POST['banco']=='otro')
                {
                    $ban=$_POST['otro'];
                }else{
                	$ban = $_POST['banco'];//pendiente,
                }
            $proveedor = array(
                'empresa' => $_POST['nombre_empresa'],
                'rfc'     => $_POST['rfc_empresa'],
                'banco'   => $ban,
                'sucursal'=> $_POST['sucursal'],
                'cuenta'  => $_POST['n_cuenta'],
                'clave'   => $_POST['clabe'],
                'referencia'=>$_POST['referencia'],
                'correo'  => $_POST['correo'],
                'telefono'=> $_POST['telefono'],
                'fax'     => $_POST['fax'],
                'celular' => $_POST['celular'],
                'atiende' => $_POST['encargada']

                );


            $this->m_proveedores->registro($proveedor);
            $data['mensaje'] = 'Proveedor Agregado';
            redirect(base_url().'c_auxiliar/nuevo_proveedor', $data);

        }else{

        	$data['title'] = 'REGISTRO PROVEEDORES';
        	$data['mensaje'] = '';
        	$data['view'] = 'v_auxiliar/registroProveedores';
			$this->load->view('contenido/contenido', $data);
		}

    	//$titulo['title'] = "REGISTRO PROVEEDORES";
    //	$this->load->view('header', $titulo);
    	//$this->load->view('nuevo_proveedor');

    }



	



}

/* End of file c_auxiliar.php */
/* Location: ./application/controllers/c_auxiliar.php */