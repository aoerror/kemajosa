$(document).ready(function(){
    $("#num_plantel").validate({
        rules: {
            'oficina': {
                required:true     
            }

        },
        messages: {
            'oficina':{
                required: "Campo requerido"
            }
        }
    });   
});

function cargarTipo(){
    var tipo = $("#tipo").val();
        
    if(tipo == "Plantel"){
        document.getElementById("label1").innerHTML = "Numero de Plantel:";
    }else{
        document.getElementById("label1").innerHTML = "Correo Electronico:"; 
    }
    
    if(tipo != "null"){document.getElementById("mostrar").style.display = "";}
    
}





