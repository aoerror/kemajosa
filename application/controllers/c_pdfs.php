<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class C_pdfs extends CI_Controller {

	function __construct()
	{
		parent::__construct();

		$this->load->model('m_proveedores');
	}

	public function imprimirProveedor($id_proveedor='')
	{
		if (!$id_proveedor) {
			redirect(base_url().'c_auxiliar/consultaProveedores');
		}

        $proveedor = $this->m_proveedores->consultar($id_proveedor);

        if (!$proveedor['existe']) {
			redirect(base_url().'c_auxiliar/consultaProveedores');
		}

        $this->load->library('Pdf');
        $pdf = new Pdf('P', 'mm', 'A4', true, 'UTF-8', false);
        $pdf->SetCreator(PDF_CREATOR);
        $pdf->SetAuthor('Kemajosa');
        $pdf->SetTitle('Datos Proveedor');
        $pdf->SetSubject('Datos Proveedor');
        $pdf->SetKeywords('Proveedor, Kemajosa');
 
// datos por defecto de cabecera, se pueden modificar en el archivo tcpdf_config_alt.php de libraries/config
        $pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH, PDF_HEADER_TITLE . '  '.$proveedor['contenido']['id_proveedor'], PDF_HEADER_STRING, array(0, 64, 255), array(0, 64, 128));
        $pdf->setFooterData($tc = array(0, 64, 0), $lc = array(0, 64, 128));
 
// datos por defecto de cabecera, se pueden modificar en el archivo tcpdf_config.php de libraries/config
        $pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
        $pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));
 
// se pueden modificar en el archivo tcpdf_config.php de libraries/config
        $pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);
 
// se pueden modificar en el archivo tcpdf_config.php de libraries/config
        $pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
        $pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
        $pdf->SetFooterMargin(PDF_MARGIN_FOOTER);
 
// se pueden modificar en el archivo tcpdf_config.php de libraries/config
        $pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);
 
//relación utilizada para ajustar la conversión de los píxeles
        $pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);
 
 
// ---------------------------------------------------------
// establecer el modo de fuente por defecto
        $pdf->setFontSubsetting(true);
 
// Establecer el tipo de letra
 
//Si tienes que imprimir carácteres ASCII estándar, puede utilizar las fuentes básicas como
// Helvetica para reducir el tamaño del archivo.
        $pdf->SetFont('freemono', '', 14, '', true);
 
// Añadir una página
// Este método tiene varias opciones, consulta la documentación para más información.
        $pdf->AddPage();
 
//fijar efecto de sombra en el texto
        $pdf->setTextShadow(array('enabled' => true, 'depth_w' => 0.2, 'depth_h' => 0.2, 'color' => array(196, 196, 196), 'opacity' => 1, 'blend_mode' => 'Normal'));
 
// Establecemos el contenido para imprimir
        // $provincia = $this->input->post('provincia');
        
        // foreach($proveedor as $fila)
        // {
        //     $prov = $fila['id_proveedor'];
        //     $p_nombre = $fila['nombre'];
        // }
        //preparamos y maquetamos el contenido a crear
        $html = '';
        $html .= "<style type=text/css>";
        $html .= "th{color: #fff; font-weight: bold; background-color: #222}";
        $html .= "td{background-color: #fff;  color: #000; border:1px solid #000}";

        $html .= "</style>";
        $html .= "<h2>Datos del Proveedor ".$proveedor['contenido']['nombre']."</h2>";
        $html .= "<table width='100%'>";
        $html .= "<tr><th>Número Proveedor</th><th>".$proveedor['contenido']['id_proveedor']."</th></tr>";
        
        //provincias es la respuesta de la función getProvinciasSeleccionadas($provincia) del modelo
      
            // $id = $proveedor['contenido']['id_proveedor'];
           
 
            $html .= "<tr><td class='id'> Nombre". "</td><td class='dato'>" . $proveedor['contenido']['nombre'] . "</td></tr>";
            $html .= "<tr><td class='id'> rfc". "</td><td class='dato'>" . $proveedor['contenido']['rfc'] . "</td></tr>";
            $html .= "<tr><td class='id'> Banco". "</td><td class='dato'>" . $proveedor['contenido']['banco'] . "</td></tr>";
            $html .= "<tr><td class='id'> Sucursal". "</td><td class='dato'>" . $proveedor['contenido']['sucursal'] . "</td></tr>";
        	$html .= "<tr><td class='id'> Cuenta". "</td><td class='dato'>" . $proveedor['contenido']['cuenta'] . "</td></tr>";
            $html .= "<tr><td class='id'> CLABE". "</td><td class='dato'>" . $proveedor['contenido']['clabe'] . "</td></tr>";
            $html .= "<tr><td class='id'> Referencia". "</td><td class='dato'>" . $proveedor['contenido']['referencia'] . "</td></tr>";
            $html .= "<tr><td class='id'> Correo Electronico". "</td><td class='dato'>" . $proveedor['contenido']['correo'] . "</td></tr>";
        	$html .= "<tr><td class='id'> Telefono". "</td><td class='dato'>" . $proveedor['contenido']['telefono'] . "</td></tr>";
            $html .= "<tr><td class='id'> Fax". "</td><td class='dato'>" . $proveedor['contenido']['fax'] . "</td></tr>";
            $html .= "<tr><td class='id'> Celular". "</td><td class='dato'>" . $proveedor['contenido']['celular'] . "</td></tr>";
            $html .= "<tr><td class='id'> Atiende". "</td><td class='dato'>" . $proveedor['contenido']['encargado'] . "</td></tr>";
        
        $html .= "</table>";
 
// Imprimimos el texto con writeHTMLCell()
        $pdf->writeHTMLCell($w = 0, $h = 0, $x = '', $y = '', $html, $border = 0, $ln = 1, $fill = 0, $reseth = true, $align = '', $autopadding = true);
 
// ---------------------------------------------------------
// Cerrar el documento PDF y preparamos la salida
// Este método tiene varias opciones, consulte la documentación para más información.
        $nombre_archivo = utf8_decode("Proveedor".$proveedor['contenido']['nombre'].".pdf");
        $pdf->Output($nombre_archivo, 'I');
	}

}

/* End of file c_pdfs.php */
/* Location: ./application/controllers/c_pdfs.php */