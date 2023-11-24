// CONTENEDORES DE CASA
const casaButton = document.getElementById("unifamiliarButton");
const casa = document.getElementById("parte1");
// const casa1 = document.getElementById("formContainner");
const GenerarButtonCasa = document.getElementById("GenerarCasa");

// CONTENEDORES EDICIFICO
const edificacionButton = document.getElementById("edificacionButton");
const edificacion = document.getElementById("edificacion");
const GenerarButtonEdificio = document.getElementById("GenerarButtonEdificio");
// content
const unifamiliarContent = document.getElementById("unifamiliarContent");
const multifamiliarContent = document.getElementById("multifamiliarContent");
//content de imagenes
const imagenCasa = document.getElementById("plano1");
const imagenDepartamento = document.getElementById("plano2");
// para que no aparezaca al inicio de la pagina
    unifamiliarContent.style.display = "none";
    casa.style.display="none";
    edificacion.style.display = "none";
    multifamiliarContent.style.display="none";
    // imagenCasa.style.display="none";
    // imagenDepartamento.style.display="none";
    // GenerarButtonEdificio.style.display="none";
// cuando se elije una opcion
casaButton.addEventListener("click",() => {
    unifamiliarContent.style.display = "none";
    multifamiliarContent.style.display = "none";
    edificacion.style.display = "none";
    casa.style.display = "block";
    imagenDepartamento.style.display="none";
    GenerarButtonCasa.addEventListener("click", () => {
        const pisosCasa = document.getElementById("pisos").value;
        const anchoCasa = document.getElementById("ancho").value;
        const EscaleraCasa = document.getElementById("escalera").value;
        const isValidSelectio = pisosCasa !== "SO"  && anchoCasa !== "SO" && EscaleraCasa !== "SO";

            if (pisosCasa === "1"  && isValidSelectio) {
                unifamiliarContent.style.display = "block";
                
            } else {
                unifamiliarContent.style.display = "none";
                if (!isValidSelectio) {
                    mensajeDeAlerta();
                } else {
                    VersionPremiun();
                }
            }
            
        });
    
});
edificacionButton.addEventListener("click", () => {
    unifamiliarContent.style.display = "none";
    multifamiliarContent.style.display = "none";
    casa.style.display = "none";
    edificacion.style.display = "block";
    imagenCasa.style.display="none";
    GenerarButtonEdificio.addEventListener("click", () => {
            const pisos = document.getElementById("edificio").value;
            const tipoVivienda = document.getElementById("tipo").value;
            const anchoEdificio = document.getElementById("ancho22").value;
            const EscaleraEdificio = document.getElementById("escalera22").value;

            const isValidSelection = pisos !== "SO" && tipoVivienda !== "SO" && anchoEdificio !== "SO" && EscaleraEdificio !== "SO";

            if (pisos === "1" && tipoVivienda === "tipo_1" && isValidSelection) {
                multifamiliarContent.style.display = "block";
                
            } else {
                multifamiliarContent.style.display = "none";
                if (!isValidSelection) {
                    mensajeDeAlerta();
                } else {
                    VersionPremiun();
                }
            }
            
        });
});
function pasarelaPagos() {
    unifamiliarContent.style.display = "none";
    multifamiliarContent.style.display="none";
    alert("===>PASARELA DE PAGOS");

}
function VersionPremiun() {
    unifamiliarContent.style.display = "none";
    multifamiliarContent.style.display="none";
    alert("Esta Opcion aun no esta Disponible en la Version Gratuita");

}
function mensajeDeAlerta() {
    unifamiliarContent.style.display = "none";
    multifamiliarContent.style.display="none";
    alert("Falta elegir alguna opción válida");

}
function mensajeDeAlerta2() {
    alert("Falta elegir alguna opción válida");

}
// --------------------------------------------------
// functions para EDIFICIO
// --------------------------------------------------
// Obtén los elementos de los select
const anchoSelect2 = document.getElementById("ancho22");
const largoSelect2 = document.getElementById("largo22");
const escaleraSelect2 = document.getElementById("escalera22");
const cuartoSelect2 = document.getElementById("cuartos22");
const banosSelect2 = document.getElementById("banos22");
const terrazaSelect2 = document.getElementById("terraza22");
const LavanderiaSelect2 = document.getElementById("lavanderia22");

anchoSelect2.addEventListener("change", actualizarOpciones);

