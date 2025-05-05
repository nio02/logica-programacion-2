//Lógica-programación 2

const gradosCelsius = document.getElementById("grados");
const botonConvertir = document.getElementById("button");
const contenedor = document.getElementById("container");

function covertirFarenheit(grados){
    let valor = ((grados) * 9 / 5) + 32;
    return valor;
};

function convertirKelvin(grados){
    let valor = (grados + 273.15);
    return valor;
};

botonConvertir.addEventListener('click', (event) => {
    event.preventDefault();

    const valorCelsius = Number(gradosCelsius.value);

    if (isNaN(valorCelsius)){ //¿is not a number? Devuelve false si es un número, devuelve true si NO es un número
        alert("Por favor ingresa un número");
        return;
    }

    const celsius = document.createElement('p');
    celsius.textContent = `Grados Celsius ingresados: ${valorCelsius}`

    const kelvin = document.createElement('p');
    kelvin.textContent = `Grados Kelvin: ${convertirKelvin(valorCelsius)}`;

    const farenheit = document.createElement('p');
    farenheit.textContent = `Grados Fahrenheit: ${covertirFarenheit(valorCelsius)}`;

    contenedor.appendChild(celsius)
    contenedor.appendChild(kelvin);
    contenedor.appendChild(farenheit);

    gradosCelsius.value = "";
})