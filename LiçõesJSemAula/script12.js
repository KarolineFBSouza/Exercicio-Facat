function MediaAritmética() {
    let numero = 50;
    let acumuladora = 0;
    let pares = 0;
    while (numero < 71) {
        if (numero % 2 == 0) {
            acumuladora = acumuladora + numero
            pares + 1
        }
        numero++
    }
    let media = acumuladora/pares
    console.log("A soma dos valores pares de 50 a 70: " +media+ "Os números pares de 50 a 70 é: " +pares)
}