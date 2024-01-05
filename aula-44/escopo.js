let pokemon = "Charmander"

function evoluir() {
    pokemon = "Charmeleon"
}

console.log(pokemon)
evoluir()
console.log(pokemon)

// Apenas variáveis declaradas com var são carregadas
// sempre no começo do código, acima de todo o resto
console.log(nome)
console.log(sobrenome)
var nome = "Isaac"
let sobrenome = "Pontes"
console.log(nome)
console.log(sobrenome)