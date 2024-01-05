const imoveis = []
let opcao = ""

do{
    opcao = prompt(
        "Bem vindo ao Cadastro de Imóveis.\nTotal de imóveis: " + imoveis.length +
        "\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
    )

    switch (opcao){
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:")
            imovel.quartos = prompt("Quantos quartos possui o imóvel?")
            imovel.banheiros = prompt("Quantos banheiros possui o imóvel?")
            imovel.garagem = prompt("Possui garagem? (sim/não)")

            const confirma = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietário: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui Garagem? " + imovel.garagem
              )
            if (confirma){
                imoveis.push(imovel)
            }
            alert("Imovel salvo com sucesso!")
            break
        case "2":
            for (let i = 0; i < imoveis.length; i ++){
                alert(
                    "Imovel " + (i + 1) +
                    "\nProprietários: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nPossui garagem? " + imoveis[i].garagem1
                )
            }
            break
        case "3":
            alert("Saindo...")
            break
        default:
            alert("Opção inválida!")
            break
    }

}while (opcao !== "3");
