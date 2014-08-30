<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class M_proveedores extends CI_Model {

	public function __construct() {
        parent::__construct();
    }

	public function registro($proveedores)
    {
    	$this->db->insert('proveedores',$proveedores);    	
    }

}

/* End of file m_auxiliar.php */
/* Location: ./application/models/m_auxiliar.php */