function actualizarOpciones() {
    const selectedAncho2 = anchoSelect2.value;

    // Limpiar opciones actuales de "Largo"
    largoSelect2.innerHTML = "";
    escaleraSelect2.innerHTML = "";
    terrazaSelect2.innerHTML="";
    LavanderiaSelect2.innerHTML = "";
    cuartoSelect2.innerHTML="";
    banosSelect2.innerHTML="";
    // Definir las opciones de "Largo" según el "Ancho" seleccionado
    if (selectedAncho2 === "6") {
        largoSelect2.add(new Option("17 metros", "17"));
        
        escaleraSelect2.add(new Option("Seleccionar una Opcion","SO"));
        escaleraSelect2.add(new Option("Medio","2"));
        escaleraSelect2.add(new Option("Fondo","3"));
        terrazaSelect2.add(new Option("Si"));
        LavanderiaSelect2.add(new Option("No"));
        escaleraSelect2.addEventListener("change", actualizarCuartosYBanos);
    } else if (selectedAncho2 === "7") {
        largoSelect2.add(new Option("18 metros", "18"));
        // 
        LavanderiaSelect2.innerHTML="";
        escaleraSelect2.add(new Option("Medio","2"));
        cuartoSelect2.add(new Option("4"));
        terrazaSelect2.add(new Option("Si"));
        banosSelect2.add(new Option("2"));
        LavanderiaSelect2.add(new Option("No"));
    } else if (selectedAncho2 === "8") {
        largoSelect2.add(new Option("15 metros", "15"));
        //
    
        // banosSelect2.innerHTML="";
        escaleraSelect2.add(new Option("Seleccionar una opcion","SO"));
        escaleraSelect2.add(new Option("Adelante","1"));
        escaleraSelect2.add(new Option("Medio","2"));
        escaleraSelect2.add(new Option("Fondo","3"));
        terrazaSelect2.add(new Option("No"));
        banosSelect2.add(new Option("2"));
        escaleraSelect2.addEventListener("change", actualizarCuartosLavanderia);
    }

}
function actualizarCuartosYBanos() {
    
    const selectedEscalera2 = escaleraSelect2.value;
    cuartoSelect2.innerHTML = "";
    banosSelect2.innerHTML = "";

    if (selectedEscalera2 === "2") {
        cuartoSelect2.add(new Option("Seleccionar una Opcion","SO"));
        cuartoSelect2.add(new Option("2 (No disponible)","ND"));
        cuartoSelect2.add(new Option("3 (No disponible)","ND"));
        cuartoSelect2.add(new Option("4"));
        banosSelect2.add(new Option("Seleccionar una Opcion","SO"));
        banosSelect2.add(new Option("1 (No disponible)","ND"));
        banosSelect2.add(new Option("2"));
        banosSelect2.add(new Option("3 (No disponible)","ND"));
    } else if (selectedEscalera2 === "3") {
        cuartoSelect2.add(new Option("Seleccionar una Opcion","SO"));
        cuartoSelect2.add(new Option("2"));
        cuartoSelect2.add(new Option("3 (No disponible)","ND"));
        cuartoSelect2.add(new Option("4 (No disponible)","ND"));
        banosSelect2.add(new Option("Seleccionar una Opcion","SO"));
        banosSelect2.add(new Option("1"));
        banosSelect2.add(new Option("2 (No disponible)","ND"));
        banosSelect2.add(new Option("3 (No disponible)","ND"));
    }
  
}
function actualizarCuartosLavanderia() {
    const selectedEscalera2 = escaleraSelect2.value;
    cuartoSelect2.innerHTML = "";
    LavanderiaSelect2.innerHTML = "";
    // console.log({cuartoSelect2,selectedEscalera2});
    if (selectedEscalera2 === "1") {
        cuartoSelect2.add(new Option("2"));
        LavanderiaSelect2.add(new Option("No"));
    }else if (selectedEscalera2 === "2") {
        cuartoSelect2.add(new Option("3"));
        LavanderiaSelect2.add(new Option("No"));
    } else if (selectedEscalera2 === "3") {
        cuartoSelect2.add(new Option("3"));
        LavanderiaSelect2.add(new Option("Si"));
    }
    else{console.log("else");}
    
}

// Llamar a actualizarOpciones inicialmente para configurar las opciones según el valor inicial de "Ancho"
// actualizarOpciones();


