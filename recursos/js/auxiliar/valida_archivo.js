$(document).ready(function(){
    $("#formu_archivo").validate({
        rules: {
           'nombre': {
                remote: { 
                    url: "c_pagos/verificar_archivo",
                    type: "post",
                    data: {
                        nombre: function(){
                            //return $("#usuario").val();
                            return $("input[name=nombre]").val();
                        },
                        fecha: function(){
                           // return $("#contrasenia").val();
                           return $("input[name=fecha]").val();
                        }
                    }
                } 
            }
        },
        messages: {
            'nombre':{
                remote: "Ya existe un archivo con el mismo nombre Verifique"                
            }
        }
    });  
});


