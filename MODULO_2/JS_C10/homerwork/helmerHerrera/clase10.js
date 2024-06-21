// RETO CLASE 10

// const valor = (precio, envio) => {
//     const resultado = precio + envio
//     return resultado
// }
// const valorTotal = valor(2000, 20)
// console.log("El valor total del producto es: ",valorTotal);

// PRIMER PUNTO TAREA 10 CLASE 10

const serie = {
    titulo: "El paseo",
    numeroDetemporadas: 7,
    genero: "comedia",
    creador:"Dago Garcia",
    añoDelanzamiento: 2017
    }
console.log("Estos son los datos de la serie", serie);

// SEGUNDO PUNTO TAREA 10 CLASE 10

const persona = {
    nombre: "Jairo",
    edad: 35,
    peso: 75,
    altura: 1.70,
    esMayorDeEdad: true
    calcularImc: () => {
        const resultadoImc = persona.peso / (persona.altura * persona.altura)
        return resultadoImc
    }

    console.log("El indice de masa corporal es: ", resultadoImc)
    if (persona.esMayorDeEdad){
        console.log("La persona es mayor de edad")
    } else {"La persona es menor de edad"}
}
