function Conversao() {
    let celcius = 10;
    let farenheint = 0;
    while (celcius <= 100) {
        farenheint = (9 * celcius + 160) / 5
        console.log("Os graus em Celcius são:" + celcius + "º e o valor em Farenheint é: " + farenheint)
        celcius = celcius + 10
    }
}