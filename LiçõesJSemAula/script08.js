function potenciaUser(){
    let base = Number(prompt("Escreva a base da sua operação: "))
    let potencia = Number(prompt("Escreva a potência da sua operação: "))
    let contadora = 1;
    let resultado = 1;
    while (contadora <= potencia){
        resultado = resultado*base;
        contadora++
    }
    console.log (resultado)
}