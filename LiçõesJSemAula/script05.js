function Pares() {
    let soma = 0;
    let contadora = 1;
    while (contadora < 501) {
        if (contadora % 2 == 0) {
            soma += contadora;
        }
        contadora++
    }
    alert("A soma dos números pares de 1 até 500 é: "+soma)
}