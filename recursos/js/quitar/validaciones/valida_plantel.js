$(document).ready(function(){
    $("#plantel_form").validate({
        rules: {
            'num_plantel': {
                required: true,
                digits: true,
                remote: { 
                    url: "existencia_numero",
                    type: "post",
                    data: {
                        num_plantel: function(){
                            return $("#num_plantel").val();
                        }
                    }
                } 
            },
            'nom_plantel': {
                required: true /*,
                remote: { 
                    url: "existencia_nombre",
                    type: "post",
                    data: {
                        nom_plantel: function(){
                            return $("#nom_plantel").val();
                        }
                    }
                } */
            } ,
            'regiones': {
                number:true
            },
            'distritos': {
                number:true
            },
            'municipio': {
                number:true
            },
            'localidad': {
                number:true
            }
        },
        messages: {
            'num_plantel':{
                required: "Campo requerido",
                digits:"Escriba solo dígitos" ,
                remote: "Plantel existente" 
            },
            'nom_plantel': {
                required: "Campo requerido" /*,
                remote: "Plantel existente" */
            },
            'regiones':{ 
               number:true
            },
            'distritos':{ 
               number:true
            },
            'municipio':{ 
               number:true
            },
            'localidad':{ 
               number:true
            }
        }
    });  
});


