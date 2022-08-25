const datos1 = document.querySelectorAll(".datoFrm1");// Recolecto los datos del 1º formulario
const btnFrm1 = document.querySelector(".btnFrm1");// Conecto el primer boton
btnFrm1.addEventListener("click", () => { // Agrego el primer evento al boton
    sdoForm(parseInt(datos1[1].value));
});

function sdoForm(cdn) {
    let h2 = document.createElement("h2")
    h2.innerHTML = "Ingrese notas"
    document.body.append(h2);

    for (i=1; i<=cdn; i++) {
        let input = document.createElement("input");
        input.className = "datos2";
        input.placeholder = `Nota ${i}`;
        input.type = 'number';
        document.body.append(input);
        document.body.append(document.createElement("br"));
    }// Creo el 2º formulario*/

    let boton = document.createElement('input');// Creo segundo boton de aceptar
    boton.type = 'button';
    boton.value = 'Aceptar';
    boton.className = "btnFrm2";
    document.body.append(boton);
    const btnFrm2 = document.querySelector('.btnFrm2'); // Conecto el segundo boton*/
    
    btnFrm2.addEventListener("click",() => {
        sumaNotas(parseInt(datos1[1].value));
    });

}

function sumaNotas(num) {
    const datos2 = document.querySelectorAll('.datos2'); // Recolecto los datos del 2º formulario
    let suma = 0
    for (i=0; i<num; i++) {
        let nota = parseFloat(datos2[i].value);
        suma += nota;
    }
    let prom = suma / num;
    const mensaje = () => {
        if (prom < 6) {
            Swal.fire({
                text: `El alumno ${datos1[0].value} tiene una nota de ${prom}`,
                icon: 'error',
                timer: 3000,
                confirmButtonText: 'Aceptar'
            })
        }else {
            Swal.fire({
                text: `El alumno ${datos1[0].value} tiene una nota de ${prom}`,
                icon: 'success',
                timer: 3000,
                confirmButtonText: 'Aceptar'
            })
        }
    }
    mensaje();
}
