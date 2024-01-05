function calcularMedia(a, b) {
    const media = (a + b) / 2
    return media
}

const resultado = calcularMedia(7, 2)

console.log(resultado)

function criarProduto(nome, preco) {
    const produto = {
        nome, //nome: nome
        preco, //preco: preco
        estoque: 1
    }
    return produto
}

const notebook = criarProduto("notebook", 2500)

console.log(notebook)

function areaRetangular(base, altura) {
    return base * altura
}

console.log(areaRetangular(3, 5))


function maioridada(idade) {
    if (idade >= 18) {
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}

console.log(maioridada(29))
console.log(maioridada(13))
