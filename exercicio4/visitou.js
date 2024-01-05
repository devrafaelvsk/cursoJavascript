let cidadesvisitadas = [];

let nome = prompt("Boa noite, qual seu nome? ");
let resposta = prompt("Olá " + nome + ", você já visitou alguma cidade? (sim/não)");

while (resposta === "sim"){
    let cidadesVisitada = prompt("Qual cidade você visitou? ");
    cidadesvisitadas.push(cidadesVisitada);
    resposta = prompt("Visitou mais alguma? (sim/não)");
}

if (cidadesvisitadas.length > 0){
    console.log("O turista " +nome)
    console.log("visitou "+ cidadesvisitadas.length + " cidades")
    console.log("as cidades visitadas foram: " + cidadesvisitadas + ",  ");
} 
else{
    console.log("Você ainda não visitou nenhuma cidade.");
}
