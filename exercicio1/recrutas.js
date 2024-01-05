const primeiroNome = prompt("Informe o primeiro nome do recruta: ")
const sobrenome = prompt("Sobrenome do recruta: ")
const campoDeEstudo = prompt("Qual é o campo de estudo do recruta: ")
const anoDeNascimento = prompt("qual é o ano de nascimento do recruta?")

alert(
    "recruta cadastrado com sucesso! \n" + 
    "\n Nome completo: " + primeiroNome + "  " + sobrenome +
    "\n campo de estudo: " + campoDeEstudo +
    "\n Idade: " + (2022 - anoDeNascimento)
)
