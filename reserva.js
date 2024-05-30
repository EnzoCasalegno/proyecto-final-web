document.getElementById('reservaFrm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombreApellido = document.getElementById('nombre_apellido').value.trim();
    const correo = document.getElementById('email').value.trim();
    const fecha = document.getElementById('fecha').value.trim();
    const celular = document.getElementById('celular').value.trim();
    const hora = document.getElementById('hora').value.trim();
    const formCartel = document.getElementById('formAvisos');

    formCartel.innerHTML = ' ';




    function validacion() {

        let errores = [];
        let info = [];
        const [hours, minutes] = hora.split(':').map(Number);

        if (nombreApellido.length === 0) {
            errores.push("Debe completar el campo de Nombre / Apellido .")
        } else if (!/^[a-zA-Z ]+$/.test(nombreApellido)) {
            errores.push("El nombre debe contener solo letras.");
        }

        if (correo.length === 0) {
            errores.push("Debe completar el campo de email.");
        } else if (!/^\S+@\S+\.\S+$/.test(correo)) {
            errores.push("Debe completar el campo con un email valido.");
        }

        if (celular.length === 0) {
            errores.push('Debe completar el campo de celular.');
        }else if (!/^\d{10}$/.test(celular)){
            errores.push("Debe ingresar solo ( 10 ) digitos numericos.")
        }

        if (fecha.length === 0) {
            errores.push("Debe llenar el campo de fecha.");
        }
        if (hora.length === 0) {
            errores.push("Debe completar el campo de hora.")
        }else if ((hours < 9 || (hours >= 18 && minutes > 0))) {
            errores.push("La hora de reserva debe estar entre las 09:00 hs y las 18:00 hs.");
        }


        if (errores.length > 0) {
            formCartel.innerHTML = "<ul><li>" + errores.join("</li><li>") + "</li>  </ul>";
            formCartel.className = "error";
        }else{
            const frmEnviado = document.createElement('p');
            //Probando si puedo poner espacios entre lineas 
            frmEnviado.textContent = "Reserva a Nombre de: "+ nombreApellido + "\n Enviamos un mensaje para confirmar reserva: " + celular + " \n en el dia de Fecha: " + fecha + "  a las : " + hora + " hs";
            formCartel.appendChild(frmEnviado);
            document.getElementById('reservaFrm').reset();
        }
    };


    validacion();
});

