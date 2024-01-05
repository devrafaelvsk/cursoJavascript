let opcao = "5"

do {
    opcao = prompt(
        "Seja bem vindo!\n" +
        "\nEscolha uma das opções abaixo: " +
        "\n1 - opção um" +
        "\n2 - opção dois" +
        "\n3 - opção três" +
        "\n4 - opção quatro" +
        "\n5 - encerrar"
    )

    switch(opcao) {
        case "1":
            alert("Você escolheu a opção um meu parceiro!")
            break
        case "2":
            alert("A opção dois foi escolhida!")
            break
        case "3":
            alert("Opção 3 foi escolhida")
            break
        case "4":
            alert("Opção quatro foi escolhida!")
            break
        case "5":
            alert("Você escolheu a opção cinco.")
            alert("Encerrando...")
        default:
            alert("Opção invalida!")
    }

} while (opcao !== "5")
