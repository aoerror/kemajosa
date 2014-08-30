$(document).ready(function(){
    
$.validator.addMethod("archivo", function(value, element) {
                return this.optional(element) || /(?:^|\/|\\)((?:[a-zA-Z0-9_%+-\s])*\.(?:pdf|doc))$/i.test(value);
            }, "Solo se permiten Archivos .PDF !");
            
$.validator.addMethod('filesize', function(value, element, param) {
    // param = size (en bytes) 
    // element = element to validate (<input>)
    // value = value of the element (file name)
    return this.optional(element) || (element.files[0].size <= param) 
},'Tamaño Maximo 3MB');
 
    $("#form_arc").validate({
        rules: {
            titulo:{
                required:true,
                minlength:3,
                maxlength:30
            },
            doc:{
                required:true, 
                archivo: true,
                filesize: 3145000  
            }
        },
        success: function(label) {
                    label.text('OK!').addClass('valid');
                },
        submitHandler: function(form) {
            form.submit();
        },
        messages: {
            titulo:{
               required:"Campo requerido",
               minlength:"Minimo de 3 caracteres",
               maxlength:"Máximo de 30 caracteres"
            },
            doc:{
                required:"Seleccione Archivo para Subir"  
            }
        }
    });
    

  
  
});

