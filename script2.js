//1.REGISTRO DE ASISTENCIA
let asistencia = {
    Lunes: null,
    Martes: null,
    Miércoles: null,
    Jueves: null,
    Viernes: null
};
let siAsistio = 0;
let noAsistio = 0;

// Función para registrar la asistencia de un día
function registroAsistencia() {
    let diasSemana;

    // Bucle que se repite hasta que el usuario cancele o cierre
    do {
        diasSemana = prompt(`SELECCIONE DIA PARA REGISTRAR ASISTENCIA:\n
            1. LUNES\n
            2. MARTES\n
            3. MIERCOLES\n
            4. JUEVES\n
            5. VIERNES\n
            6. SABADO\n
            7. DOMINGO`)

        if (diasSemana === null || diasSemana === "") break; // salir si el usuario cancela

        diasSemana = parseInt(diasSemana); // convertir a número

        //Verifica Si el día está entre lunes y viernes
        if (diasSemana >= 1 && diasSemana <= 5) {
            const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
            const diaSeleccionado = dias[diasSemana - 1];

            // Verifica si ya se registró asistencia para ese día
            if (asistencia[diaSeleccionado] !== null) {
                alert(`Ya habías registrado asistencia para ${diaSeleccionado}`);
                continue;
            }

            let respuesta = prompt(`Registrar asistencia:\n
        1.SI asistio\n
        2.NO asistio`)

            // Si asistió
            if (respuesta === "1") {
                asistencia[diaSeleccionado] = true;
                alert("ASISTENCIA REGISTRADA : SI ASISTIO")
                siAsistio++;

                // Si no asistió
            } else if (respuesta === "2") {
                asistencia[diaSeleccionado] = false;
                alert("SE REGISTRO ASISTENCIA : NO ASISTIO")
                noAsistio++;
            }
            else {
                alert("NO SE REGISTRO LA ASISTENCIA")
                continue;
            }

            // Si es sábado o domingo
        } else if (diasSemana > 5 && diasSemana < 8) {
            alert("HOY NO HAY CLASES")
        }
        else {
            alert("INGRESE UN DIA VALIDO")
        }

    } while (true);
}





//2.RESUEMEN DE LA ASISTENCIA
function resumenAsistencia() {
    let resumen = "RESUMEN DE ASISTENCIA:\n\n";
    for (let dia in asistencia) {
        if (asistencia[dia] === true) {
            resumen += `${dia}: Asistió\n`;
        } else if (asistencia[dia] === false) {
            resumen += `${dia}: No asistió\n`;
        } else {
            resumen += `${dia}: No registrado\n`;
        }
    }

    alert(resumen);
}




//3.MODIFICAR ASISTENCIA DE UN DIA 
function modificarAsistencia() {
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

    do {
        let dia = prompt(`Seleccione dia para modificar la aistencia\n
            1. LUNES\n
            2. MARTES\n
            3. MIERCOLES\n
            4. JUEVES\n
            5. VIERNES\n
            6. SABADO\n
            7. DOMINGO`)

        // Si el usuario cancela o no escribe nada, salir de la función
        if (dia === null || dia === "") return;

        // Convertir la respuesta a número
        dia = parseInt(dia);

        let diaNombre;
        if (dia >= 1 && dia <= 5) {
            //Busca el dia ingresado
            diaNombre = dias[dia - 1];
            //REvisa si hay asistencia registrada para ese dia 
            if (asistencia[diaNombre] === null) {
                alert(`${diaNombre} aún no tiene asistencia registrada.`);
                continue;
            }
        } else if (dia > 5 && dia < 8) {
            alert("HOY NO HAY CLASES")
            continue;
        }
        else {
            alert("INGRESE UNA OPCION VALIDA")
            continue;
        }

        let nueva = prompt(`Nueva asistencia para ${diaNombre}:\n1. Sí asistió\n2. No asistió`);

        nueva = parseInt(nueva);

        if (nueva === 1) {
            if (asistencia[diaNombre] === false) {
                siAsistio++;
                noAsistio--;
            }
            //Modificar la asistencia a: si asistio
            asistencia[diaNombre] = true;
            alert("Su asistencia se modifico a: Si asistio")

        }
        else if (nueva === 2) {
            if (asistencia[diaNombre] === true) {
                siAsistio--;
                noAsistio++;
            }
            //Modificar la asistencia a: No asistio
            asistencia[diaNombre] = false;
            alert("Su asistencia se modifico a: No asistio")
        } else {
            alert("Ingrese una opcion valida")
            continue;
        }
    } while (true)
}





function mostrarPorcentaje() {
    let porcentaje, porcentaje2;
    let total = 5;
    porcentaje = (siAsistio / total) * 100;
    porcentaje2 = (noAsistio / total) * 100;

    alert(`        RESULDATOS DE SU ASISTENCIA :\n
        Su porcentaje de asistencia es del:  ${porcentaje}%\n
        Su porcentaje de inasistencia es del:  ${porcentaje2}%`)
}




function reiniciarRegistro() {
    let confirmar = parseInt(prompt(`Estas seguro que quieres eliminar el registro:\n
        1.Si\n
        2.No`))

    if (confirmar === 1) {
        // Reinicia el objeto de asistencia
        for (let dia in asistencia) {
            asistencia[dia] = null;
        }

        // Reinicia los contadores
        siAsistio = 0;
        noAsistio = 0;

        alert("Eliminando registros....")
        alert("Registro de asistencia reiniciado correctamente");

    } else if (confirmar === 2) {
        alert("Reiniciar registro a sido cancelado")
    } else {
        alert("Ingrese una opcion valida")

    }
}



function menuOpciones() {
    let option;
    do {
        //MENU CON OPCIONES
        option = prompt(`MENU DE OPCIONES:\n
            1. REGISTRAR ASISTENCIA DE UN DIA\n
            2. MOSTRAR RESUMEN DE ASISTENCIA\n
            3. MODIFICAR ASISTENCIA DE UN DIA\n
            4. MOSTAR PORCENTAJE DE ASISTENCIA\n
            5. REINICIAR REGISTRO SEMANAL\n
            6. SALIR`)



        switch (option) {
            case "1":
                registroAsistencia()
                break;

            case "2":
                resumenAsistencia()
                break;

            case "3":
                modificarAsistencia()
                break;

            case "4":
                mostrarPorcentaje()
                break;
            case "5":
                reiniciarRegistro()
                break;
            case "6":
                option = null;
                alert("Saliendo....")
                break;
            default:
                alert(`OPCION INVALIDA: INGRESE OTRA OPCION`)
        }
    } while (option !== null);
}

// Ejecutar el menú principal al inicio
menuOpciones()
