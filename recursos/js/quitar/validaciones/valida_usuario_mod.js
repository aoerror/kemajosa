$(document).ready(function(){
    $("#u_edit").validate({
        rules: {
            'nombre': {
                required: true 
            },
            'a_paterno': {
                required: true
            },
            'a_materno': {
                required: true
            },
            'nom_usuario': {
                required: true,
                remote: { 
                    url: "exis_nombre",
                    type: "post",
                    data: {
                        nom_usuario: function(){
                            return $("input[name=nom_usuario]").val();
                        },
                        num_usu: function(){
                            return $("input[name=num_usuario]").val();
                        }
                    }
                }  
            },
            'contrasenia': {
                required: true
            },
            'recontrasenia':{
                required:true,
                equalTo: "#contrasenia"
            },
            'cargo': {
                required: true
            },
           'correo_e': {
               required:true,
                email:true,
                remote: { 
                    url: "exis_correo",
                    type: "post",
                    data: {
                        correo_e: function(){
                            return $("input[name=correo_e]").val();
                        },
                        num_usu: function(){
                            return $("input[name=num_usuario]").val();
                        }
                    }
                }
            },
            'oficina': {
                number:true   
            }
        },
        messages: {
            'nombre':{
                required: "Campo requerido"
            },
            'a_paterno': {
                required: "Campo requerido"
            },
            'a_materno':{
                required: "Campo requerido"
            },
            'nom_usuario':{
                required: "Campo requerido",
                remote:"Usuario existente"
            },
            'contrasenia':{
                required: "Campo requerido"
            },
            'recontrasenia':{
                required: "Campo requerido",
                equalTo: "Contraseñas no coinciden"
            },
            'cargo':{
                required: "Campo requerido"
            },
            'correo_e':{
                required: "Campo requerido",
                email:"Correo Inválido",
                remote:"Correo existente"
            },
            'oficina':{
                number: "Campo requerido"               
            }
        }
    });   
});





