//Importando o módulo 
const readline = require('readline-sync')

const num1 = parseInt(readline.question("Digite um numero: \n"))
const num2 = parseInt(readline.question("Digite outro numero: \n"))
const num3 = parseInt(readline.question("Digite mais um numero: \n"))
console.log(num1 + num2 + num3);