let imagenSrc2 = "";
function mostrarImagen2() {
    
    const ancho2 = document.getElementById("ancho22").value;
    const largo2 = document.getElementById("largo22").value;
    const escalera2 = document.getElementById("escalera22").value;
    const cuartos2 = document.getElementById("cuartos22").value;
    const Terraza2 = document.getElementById("terraza22").value;
    const banos2 = document.getElementById("banos22").value;
    const sala2 = document.getElementById("sala22").value;
    const comedor2 = document.getElementById("comedor22").value;
    const cocina2 = document.getElementById("cocina22").value;
    const lavanderia2 = document.getElementById("lavanderia22").value;
    
    const imagen2 = document.getElementById("imagen2")
        //PLANO 1
    if (ancho2 === "6" &&
        largo2 === "17" &&
        escalera2 === "2" &&
        cuartos2 === "4" &&
        Terraza2 === "Si" &&
        banos2 === "2" &&
        sala2 === "Si" &&
        comedor2 === "Si" &&
        cocina2 === "Si" &&
        lavanderia2 === "No"
        ){
        imagenSrc2 = "https://procero.tech/wp-content/uploads/2023/11/plano1.webp"; // URL de la primera imagen
    }
    // PLANO 2
    
    else if (
        ancho2 === "6" &&
        largo2 === "17" &&
        escalera2 === "3" &&
        cuartos2 === "2" &&
        Terraza2 ==="Si"&&
        banos2 === "1" &&
        sala2 === "Si" &&
        comedor2 === "Si" &&
        cocina2 === "Si" &&
        lavanderia2 === "No"
    ) {
        imagenSrc2 = "https://procero.tech/wp-content/uploads/2023/11/plano1.webp"; // Reemplaza con la URL de la segunda imagen
     }
    //plano 3
    else if (
        ancho2 === "8" &&
        largo2 === "15" &&
        escalera2 === "2" &&
        cuartos2 === "3" &&
        Terraza2 === "No" &&
        banos2 === "2" &&
        sala2 === "Si" &&
        comedor2 === "Si" &&
        cocina2 === "Si" &&
        lavanderia2 === "No"
    ) {
        imagenSrc2 = "https://procero.tech/wp-content/uploads/2023/11/plano1.webp"; // URL de la tercera imagen
    }
   
    //PLANO 4
    else if (
        ancho2 === "7" &&
        largo2 === "18" &&
        escalera2 === "2" &&
        cuartos2 === "4" &&
        Terraza2 === "Si" &&
        banos2 === "2" &&
        sala2 === "Si" &&
        comedor2 === "Si" &&
        cocina2 === "Si" &&
        lavanderia2 === "No"
    ) {
        
        imagenSrc2 = "https://procero.tech/wp-content/uploads/2023/11/plano1.webp"; // Reemplaza con la URL de la cuarta imagen
    }
    //PLANO 5
    else if (
        ancho2 === "8" &&
        largo2 === "15" &&
        escalera2 === "1" &&
        cuartos2 === "2" &&
        Terraza2 === "No" &&
        banos2 === "2" &&
        sala2 === "Si" &&
        comedor2 === "Si" &&
        cocina2 === "Si" &&
        lavanderia2 === "No"
    ) {
        imagenSrc2 = "https://procero.tech/wp-content/uploads/2023/11/plano1.webp"; // URL de la quinta imagen
    }
    //PLANO 6
    else if (
        ancho2 === "8" &&
        largo2 === "15" &&
        escalera2 === "3" &&
        cuartos2 === "3" &&
        Terraza2 === "No" &&
        banos2 === "2" &&
        sala2 === "Si" &&
        comedor2 === "Si" &&
        cocina2 === "Si" &&
        lavanderia2 === "Si"
    ) {
        imagenSrc2 = "https://procero.tech/wp-content/uploads/2023/11/plano1.webp"; // URL de la sexta imagen
    }
    else if(cuartos2==="ND"||banos2==="ND"){
        imagen2.src = imagenSrc2;
        imagen2.style.display = "none";
        pasarelaPagos();
        actualizarOpciones();
        
    }
    else if(cuartos2==="SO"||banos2==="SO"){
        imagen2.src = imagenSrc2;
        imagen2.style.display = "none";
        mensajeDeAlerta2();
        
        
    }
    
    if (imagenSrc2 === "") {
        imagen2.style.display = "none"; // Ocultar la imagen si no se encontró una correspondencia
        
    } else {
    
        imagen2.src = imagenSrc2;
        imagen2.style.display = "block"; // Mostrar la imagen si se encontró una correspondencia
        // document.getElementById("descargarButton2").style.display = "block";
    }
    
}



// --------------------------------------------------
// functions para CASA
// --------------------------------------------------

const anchoSelect = document.getElementById("ancho");
const largoSelect = document.getElementById("largo");
const escaleraSelect = document.getElementById("escalera");
const cuartoSelect = document.getElementById("cuartos");
const banosSelect = document.getElementById("banos");
const LavanderiaSelect = document.getElementById("lavanderia");

anchoSelect.addEventListener("change", actualizarOpcionesCasa);

