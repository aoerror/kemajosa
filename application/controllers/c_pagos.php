<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class C_pagos extends CI_Controller {

	function __construct(){
		parent::__construct();

		$this->load->helper(array('download','file','form','html', 'form'));

		$this->folder = 'uploads/';
	}

	public function index()
	{
		$data['title'] = 'REGISTRO PAGO';
    	$data['mensaje'] = '';
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

		$this->load->library('upload', $config);

		if ( ! $this->upload->do_upload())
		{
			$error = array('error' => $this->upload->display_errors());
			redirect(base_url().'c_pagos');
		}
		else
		{
			$data = array('upload_data' => $this->upload->data());
			$this->load->view('success', $data);

		}
	}

	public function sucess()
	{
		echo "Hola mundo :D";
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

	public function downloads($name){

		$data = file_get_contents($this->folder.$name); 
		force_download($name,$data); 

	}


	public function registroPago()
	{
		// $target_path = base_url()."uploads/";
		// $target_path = $target_path . basename( $_FILES['file']['name']); if(move_uploaded_file($_FILES['file']['tmp_name'], $target_path)) { echo "El archivo ". basename( $_FILES['file']['name']). " ha sido subido";
		// } else{
		// echo "Ha ocurrido un error, trate de nuevo!";
		// }

	
		$uploadedfileload="true";
		$uploadedfile_size=$_FILES['uploadedfile'][size];
		echo $_FILES[uploadedfile][name];
		if ($_FILES[uploadedfile][size]>200000)
			{$msg=$msg."El archivo es mayor que 200KB, debes reduzcirlo antes de subirlo<BR>";
		$uploadedfileload="false";}

		if (!($_FILES[uploadedfile][type] =="image/pjpeg" OR $_FILES[uploadedfile][type] =="image/gif"))
			{$msg=$msg." Tu archivo tiene que ser JPG o GIF. Otros archivos no son permitidos<BR>";
		$uploadedfileload="false";}

		$file_name=$_FILES[uploadedfile][name];
		$add="uploads/$file_name";
		if($uploadedfileload=="true"){

			if(move_uploaded_file ($_FILES[uploadedfile][tmp_name], $add)){
				echo " Ha sido subido satisfactoriamente";
			}else{echo "Error al subir el archivo";}

		}else{echo $msg;}

	}
}

/* End of file c_pagos.php */
/* Location: ./application/controllers/c_pagos.php */