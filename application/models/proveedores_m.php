<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Proveedores_m extends CI_Model {

	public function insertarProveedor($proveedor)
	{
		return $this->db->insert('proveedores',$proveedor);   
	}

	

}

/* End of file proveedores_m.php */
/* Location: ./application/models/proveedores_m.php */