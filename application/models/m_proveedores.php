<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class M_proveedores extends CI_Model {

	public function __construct() {
        parent::__construct();
    }

	public function registro($proveedores)
    {
    	$this->db->insert('proveedores',$proveedores);    	
    }

    public function getProveedores()
    {
    	$page = $this->input->post('page'); //pagina 
        $limit = $this->input->post('rows'); //cuantos registros 
        $sidx = $this->input->post('sidx'); //campo de ordenacion 
        $sord = $this->input->post('sord'); //direccion de orden 
  
        if (!$sidx)
            $sidx = 1;

        //CONSULTA
        //$max = $this->ultimoPeriodo();
        $this->db->select('*');
        $this->db->from('proveedores');
        $this->db->order_by('id_proveedor','desc');
        $query = $this->db->get();
        
        $count = $query->num_rows();

        $total_pages = 0;
        //calcular paginas en total
        if ($count > 0) {
            $total_pages = ceil($count / 1);
        } else {
            $total_pages = 0;
        }
        if ($page > $total_pages) {
            $page = $total_pages;
        }
        //calcular inicio y final segun paginas...
        $start = $limit * $page - $limit; // do not put $limit*($page - 1)
        if ($count == 0)
            $start = 0;
        //generar consulta
        //$this->ultimoPeriodo();
        $this->db->select('*');
        $this->db->from('proveedores');
        $this->db->order_by('id_proveedor','desc');
        $this->db->order_by($sidx, $sord);
       	$this->db->limit($limit, $start);
        $query = $this->db->get();
               $i = 0;
        foreach ($query->result() as $row) { //por cada resultado...
            $responce->rows[$i]['id'] = $row->id_proveedor;
            $responce->rows[$i]['cell'] = array(
                $row->id_proveedor,
                $row->empresa,
                $row->rfc,
                $row->banco,
                $row->sucursal,
                ''//renglon de acciones
            );
            $i++;
        }
        return json_encode($responce);
    }

}

/* End of file m_auxiliar.php */
/* Location: ./application/models/m_auxiliar.php */