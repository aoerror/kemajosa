$(document).ready(function(){
    $("#form_periodo").validate({
        rules: {
            'periodo':{
                required:true,
                remote: { 
                    url: "repetido",
                    type: "post",
                    data: {
                        anio: function(){
                            return $("input[name=anio]").val();
                        },
                        periodo: function(){
                            return $("#periodo").val();
                        }
                    }
                }
            },
            'anio': {
                required: true,
                remote: { 
                    url: "fecha",
                    type: "post",
                    data: {
                        anio: function(){
                            return $("input[name=anio]").val();
                        }
                    }
                }
            }
        },
        messages: {
            'periodo':{
                required:true,
                remote:"Verifique periodo"
            },
            'anio':{
                required: "Campo requerido",
                remote:"Fecha Inválida"
            }
        }
    });  
});