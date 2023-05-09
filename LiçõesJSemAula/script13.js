function AreaTotal() {
    let loop = true;
    let AreaTotal = 0;
    let comodosTotais = 0;
    while (loop == true) {
        let comodo = prompt("Digite o nome do cômodo: ");
        let largura = Number(prompt("Digite a largura do cômodo:"));
        let comprimento = Number(prompt("Digite o comprimento do cômodo: "));
        let area = largura * comprimento
        AreaTotal += area
        comodosTotais += 1
        alert("A area do cômodo" + comodo + "é de:" + area + "m2")

        let escolha = prompt("Você deseja continuar (S) sim, (N) não: ")

        switch (escolha) {
            case "S":
                break;
            case "N":
                loop = false;
                break;
                default:
                break;
        }
    }
    alert ('A quantidade de cômodos é:' +comodosTotais+ "E a área total é de: " +AreaTotal)
}