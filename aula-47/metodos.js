let pessoa = {
    nome: "Rafael",
    idade: 26,
    dizerOla() {
        console.log("Ola, mundo meu nome é " + this.nome)
    }
}

console.log(pessoa)

pessoa.dizerOla()

