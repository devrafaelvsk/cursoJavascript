const entrada1 = prompt("Informe o primeiro numero: ")
const entrada2 = prompt("Informe o segundo numero: ")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const subtração = x - y
const multiplicação = x * y 
const divisão = x / y

alert(
    "Resultadodos \n" +
    "\nSoma: " + soma +
    "\nSubtração: " + subtração +
    "\nMultiplicação: " + multiplicação +
    "\nDuvisão: " + divisão
)
