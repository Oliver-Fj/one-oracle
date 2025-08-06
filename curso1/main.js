/* Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador. */

//let contador = 10; 

/* while (i<=10){
    console.log(i);
    i++
}; */


/* while (contador > 0){
    console.log(contador);
    contador --;
};
 */

//let limite = Number(prompt("hasta que número quieres contar?"))

/* while (numero>=0){
    console.log(numero)
    numero = numero -2;
} */



/* i = 0;

while(i <= limite){
    console.log(i);
    i ++;
} */


/*     
1 Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.

2 Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.

3 Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".

4 Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

5 Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.

6 Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.

7 Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

8 Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

9 Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

10 Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

11 Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

12 Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

13 Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola. */

/* console.log("Bienvenido a nuesttro desarrollo de ejercicios"); */

/* let nombre = "oliver";
console.log(`hola mi estimado amigo ${nombre}`)
alert(`hola mi estimado amigo ${nombre}`); */

/* let lenguaje = prompt("¿cual es el lenguaje de programación favorito?")
console.log(`mi lenguaje de programación favorito es: ${lenguaje}`); */

/* let valor1 = 25;
let valor2 = 34;
console.log(`el valor de la suma de ${valor1} + ${valor2} es: ${valor1 + valor2}`) */

/* let edad = Number(prompt("ingrese su edad por favor:"));

while(isNaN(edad)){
    alert("por favor ingrese su edad en formato numérico valido")
    edad = Number(prompt("vuelva a ingresar su edad por favor:"));
}

if (edad < 18){
    alert("Ud es menor de edad");
}else{
    alert("Ud es mayor de edad");
} */

/* let numero = Number(prompt("ingrese un valor numérico"));

while (isNaN(numero)) {
    alert("ingresa un valor numérico te dije: ");
    numero = Number(prompt("vuelva a ingresar un valor numérico"));
}

if (numero < 0) {
alert(`el numero: ${numero} es negativo`);
}else if(numero == 0 ){
    alert("el numero es cero")
}else {
    alert(`el numero ${numero} es positivo`)
} */

    i = 0; 
    while (i < 10){
        i++;
        console.log(i);
    }