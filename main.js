
1.- // Convierte la siguiente función en una función flecha:

function saludar() {
  return "Hola";
}
// RESPUESTA:

const saludar = () => "Hola";

2.- // Convierte la siguiente función en una función flecha en línea:

function division(a,b) {
  return a / b;
}

 // RESPUESTA:

 const division = (a, b) => a / b;


3.- // Convierte la siguiente función en una función flecha:

function miNombre(nombre) {
  return `Mi nombre es ${nombre}`;
}

// Esta función recibe un nombre y devuelve una frase con ese nombre.
const miNombre = (nombre) => `Mi nombre es ${nombre}`;


4.- // Convierte las siguientes funciones en funciones flecha:

function test2() {
  console.log("Función test 2 ejecutada.");
}

function test1(callback) {
  callback();
}

// test2 simplemente imprime un mensaje en la consola.
const test2 = () => {
    console.log("Función test 2 ejecutada.");
  };
  
  // test1 recibe una función (callback) como argumento y la ejecuta.
  const tesT9 = (callback) => {
    callback();
  };
  

// 2. Foreach: Utiliza el siguiente array para resolver los próximos ejercicios: 
      
let gente = [
        {
          nombre: "Jamiro",
          edad: 45,
        },
        {
          nombre: "Juan",
          edad: 35,
        },
        {
          nombre: "Paco",
          edad: 34,
        },
        {
          nombre: "Pepe",
          edad: 14,
        },
        {
          nombre: "Pilar",
          edad: 24,
        },
        {
          nombre: "Laura",
          edad: 24,
        },
        {
          nombre: "Jenny",
          edad: 10,
        },
      ];


 // 1. 1 Crea un array con la gente mayor de 25 años y muéstralo por consola. 

// RESPUESTA: Creamos un nuevo array con la gente mayor de 25 años usando forEach.

let genteMayorDe25 = [];
gente.forEach(persona => {
  if (persona.edad > 25) {
    genteMayorDe25.push(persona);
  }
});
console.log(genteMayorDe25);

    
// Explicación: Usamos forEach para recorrer el array gente. Si la edad de la persona es mayor de 25, la agregamos a un nuevo array genteMayorDe25.

 // 1. 2 Crea un array con la gente que empieza por J. 

// RESPUESTA: Creamos un nuevo array con la gente cuyo nombre empieza por J usando forEach.

let genteConJ = [];
gente.forEach(persona => {
  if (persona.nombre.startsWith("J")) {
    genteConJ.push(persona);
  }
});
console.log(genteConJ);

 // Explicación: forEach recorre el array gente y verifica si el nombre empieza con "J" usando el método startsWith. Si es cierto, la persona se agrega al nuevo array.


//  3. Map

// Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.

// Usamos filter para devolver un array con la gente mayor de 25 años.
const genteMayorDe25Map = gente.filter(persona => persona.edad > 25);
console.log(genteMayorDe25Map);

// Explicación: filter recorre el array y devuelve solo las personas que cumplen la condición (edad mayor a 25). Es similar a forEach pero devuelve un nuevo array automáticamente.




//Crea un array con la gente que empieza por J. 

// Usamos filter para devolver un array con las personas cuyo nombre empieza con J.
const genteConJMap = gente.filter(persona => persona.nombre.startsWith("J"));
console.log(genteConJMap);


//Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:

// const numbers = [ 4, 5, 6, 7, 8, 9, 10];
// Resultado esperado: [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]

// Creamos un nuevo array donde cada número se eleva a sí mismo.
const numbers = [4, 5, 6, 7, 8, 9, 10];
const elevado = numbers.map(num => num ** num);
console.log(elevado);

// Explicación: Usamos map para recorrer el array numbers. El operador ** eleva cada número a sí mismo (por ejemplo, 4 elevado a 4).


// 4. Filter: 1.1 Crea un segundo array que devuelva los impares
 const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 // Filtramos los números impares del array numbers.
const elementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const impares = elementos.filter(num => num % 2 !== 0);
console.log(impares);

//Explicación: filter devuelve solo los números que son impares. Usamos % 2 !== 0 para determinar si un número es impar (si no es divisible entre 2).



// 1.2 Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
 const food = [
        { name: 'Tempeh', isVeggie: true },
        { name: 'Cheesbacon burguer', isVeggie: false },
        { name: 'Tofu burguer', isVeggie: true },
        { name: 'Entrecot', isVeggie: false }
      ];
      /* [
          'Que rico Tempeh me voy a comer!',
          'Que rica Tofu burguer me voy a comer!'
         ]
      */

// Creamos un nuevo array con frases sobre los platos veganos.

const foodListt = [
    { name: 'Tempeh', isVeggie: true },
    { name: 'Cheesbacon burguer', isVeggie: false },
    { name: 'Tofu burguer', isVeggie: true },
    { name: 'Entrecot', isVeggie: false }
  ];
  
  const platosVeganos = foodListt
    .filter(plato => plato.isVeggie) // Filtra solo los platos veganos
    .map(plato => `Qué rico ${plato.name} me voy a comer!`);
  console.log(platosVeganos);


  // Explicación: Primero filtramos los platos que son veganos (isVeggie: true), y luego usamos map para crear frases con esos platos.


// 5. Reduce: Dado el siguiente array, obtén la multiplicación de todos los elementos del array:


// Usamos reduce para multiplicar todos los números del array.
const num = [39, 2, 4, 25, 62];
const multiplicacion = num.reduce((total, num) => total * num, 1);
console.log(multiplicacion);

// Explicación: reduce toma cada número del array y lo multiplica con el acumulador total. Empezamos con 1 como valor inicial.