function actualizarOpcionesCasa() {
    const selectedAncho = anchoSelect.value;

    // Limpiar opciones actuales de "Largo"
    largoSelect.innerHTML = "";
    escaleraSelect.innerHTML = "";
    LavanderiaSelect.innerHTML = "";
    cuartoSelect.innerHTML="";
    banosSelect.innerHTML="";
    // Definir las opciones de "Largo" según el "Ancho" seleccionado
    if (selectedAncho=== "9.22") {
        largoSelect.add(new Option("21.19 metros", "21.19"));
        // Definir opciones de "Escalera" para ancho 6
        // escaleraSelect2.innerHTML = "";
        // terrazaSelect2.innerHTML="";
        // LavanderiaSelect2.innerHTML="";
        
        escaleraSelect.add(new Option("Seleccionar una Opcion","SO"));
        escaleraSelect.add(new Option("Medio","2"));
        LavanderiaSelect.add(new Option("Si"));
        escaleraSelect.addEventListener("change", actualizarCuartosYBanos2);
    } else {
      VersionPremiun();
    }
}
function actualizarCuartosYBanos2() {
    
    const selectedEscalera = escaleraSelect.value;
    cuartoSelect.innerHTML = "";
    banosSelect.innerHTML = "";

    if (selectedEscalera === "2") {
        cuartoSelect.add(new Option("Seleccionar una Opcion","SO"));
        cuartoSelect.add(new Option("2 (No disponible)","ND"));
        cuartoSelect.add(new Option("3"));
        cuartoSelect.add(new Option("4 (No disponible)","ND"));
        banosSelect.add(new Option("Seleccionar una Opcion","SO"));
        banosSelect.add(new Option("1 (No disponible)","ND"));
        banosSelect.add(new Option("2"));
        banosSelect.add(new Option("3 (No disponible)","ND"));
        
    }
}
function ValidarCuarto()
{
    const selectedCuarto = cuartoSelect.value;
    const selectedBano = banosSelect.value;
    if (selectedCuarto !==3||selectedBano!==2) {
        VersionPremiun();
    }
   

}
// function actualizarCuartosLavanderia2() {
//     const selectedEscalera = escaleraSelect.value;
//     cuartoSelect.innerHTML = "";
//     LavanderiaSelect.innerHTML = "";
//     console.log(selectedEscalera);
//     if (selectedEscalera === "1") {
//         cuartoSelect.add(new Option("2"));
//         LavanderiaSelect.add(new Option("No"));
//     }else if (selectedEscalera === "2") {
//         cuartoSelect.add(new Option("3"));
//         LavanderiaSelect.add(new Option("No"));
//     } else if (selectedEscalera === "3") {
//         cuartoSelect.add(new Option("3"));
//         LavanderiaSelect.add(new Option("Si"));
//     }
//     else{console.log("else");}
// }

// Llamar a actualizarOpciones inicialmente para configurar las opciones según el valor inicial de "Ancho"
// actualizarOpciones();

let imagenSrc = "";
function mostrarImagen() {
    
    const ancho = document.getElementById("ancho").value;
    const largo = document.getElementById("largo").value;
    const escalera = document.getElementById("escalera").value;
    const cuartos = document.getElementById("cuartos").value;
    const banos = document.getElementById("banos").value;
    const sala= document.getElementById("sala").value;
    const comedor = document.getElementById("comedor").value;
    const cocina = document.getElementById("cocina").value;
    const lavanderia = document.getElementById("lavanderia").value;
    const garaje = document.getElementById("garaje").value;
    const terraza = document.getElementById("terraza").value;
    
    const imagen = document.getElementById("imagen")
        //PLANO 1
    if (ancho === "9.22" &&
        largo === "21.19" &&
        escalera === "2" &&
        cuartos === "3" &&
        banos === "2" &&
        sala === "Si" &&
        comedor === "Si" &&
        cocina === "Si" &&
        lavanderia === "Si"&&
        garaje === "Si" &&
        terraza === "Si"
        ){
        imagenSrc = "https://procero.tech/wp-content/uploads/2023/11/plano1.webp"; // URL de la primera imagen
    }
   
    else if(cuartos==="ND"||banos==="ND"){
        imagen.src = imagenSrc;
        imagen.style.display = "none";
        VersionPremiun();
        actualizarOpcionesCasa();
        
    }
    else if(cuartos==="SO"||banos==="SO"){
        imagen.src = imagenSrc;
        imagen.style.display = "none";
        mensajeDeAlerta();
        
        
    }
    if (imagenSrc === "") {
        imagen.style.display = "none"; // Ocultar la imagen si no se encontró una correspondencia
        
    } else {
        imagen.src = imagenSrc;
        imagen.style.display = "block"; // Mostrar la imagen si se encontró una correspondencia
        // document.getElementById("descargarButton2").style.display = "block";
    }
    
}

function MensajeAlerta() {
    alert("Los demas pisos aun NO estan  habilitadas en la Version Gratuita");

}
   