function mostrarTipo(){
    if (document.formsw.tipo_sw[1].selected) {
        document.getElementById('sisop').style.display='block';
        document.getElementById('office').style.display='none';
        document.getElementById('antivirus').style.display='none';
        document.getElementById('otrosw').style.display='none';
    } else if (document.formsw.tipo_sw[2].selected) {
        document.getElementById('office').style.display='block';
        document.getElementById('sisop').style.display='none';
        document.getElementById('antivirus').style.display='none';
        document.getElementById('otrosw').style.display='none';
    } else if (document.formsw.tipo_sw[3].selected) {
        document.getElementById('antivirus').style.display='block';
        document.getElementById('office').style.display='none';
        document.getElementById('sisop').style.display='none';
        document.getElementById('otrosw').style.display='none';
    }else if (document.formsw.tipo_sw[4].selected){
        document.getElementById('otrosw').style.display='block';
        document.getElementById('office').style.display='none';
        document.getElementById('sisop').style.display='none';
        document.getElementById('antivirus').style.display='none';
    } else{
        document.getElementById('otrosw').style.display='none';
    }
} 

