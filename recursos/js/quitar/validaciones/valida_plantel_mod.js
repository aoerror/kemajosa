$(document).ready(function(){
    $("#plantel_edit").validate({
        rules: {
            'num_plantel': {
                required: true,
                digits: true ,
                remote: { 
                    url: "existencia_numero",
                    type: "post",
                    data: {
                        num_plantel: function(){
                            return $("input[name=num_plantel]").val();
                        },
                        id_p: function(){
                            return $("input[name=id_plantel]").val();
                        }
                    }
                } 
            },
            'nom_plantel': {
                required: true 
            }
        },
        messages: {
            'num_plantel':{
                required: "Campo requerido",
                digits:"Escriba solo dígitos",
                remote: "Plantel Existente"
            },
            'nom_plantel': {
                required: "Campo requerido" 
            }
        }
    });  
});


