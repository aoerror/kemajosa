<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class C_auxiliar extends CI_Controller {

	function __construct()
	{
		parent::__construct();

		$this->load->model('m_proveedores');

	}

	 public function index() {
     	// $this->nuevo_proveedor();
        	$data['title'] = 'CONSULTAR PROVEEDORES';
        	$data['mensaje'] = '';
        	$data['contenido'] = '';
        	$data['view'] = 'v_auxiliar/v_consultarProveedor';
			$this->load->view('contenido/contenido', $data);
    }


// FUNCION VER PROVEEDOR,
    //RECIBE DE PARAMETRO POR LA URL, EL ID_PROVEEDOR
    //RESULTADO CARGA LA VISTA PARA MOSTRAR EL PROVEEDOR O 
    //MUESTRA MENSAJE DE ERROR SI ESTE NO EXISTE
	public function ver_proveedor($proveedor="", $instruccion="")
	{	
		if ($proveedor) {		
			
			$data =  $this->m_proveedores->consultar($proveedor);

			if ($data['existe']) {
				$data['title'] = 'CONSULTAR PROVEEDOR';
				$data['mensaje'] = $instruccion;
				$data['view'] = 'v_auxiliar/v_proveedor';
				$this->load->view('contenido/contenido', $data);

			}else{
				$data['mensaje'] = "Este proveedor no esta registrado";
				$data['title'] = 'CONSULTAR PROVEEDOR';
				$data['view'] = 'v_auxiliar/v_mensaje_error';
				$data['contenido'] = 'ver_proveedores';
				$this->load->view('contenido/contenido', $data);
			}
		}else{
			$this->consultaProveedores();
		}

	}

// Funcion para insertar un nuevo proveedor
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
                'clabe'   => $_POST['clabe'],
                'referencia'=>$_POST['referencia'],
                'correo'  => $_POST['correo'],
                'telefono'=> $_POST['telefono'],
                'fax'     => $_POST['fax'],
                'celular' => $_POST['celular'],
                'atiende' => $_POST['atiende']

                );


            $this->m_proveedores->registro($proveedor);
            $data['mensaje'] = 'Proveedor Agregado';
            $data['contenido'] = '';
            redirect(base_url().'c_auxiliar/nuevo_proveedor', $data);

        }else{

        	$data['title'] = 'REGISTRO PROVEEDORES';
        	$data['mensaje'] = '';
        	$data['contenido'] = '';
        	$data['view'] = 'v_auxiliar/registroProveedores';
			$this->load->view('contenido/contenido', $data);
		}


    }


	public function consultaProveedores() {
     //   $this->load->view('v_auxiliar/v_consultarProveedor');
        	$data['title'] = 'CONSULTAR PROVEEDORES';
        	$data['mensaje'] = '';
        	$data['contenido'] = '';
        	$data['view'] = 'v_auxiliar/v_consultarProveedor';
			$this->load->view('contenido/contenido', $data);
    }


    public function eliminaProveedores($proveedor="") {
     //   $this->load->view('v_auxiliar/v_consultarProveedor');
        
       	$data['title'] = 'ELIMINAR PROVEEDORES';
    	$data['mensaje'] = '';
    	$data['contenido'] = '';
    	$data['view'] = 'v_auxiliar/v_eliminarProveedor';

    	if ($proveedor) {		
			
			$data =  $this->m_proveedores->consultar($proveedor);

			if ($data['existe']) {
				// echo $proveedor;
				$this->m_proveedores->eliminarProveedor($proveedor);
				 redirect(base_url().'c_auxiliar/eliminaProveedores');

			}else{
				redirect(base_url().'c_auxiliar/eliminaProveedores');
			}
		}else{
			$this->load->view('contenido/contenido', $data);
		}
    }




	public function modificar_proveedor($id_proveedor='',$actualizado='')
	{
		if ($_POST) {

			$proveedor_id = $this->input->post('id_proveedor');

			if($_POST['banco']=='otro')
                {
                    $ban=$_POST['otro'];
                }else{
                	$ban = $_POST['banco'];//pendiente,
                }

			$proveedor_act = array(
                'empresa' => $_POST['nombre_empresa'],
                'rfc'     => $_POST['rfc_empresa'],
                'banco'   => $ban,
                'sucursal'=> $_POST['sucursal'],
                'cuenta'  => $_POST['n_cuenta'],
                'clabe'   => $_POST['clabe'],
                'referencia'=>$_POST['referencia'],
                'correo'  => $_POST['correo'],
                'telefono'=> $_POST['telefono'],
                'fax'     => $_POST['fax'],
                'celular' => $_POST['celular'],
                'atiende' => $_POST['atiende']

                );

			$this->m_proveedores->actualizar_proveedor($proveedor_id, $proveedor_act);
			redirect(base_url().'c_auxiliar/modificar_proveedor/'.$proveedor_id.'/true');

		}else{
			if(!$id_proveedor) {
				$this->__redireccion('consultaProveedores');
			}

			$data = $this->m_proveedores->consultar($id_proveedor);
				
			if(!$data['existe']) {
				$this->__redireccion('consultaProveedores');
			}
			else
			{
				$data['title'] = 'MODIFICAR PROVEEDOR';
	        	$data['mensaje'] = $actualizado;
	        	$data['view'] = 'v_auxiliar/v_modificarProveedor';
				$this->load->view('contenido/contenido', $data);

			}
		}

	}

	private function __redireccion($fun)
	{
		 redirect(base_url().'c_auxiliar/'.$fun);
	}



// CONSULTAS PARA JQGRID

// Consulta para llenar tabla de proveedores
	public function ver_proveedores()
	{
		if($_POST){
			echo $this->m_proveedores->getProveedores();	
		}else{
			$this->consultaProveedores();
		}

	}

	



}

/* End of file c_auxiliar.php */
/* Location: ./application/controllers/c_auxiliar.php */