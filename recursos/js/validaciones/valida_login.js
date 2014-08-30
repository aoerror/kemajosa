$(document).ready(function(){
    $("#login_form").validate({
        rules: {
            'usuario': {
                required: true 
            },
            'contrasenia': {
                required: true,
                remote: { 
                    url: "logear/verificar_Usuario",
                    type: "post",
                    data: {
                        usuario: function(){
                            //return $("#usuario").val();
                            return $("input[name=usuario]").val();
                        },
                        contrasenia: function(){
                           // return $("#contrasenia").val();
                           return $("input[name=contrasenia]").val();
                        }
                    }
                } 
            }
        },
        messages: {
            'usuario':{
                required: "Campo requerido"                
            },
            'contrasenia': {
                required: "Campo requerido",
                remote: "Verificar"            
            }
        }
    });  
});


