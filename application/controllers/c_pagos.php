<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class C_pagos extends CI_Controller {

	function __construct(){
		parent::__construct();

		// $this->load->helper(array('download','file','form','html', 'form'));

		$this->load->helper(array('form','file','download'));
		$this->load->model('m_proveedores');

		$this->folder = './uploads/';
	}

	public function index()
	{
		$data['title'] = 'REGISTRO TRANSFERENCIA';
    	$data['mensaje']['error'] = '';
    	$data['contenido'] = '';
    	$data['view'] = 'v_auxiliar/registroPago';
		$this->load->view('contenido/contenido', $data);
	}

	public function do_upload()
	{
		$config['upload_path'] = $this->folder;
		$config['allowed_types'] = 'zip|rar|pdf|docx|txt';
		$config['remove_spaces']=TRUE;
		$config['max_size']    = '2048';

		$config['file_name']=strtoupper($this->input->post('nombre').'-'.$this->input->post('fecha'));

		$this->load->library('upload', $config);

		if ( ! $this->upload->do_upload())
		{
			$data['title'] = 'SUBIR ARCHIVO';
	    	$data['mensaje'] = array('error' => $this->upload->display_errors());
	    	$data['contenido'] = '';
	    	$data['view'] = 'v_auxiliar/registroPago';
			$this->load->view('contenido/contenido', $data);
		}
		else
		{
			// $data = array('upload_data' => $this->upload->data());
			// $this->load->view('success', $data);
			$data = $this->upload->data();

			$archivo = array (
				'nombre_archivo' => $config['file_name'] ,
				'ruta_archivo'	 => 'uploads/'.$data['file_name'],
				'fecha'  => $this->input->post('fecha'),
				'descripcion' => $this->input->post('descripcion'),
				'correo_enviado' => $this->input->post('correo'),
				
			);

			$this->m_proveedores->guardar_archivo($archivo);


			redirect(base_url().'c_pagos/listaArchivos');
		}
	}

	public function listaArchivos()
	{
		$files = get_filenames($this->folder, FALSE);

		if ($files) {
			$data['files'] = $files;
		}else{
			$data['files'] = NULL;
		}

		$data['title'] = 'LISTA DE ARCHIVOS';
    	$data['mensaje'] = '';
    	$data['contenido'] = '';
    	$data['view'] = 'v_auxiliar/lista_archivos';
		$this->load->view('contenido/contenido', $data);

	}


	public function info(){

		$files = get_filenames($this->folder, FALSE);

		if($files){
			$data['files']=$files;

		}else{
			$data['files']=NULL;
		}
		$this->load->view('filenames',$data);   

	}
//************ DESCARGA DE ARCHIVOS ***********************

	public function descargarArchivos($name){

		$data = file_get_contents($this->folder.$name); 
		force_download($name,$data); 

	}

	public function verArchivo($name)
	{
		$data['contenido'] = $name;

		$data['title'] = 'VER ARCHIVOS';
    	// $data['view'] = 'v_auxiliar/ver_archivo';
		// $this->load->view('contenido/contenido', $data);
		$this->load->view('v_auxiliar/ver_archivo', $data);

	}



  //valida nombre de archivo no exista

	public function verificar_archivo()
	{
		$nombre = strtoupper($this->input->post('nombre').'-'.$this->input->post('fecha'));

		$query = $this->m_proveedores->archivos($nombre);

		if($query->num_rows()>0){
			return false;
		}else{
			return true;
		}

	}
}

/* End of file c_pagos.php */
/* Location: ./application/controllers/c_pagos.php */