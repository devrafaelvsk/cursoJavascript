let velocidade = 80

while (velocidade > 0) {
    alert("O carro está a " + velocidade + " kilometros por hora")
    velocidade -= 20
    alert("Diminuindo 20 km/h")

    if (velocidade === 40) {
        break
    }
}

alert(" O carro parou.")
