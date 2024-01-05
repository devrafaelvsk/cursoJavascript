function cacularAreaTriangolo() {
    const base = parseFloat(prompt("Informe a base do triângolo: "))
    const altura = parseFloat(prompt("Informe a altura: "))
    return base * altura / 2
}

function calcularAreaRetangulo() {
    const base = parseFloat(prompt("Informe a base do retangulo: "))
    const altura = parseFloat(prompt("Informe a altura do retangulo: "))
    return base * altura
}

function calcularAreaQuadrado() {
    const lado = parseFloat(prompt("Informe a área do quadrado: "))
    return lado * lado
}

function calcularAreaTrapezio() {
    const baseMenor = parseFloat(prompt("Informe a base menor do trapezio: "))
    const baseMaior = parseFloat(prompt("Informe a base maior do trapezio: "))
    const altura = parseFloat(prompt("Informe a altura do trapezio: "))
    return (baseMaior + baseMenor) * altura / 2
}

function calcularCirculo() {
    const raio = parseFloat(prompt("Informe o raio do curculo: "))
    return (3.14 * raio * raio)
}

function exibirMenu() {
    return prompt(
        "Calculadora Geométrica\n"+
        "1. Calcular área de triângolo\n" +
        "2. Calcular área de retângulo\n" +
        "3. Calcular área de quadrado\n" +
        "4. Calcular área de trapézio\n" +
        "5. Calcular área de círculo\n" +
        "6. sair\n"
    )
}

function executar() {
    let opcao = ""

    do{
        opcao = exibirMenu()
        let resultado

        switch (opcao) {
            case "1":
                resultado = cacularAreaTriangolo()
                break;
            case "2":
                resultado = calcularAreaRetangulo()
                break
            case "3":
                resultado = calcularAreaQuadrado()
                break
            case "4":
                resultado = calcularAreaTrapezio
                break
            case "5":
                resultado = calcularCirculo()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção invalida!")
                break;
        }
        if (resultado) {
            alert("Resultado: " + resultado)
        }
    }while (opcao !== "6");
}
executar()
