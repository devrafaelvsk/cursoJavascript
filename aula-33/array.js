const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)


//adicionar elementos
//push no final
arr .push("Boramir")
arr .push("Boramir")
console.log(arr)

//unshift no começo
arr .unshift("teste")
console.log(arr)

//remover elementos do final
//pop
let ultimoElemento = arr. pop()
console.log(arr)
console.log(ultimoElemento)

//shift remover no começo
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

//pesquisar um elemento se existe 
//includes
const inclui = arr.includes("Gandalf")
console.log(inclui)

//indexOf saber a posição 
const indice = arr.indexOf("Gandalf")
console.log(indice)

//cortar e concatenar 
//slice
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

//concat concatena tudo, junta 
const sociedade = hobbits.concat(outros, "SALVE")
console.log(sociedade)

//substituição dos elementos //remover elementos
//splice
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o cinzento")
console.log(sociedade)
console.log(elementosRemovidos)

//Iterar sobre os elementos //fazer a repetição
for (let indice = 0; indice < sociedade.length; indice++){
    const elemento = sociedade[indice]
    console.log(elemento + "se encontra na posição " + indice)
}
