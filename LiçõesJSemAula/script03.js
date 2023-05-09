function tabuada() {
    let numero = parseInt(prompt("Digite um número: "))
    let contadora = 1;
    multiplicacao = 0;
    while (contadora < 11) {
        multiplicacao = contadora * numero
        
        document.getElementById(`${contador}`).innerHTML = (`${numero} X ${contador} = ${multiplicacao}`)

            (`${contador} `)

        contador++;
    }
}