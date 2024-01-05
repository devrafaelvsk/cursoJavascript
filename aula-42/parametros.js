function dobro(x){
    alert("O texto o dobro de " + x + " é " + (x * 2))
}

//dobro(5)
//dobro(7)

//dobro()

function dizerOla(nome = "Mundo") {
    alert("Olá, " + nome + "!")
}

//dizerOla("isaque")
//dizerOla()

//function soma(a, b, c, d) {
    alert("Resultado da soma é " + (a + b + c + d))
//}

soma(7, 6, 4, 5)

function criarUsuario(nome, gmail, senha, tipo){
    const usuario = {
        nome, //mesmo que nome: nome 
        gmail,
        senha,
        tipo
    }

    console.log(usuario)
}

criarUsuario("Rafael", "rafael@gmail.com", "123", "admin")
