//Carrousel

let indice = 0;
let slides = document.querySelector('.slides');
let totalSlides = slides.children.length; //busco las imagenes dentro del slide y las cuenta.

document.querySelector('.siguiente').addEventListener('click', () => {
    indice = (indice + 1) % totalSlides; // Sigue al siguiente índice
    actualizarCarrusel();
});

document.querySelector('.anterior').addEventListener('click', () => {
    indice = (indice - 1 + totalSlides) % totalSlides; // Vuelve al índice anterior. Se suma +totalSlides porque los índices no pueden ser negativos
    actualizarCarrusel();
});

function actualizarCarrusel() {
    let desplazamiento = -indice * 100; // Mueve el carrusel por 100vw por cada índice
    slides.style.transform = `translateX(${desplazamiento}vw)`; // Desplaza el contenedor
}


// Texto leer más 


let oculto = document.getElementById('oculto');
let toggleLink = document.getElementById('toggleLink');


toggleLink.addEventListener('click', toggleText);

function toggleText() {
    oculto.classList.toggle('mostrar'); //agrega o elimina la clase.

    // Cambiar entre "Read More" y "Read Less"
    if (oculto.classList.contains('mostrar')) { //.contains verifica si la clase existe. Si tiene la clase, significa que el texto se está mostrando, por lo que el texto del enlace cambia a "less".
        toggleLink.innerHTML = 'less';
    } else {
        toggleLink.innerHTML = '... more'; //Si no tiene la clase, el texto del enlace cambia a "... more", indicando que el usuario puede expandir el contenido.
    }
}



//Aumento y disminución de letra

let aumentar = document.getElementById('aumentarLetra');
let disminuir = document.getElementById('disminuirLetra');
let elementos = document.querySelectorAll('body');


const escala = 1.1; // El tamaño aumenta en un 10%
const escalaMinima = 0.5; // El tamaño mínimo será la mitad del tamaño original.
const escalaMaxima = 2; // El tamaño máximo será dos veces el tamaño original.

aumentar.addEventListener('click', () => {
    elementos.forEach(elemento => {  //forEach es como MAP.
        let tamanoActual = parseFloat(window.getComputedStyle(elemento).fontSize); // Obtiene el tamaño actual de la fuente, me da todos los estilos del documento.
        if (tamanoActual) { // Verifica que haya un tamaño definido
            let nuevoTamano = tamanoActual * escala; // Aumento del tamaño

            // Asegura que no se exceda el tamaño máximo
            if (nuevoTamano <= escalaMaxima * tamanoActual) {
                elemento.style.fontSize = `${nuevoTamano}px`;
            }
        }
    });
});

disminuir.addEventListener('click', () => {
    elementos.forEach(elemento => {
        let tamanoActual = parseFloat(window.getComputedStyle(elemento).fontSize); // Obtiene el tamaño actual de la fuente y me da todos los estilos del documento. 
        if (tamanoActual) { // Verifica que haya un tamaño definido
            let nuevoTamano = tamanoActual / escala; // Reducción del tamaño

            // Asegura que no se reduzca por debajo del tamaño mínimo
            if (nuevoTamano >= escalaMinima * tamanoActual) {
                elemento.style.fontSize = `${nuevoTamano}px`;
            }
        }
    });
});