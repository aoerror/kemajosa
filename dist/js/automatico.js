  autorizaos = 0;

  function guardar(){
    chek_padre = document.getElementById("input-autorizada-padre");
    chek_madre = document.getElementById("input-autorizada-madre");

  	if(chek_padre.checked===true && chek_madre.checked==true)
    {
     nombre = document.getElementById("input-nombre-padre");
     nombre_otro = document.getElementById("input-nombre-otros1");
     nombre_otro.value=nombre.value;
     nombre_otro.setAttribute("disabled",nombre.value);

     paterno = document.getElementById("input-paterno-padre");
     paterno_otro = document.getElementById("input-paterno-otros1");
     paterno_otro.value=paterno.value;
     paterno_otro.setAttribute("disabled",nombre.value);

     materno = document.getElementById("input-materno-padre");
     materno_otro = document.getElementById("input-materno-otros1");
     materno_otro.value=materno.value;
     materno_otro.setAttribute("disabled",nombre.value);

     trabajo = document.getElementById("input-trabajo-padre");
     trabajo_otro = document.getElementById("input-trabajo-otros1");
     trabajo_otro.value=trabajo.value;
     trabajo_otro.setAttribute("disabled",nombre.value);

     tel = document.getElementById("input-tel-padre");
     tel_otro = document.getElementById("input-tel-otros1");
     tel_otro.value=tel.value;
     tel_otro.setAttribute("disabled",nombre.value);

     cel = document.getElementById("input-cel-padre");
     cel_otro = document.getElementById("input-cel-otros1");
     cel_otro.value=cel.value;
     cel_otro.setAttribute("disabled",nombre.value);
     
     casa = document.getElementById("input-casa-padre");
     casa_otro = document.getElementById("input-casa-otros1");
     casa_otro.value=casa.value;
     casa_otro.setAttribute("disabled",nombre.value);

     parentesco = document.getElementById("input-parentesco-padre");
     parentesco_otro = document.getElementById("input-parentesco-otros1");
     parentesco_otro.value="PADRE";
     parentesco_otro.setAttribute("disabled",nombre.value);


    //=========================================================

    //==================campos de la madre=====================

    //=========================================================

     nombre_madre = document.getElementById("input-nombre-madre");
     nombre_otro_madre = document.getElementById("input-nombre-otros2");
     nombre_otro_madre.value=nombre_madre.value;
     nombre_otro_madre.setAttribute("disabled",nombre_madre.value);

     paterno_madre = document.getElementById("input-paterno-madre");
     paterno_otro_madre = document.getElementById("input-paterno-otros2");
     paterno_otro_madre.value=paterno_madre.value;
     paterno_otro_madre.setAttribute("disabled",nombre.value);

     materno_madre = document.getElementById("input-materno-madre");
     materno_otro_madre = document.getElementById("input-materno-otros2");
     materno_otro_madre.value=paterno_madre.value;
     materno_otro_madre.setAttribute("disabled",nombre.value);

     tranajo_madre = document.getElementById("input-trabajo-madre");
     trabajo_otro_madre = document.getElementById("input-trabajo-otros2");
     trabajo_otro_madre.value=tranajo_madre.value;
     trabajo_otro_madre.setAttribute("disabled",nombre.value);


     tel_madre = document.getElementById("input-tel-madre");
     tel_otro_madre = document.getElementById("input-tel-otros2");
     tel_otro_madre.value=tel_madre.value;
     tel_otro_madre.setAttribute("disabled",nombre.value);

     cel_madre = document.getElementById("input-cel-madre");
     cel_otro_madre = document.getElementById("input-cel-otros2");
     cel_otro_madre.value=cel_madre.value;
     cel_otro_madre.setAttribute("disabled",nombre.value);

     casa = document.getElementById("input-casa-madre");
     casa_otro = document.getElementById("input-casa-otros2");
     casa_otro.value=casa.value;
     casa_otro.setAttribute("disabled",nombre.value);


     parentesco_madre = document.getElementById("input-parentesco-madre");
     parentesco_otro_madre = document.getElementById("input-parentesco-otros2");
     parentesco_otro_madre.value="MADRE";
     parentesco_otro_madre.setAttribute("disabled",nombre.value);




     }else
     {

        if (chek_padre.checked===true) 
        {

             nombre = document.getElementById("input-nombre-padre");
             nombre_otro = document.getElementById("input-nombre-otros1");
             nombre_otro.value=nombre.value;
             nombre_otro.setAttribute("disabled",nombre.value);

             paterno = document.getElementById("input-paterno-padre");
             paterno_otro = document.getElementById("input-paterno-otros1");
             paterno_otro.value=paterno.value;
             paterno_otro.setAttribute("disabled",nombre.value);

             materno = document.getElementById("input-materno-padre");
             materno_otro = document.getElementById("input-materno-otros1");
             materno_otro.value=materno.value;
             materno_otro.setAttribute("disabled",nombre.value);

             trabajo = document.getElementById("input-trabajo-padre");
             trabajo_otro = document.getElementById("input-trabajo-otros1");
             trabajo_otro.value=trabajo.value;
             trabajo_otro.setAttribute("disabled",nombre.value);

             tel = document.getElementById("input-tel-padre");
             tel_otro = document.getElementById("input-tel-otros1");
             tel_otro.value=tel.value;
             tel_otro.setAttribute("disabled",nombre.value);

             cel = document.getElementById("input-cel-padre");
             cel_otro = document.getElementById("input-cel-otros1");
             cel_otro.value=cel.value;
             cel_otro.setAttribute("disabled",nombre.value);
             
             casa = document.getElementById("input-casa-padre");
             casa_otro = document.getElementById("input-casa-otros1");
             casa_otro.value=casa.value;
             casa_otro.setAttribute("disabled",nombre.value);

             parentesco = document.getElementById("input-parentesco-padre");
             parentesco_otro = document.getElementById("input-parentesco-otros1");
             parentesco_otro.value="PADRE";
             parentesco_otro.setAttribute("disabled",nombre.value);

        }
        if (chek_madre.checked==true) 
        {
             nombre_madre = document.getElementById("input-nombre-madre");
             nombre_otro_madre = document.getElementById("input-nombre-otros1");
             nombre_otro_madre.value=nombre_madre.value;
             nombre_otro_madre.setAttribute("disabled",nombre_madre.value);

             paterno_madre = document.getElementById("input-paterno-madre");
             paterno_otro_madre = document.getElementById("input-paterno-otros1");
             paterno_otro_madre.value=paterno_madre.value;
             paterno_otro_madre.setAttribute("disabled",paterno_madre.value);

             materno_madre = document.getElementById("input-materno-madre");
             materno_otro_madre = document.getElementById("input-materno-otros1");
             materno_otro_madre.value=paterno_madre.value;
             materno_otro_madre.setAttribute("disabled",nombre_madre.value);

             tranajo_madre = document.getElementById("input-trabajo-madre");
             trabajo_otro_madre = document.getElementById("input-trabajo-otros1");
             trabajo_otro_madre.value=tranajo_madre.value;
             trabajo_otro_madre.setAttribute("disabled",nombre_madre.value);


             tel_madre = document.getElementById("input-tel-madre");
             tel_otro_madre = document.getElementById("input-tel-otros1");
             tel_otro_madre.value=tel_madre.value;
             tel_otro_madre.setAttribute("disabled",nombre_madre.value);

             cel_madre = document.getElementById("input-cel-madre");
             cel_otro_madre = document.getElementById("input-cel-otros1");
             cel_otro_madre.value=cel_madre.value;
             cel_otro_madre.setAttribute("disabled",nombre_madre.value);

             casa = document.getElementById("input-casa-madre");
             casa_otro = document.getElementById("input-casa-otros2");
             casa_otro.value=casa.value;
             casa_otro.setAttribute("disabled",nombre.value);


             parentesco_madre = document.getElementById("input-parentesco-madre");
             parentesco_otro_madre = document.getElementById("input-parentesco-otros1");
             parentesco_otro_madre.value="MADRE";
             parentesco_otro_madre.setAttribute("disabled",paterno_madre.value);
        }

     }
 }

     llenar = document.getElementById("llenar");
llenar.addEventListener("click",guardar,false);