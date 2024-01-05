function criarUsuario(nome, gmail, senha, tipo = "admin"){ //parametros opsionais sempre no final
    const usuario = {
        nome, //mesmo que nome: nome 
        gmail,
        senha,
        tipo
    }

    console.log(usuario)
}

criarUsuario("Rafael", "rafael@gmail.com", "123")

function muitosParametros(nome, telefone, endereço, dataDeAniversario, email, senha){

}

function objetosComParametro(usuario){
    usuario.nome
    usuario.email

}

muitosParametros("nome", "telefone", "endereço", "aniversaio", "email", "SENHA")
//comparado com isso

const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    endereço: "",
    aniversario: "",
}

objetosComParametro(dadosDoUsuario) //fica muito mais claro e melhor de trabalhar
