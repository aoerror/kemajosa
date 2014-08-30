
//login
$(document).ready(function(evt) {
    $("#panel-sesiom").hide();
    $("#tab-sesion").click(function() {
        $("#panel-sesiom").slideToggle("slow");
    });
});


//menu de registro
$(document).ready(function() {

    $("#panel-alumno").show();
    $("#panel-padre").hide();
    $("#panel-madre").hide();
    $("#panel-otros").hide();
    $("#tab-alumno").addClass("Active");

    $("#extranjero").click(function() {
        $("#ventanamodal").slideUp("slow");
    });

    $("#entrar").click(function() {
        $("#ventanamodal").slideUp("slow");
    });



    $("#tab-alumno").click(function(evt) {

        $("#panel-alumno").slideDown("slow");
        $("#tab-alumno").addClass("Active");
        $("#panel-padre").hide();
        $("#tab-padre").removeClass("Active");
        $("#panel-madre").hide();
        $("#tab-madre").removeClass("Active");
        $("#panel-otros").hide();
        $("#tab-otros").removeClass("Active");
    });
    $("#tab-padre").click(function(evt) {
        $("#panel-alumno").hide();
        $("#tab-alumno").removeClass("Active");
        $("#panel-padre").slideDown("slow");
        $("#tab-padre").addClass("Active");
        $("#panel-madre").hide();
        $("#tab-madre").removeClass("Active");
        $("#panel-otros").hide();
        $("#tab-otros").removeClass("Active");

    });
    $("#tab-madre").click(function(evt) {
        $("#panel-alumno").hide();
        $("#tab-alumno").removeClass("Active");
        $("#panel-padre").hide();
        $("#tab-padre").removeClass("Active");
        $("#panel-madre").slideDown("slow");
        $("#tab-madre").addClass("Active");
        $("#panel-otros").hide();
        $("#tab-otros").removeClass("Active");
    });

    $("#tab-otros").click(function(evt) {
        $("#panel-alumno").hide();
        $("#tab-alumno").removeClass("Active");
        $("#panel-padre").hide();
        $("#tab-padre").removeClass("Active");
        $("#panel-madre").hide();
        $("#tab-madre").removeClass("Active");
        $("#panel-otros").slideDown("slow");
        $("#tab-otros").addClass("Active");
    });

    $('#fecha_nace').datepicker({
        format: "yyyy-mm-dd",
        language: "es"
    });


});
//ventanas de busqueda de secretarias

$(document).ready(function(evt) {
    $("#busquedaIns").hide();
    $("#busquedaPre").hide();

    $("#prein").click(function() {
        $("#busquedaPre").slideToggle("slow");
    });
    $("#can").click(function() {
        $("#busquedaPre").slideToggle("slow");
    });
    $("#insc").click(function() {
        $("#busquedaIns").slideToggle("slow");
    });
    $("#can2").click(function() {
        $("#busquedaIns").slideToggle("slow");
    });
});


