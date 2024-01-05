let numero = parseInt(prompt("Informe um número para a tabuada: "));

if (isNaN(numero)) {
    console.log("Por favor, informe um número válido.");
} else {
    let tabuadaString = "";

    for (let i = 1; i <= 20; i++) {
        let resultado = numero * i;
        tabuadaString += numero + " x " + i + " = " + resultado + "\n";
    }
    alert("Tabuada de " + numero + ":\n" + tabuadaString);
}
