let numeroSecreto = Math.floor(Math.random() * 100) + 1;
console.log(numeroSecreto);

let numeroUsuario = Number(prompt("ingrese un número del 1 al 100 por favor"));
let contador = 1;
//let palabraVez = "vez";

while (true) {
    // 1. PRIMERO validar que sea un número
    while (isNaN(numeroUsuario)) {
        alert("por favor ingrese un número válido");
        numeroUsuario = Number(prompt("ahora ingrese un número válido"));
    }

    // 2. SEGUNDO validar que esté en el rango
    while (numeroUsuario > 100 || numeroUsuario < 1) {
        alert("un número entre 1 y 100 dije:");
        numeroUsuario = Number(prompt("ingrese un número del 1 al 100:"));

        // Volver a validar que sea número después de la corrección
        while (isNaN(numeroUsuario)) {
            alert("por favor ingrese un número válido");
            numeroUsuario = Number(prompt("ahora ingrese un número válido"));
        }
    }

    console.log(numeroUsuario);

    // 3. TERCERO verificar si acertó
    if (numeroUsuario == numeroSecreto) {
        alert(`acertaste, ese es el número secreto, y lo hiciste en ${contador} ${contador == 1 ? "vez" : "veces"}`);
        break;
    }

    // 4. CUARTO dar pistas
    if (numeroUsuario > numeroSecreto) {
        alert("el número que ingresaste es mayor al numero secreto");
    } else {
        alert("el numero que ingresaste es menor que el número secreto");
    }

    // 5. QUINTO preparar siguiente iteración
    contador ++;
    //palabraVez = "veces";
    numeroUsuario = Number(prompt("ingrese otro número, por favor:"));
    if (contador > 4) {
        alert("alcanzaste el número maximo de vecer permitidas")
        break
    }
}



/* let numeroSecreto = 18;
let numeroUsuario = Number(prompt("ingrese el número por favor:"));

while (isNaN(numeroUsuario)){
    alert("No seas pendejo, cuñado. Ingresa un número válido.");
    numeroUsuario = Number(prompt("Intenta de nuevo, cuñadito:"));
}

console.log(numeroUsuario);

while (numeroSecreto != numeroUsuario) {
    if (numeroUsuario > numeroSecreto) {
        alert("No acertaste, cuñado. Tu número es mayor que el número secreto.");
    } else {
        alert("El número ingresado es menor que el número secreto");
    }

    numeroUsuario = Number(prompt("Intenta de nuevo, cuñado:"));
    console.log("Nuevo intento:", numeroUsuario);
}

alert(`¡Acertaste, cuñado! El número era ${numeroSecreto}`);
 */
//==================================== ====================================

/* let numeroSecreto = 4;
let numeroUsuario = 0;
while (numeroSecreto != numeroUsuario) {
    numeroUsuario = prompt("Ingrese un número del 1 al 10, cuñado:");
    console.log(numeroUsuario);
    if (numeroSecreto == numeroUsuario) {
        alert("acertaste, cuñado");
    }else {
        if (numeroUsuario > numeroSecreto) {
            alert("el número secreto es menor que el número ingresado, cuñado");
        }else{
            alert("el número secreto es mayor que el número ingresado, cuñado");
        }
    }
};
 */
/* ejercicio 1: validación del día de semana */

/* let diaSemana = prompt("Introduce el día de la semana");
let diaValidoMinuscula = diaSemana.toLowerCase().replace("á", "a").replace("é", "e");

let diaValido = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

if (!diaValido.includes(diaValidoMinuscula)){
    alert("Ese no es un día válido, cuñado. Por favor ingrese un día de la semana correcto.");
}else if (diaValidoMinuscula == "sabado" || diaValidoMinuscula == "domingo") {
    alert("¡Es fin de semana, cuñado! Disfruta tu día.");
}else{
    alert("Es un día de la semana, cuñado. ¡A trabajar!");
} */

/* ejercicio 2: valores positios o negativos  */

/* let numero = prompt("Digite un número:");
let numeroConvertido = parseInt(numero);

if (numeroConvertido > 0){
    alert("el numero es positivo pues cuñado");
}else if (numeroConvertido == 0){
    alert("el número es cero, cuñado");
}else {
    alert("el número es negativo, cuñado");
}
 */

/* let numero = prompt("Digite un número:");
let numeroConvertido = Number(numero);

if (isNaN(numeroConvertido)) {
    alert("no es un número válido, cuñado");
}else if (numeroConvertido === 0) {
    alert("el número es cero, cuñado");
}else if (numeroConvertido > 0) {
    alert("el número es positivo, cuñaito")
}else {
    alert("el número es negativo, cuñado");
    console.log(numeroConvertido);
} */

//ejercicio 3

/* let puntuacion = prompt("Ingrese su puntuación");
let puntuacionConvertida = Number(puntuacion);

if (isNaN(puntuacionConvertida)){
    alert("No es una puntuación válida, cuñado");
}else if (puntuacionConvertida >= 100){
    alert("Felicidades, cuñado! Has ganado");
}else {
    alert("Intentalo nuevamente cuñaito");
} */

// ejercicio 4
/* let saldo = Math.floor(Math.random()*100)+1;
console.log(saldo);

alert(`tu saldo actual cuñadito es de ${saldo} nuevos soles`); */

// ejercicio 5
/* let usuario = prompt("Ingrese su nombre de usuario cuñado");
alert(`Hola ${usuario} bienvenido al sistema de validación de usuarios`); */

// números aletorios entre 59 y 87
/* let number = Math.floor(Math.random()* (87-59+1))+59;
console.log(number); */

