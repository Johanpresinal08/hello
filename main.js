

// genera numero secreto y contador
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 0;

let Insertar = document.getElementById('BarraNumero');

document.getElementById('enviar').addEventListener('click', () => {

    let valor = Insertar.value;


// condiciones
    if (valor === "") {
        alert("Por favor ingresa un número");
        return;
    }

    valor = parseInt(valor);

    if (isNaN(valor)) {
        alert("Debes ingresar un número válido");
        return;
    }

    intentos++;

    if (valor < numeroSecreto) {
        alert(`El número secreto es MAYOR. Intentos: ${intentos}`);
    } 
    else if (valor > numeroSecreto) {
        alert(`El número secreto es MENOR. Intentos: ${intentos}`);
    } 
    else {
        alert(`¡Correcto! Adivinaste en ${intentos} intentos.`);
    }
});


// Nuevo Juego
document.getElementById('reiniciar').addEventListener('click', () => {

    numeroSecreto = Math.floor(Math.random() * 10) + 1; 

    intentos = 0; 
    Insertar.value = ""; 

    alert("Nuevo juego iniciado. ¡Intenta adivinar el número!");
});


