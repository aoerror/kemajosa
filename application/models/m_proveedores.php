<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class M_proveedores extends CI_Model {

	function __construct() {
        parent::__construct();
    }

// FUNCION DE REGISTRO  DE PROVEEDOR EN LA BASE DE DATOS
    // PARAMETRO QUE RECIBE - ARREGLO CON DATOS DEL PROVEEDOR
	public function registro($proveedores)
    {
    	$this->db->insert('proveedores',$proveedores);    	
    }


// FUNCION DE CONSULTA DE PROVEEDOR EN LA BASE DE DATOS
    // PARAMETRO QUE RECIBE - ID_PROVEEDOR-
    // DEVUELVE ARREGLO CON DATOS DE PROVEEDOR

    public function consultar($id_proveedor)
    {
    	$this->db->where('id_proveedor', $id_proveedor);
    	$query = $this->db->get('proveedores');

    	if ($query->num_rows() == 1) {
    		$row = $query->row();

    		$data['existe'] = true;

    		$data['contenido'] = array(

    			'id_proveedor' 		=> $row->id_proveedor,
    			'nombre' 			=> $row->empresa,
    			'rfc'				=> $row->rfc,
    			'banco'				=> $row->banco,
    			'sucursal'			=> $row->sucursal,
    			'cuenta'			=> $row->cuenta,
    			'clabe'				=> $row->clabe,
    			'referencia'		=> $row->referencia,
    			'correo'			=> $row->correo,
    			'telefono'			=> $row->telefono,
    			'fax'				=> $row->fax,
    			'celular'			=> $row->celular,
    			'encargado'			=> $row->atiende
    			);

    	}
    	else
    	{
    		$data['existe'] = false;
    	}

    	return $data;

    }


    //FUNCION ACTUALIZAR PROVEEDOR
    	//RECIBE PARAMETRO ID_PROVEEDOR Y ARREGLO CON DATOS A ACTUALIZAR
    public function actualizar_proveedor($id_proveedor, $datos)
    {
    	$this->db->where('id_proveedor', $id_proveedor);
		$this->db->update('proveedores', $datos);
    	
    }


    //FUNCION ELIMINAR PROVEEDOR
    	//RECIBE PARAMETRO ID_PROVEEDOR 
    public function eliminarProveedor($id_proveedor)
    {
    	$this->db->where('id_proveedor', $id_proveedor);
		$this->db->delete('proveedores');
    }

// FUNCION PARA LLENAR LAS TABLAS CON JQGRID
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


    //valida nomrbe archivo controlador c_pago

    public function archivos($nombre)
    {
    	$this->db->where('nombre_archivo',$nombre);
    	$query = $this->db->get('archivos_pagos');

    	return $query;
    }

    public function guardar_archivo($archivo)
    {
    	$this->db->insert('archivos_pagos',$archivo);
    }
}

/* End of file m_auxiliar.php */
/* Location: ./application/models/m_auxiliar.php */