//Exercicio 1
function somaDeDoisValores() {
  let A = 10;
  let B = 20;

  let temp = A;
  A = B;
  B = temp;

  console.log("Valor de A: " + A);
  console.log("Valor de B: " + B);
}

//Exercicio 2
function antecessor() {
  let valor = Number(prompt("Digite um valor:"));

  let antecessor = parseInt(valor) - 1;

  alert("O antecessor de " + valor + " é " + antecessor);
}

//Exercicio 3
function calculoRetangulo() {
  let base = prompt("Digite a base do retângulo:");

  let altura = prompt("Digite a altura do retângulo:");

  let area = base * altura;

  alert("A área do retângulo é " + area);
}

// Exercicio 4 
function lerIdade() {
  const idadeAnos = parseInt(prompt("Digite a idade em anos: "));
  const idadeMeses = parseInt(prompt("Digite a idade em meses: "));
  const idadeDias = parseInt(prompt("Digite a idade em dias: "));

  const idadeTotalDias = idadeAnos * 365 + idadeMeses * 30 + idadeDias;

  console.log(`A idade total em dias é: ${idadeTotalDias} dias.`);
}

// Exercicio 5
function percentualVotos() {
  const totalEleitores = prompt(
    "Informe o número total de eleitores do município:"
  );
  const votosBrancos = prompt("Informe o número de votos em branco:");
  const votosNulos = prompt("Informe o número de votos nulos:");
  const votosValidos = prompt("Informe o número de votos válidos:");
  const percBrancos = (votosBrancos / totalEleitores) * 100;
  const percNulos = (votosNulos / totalEleitores) * 100;
  const percValidos = (votosValidos / totalEleitores) * 100;

  console.log(`Percentual de votos em branco: ${percBrancos.toFixed(2)}%`);
  console.log(`Percentual de votos nulos: ${percNulos.toFixed(2)}%`);
  console.log(`Percentual de votos válidos: ${percValidos.toFixed(2)}%`);
}

// Exercicio 6
function reajusteSalario() {
  const salarioAtual = parseFloat(
    prompt("Digite o salário atual do funcionário:")
  );
  const percentualReajuste = parseFloat(
    prompt("Digite o percentual de reajuste (%):")
  );
  const novoSalario = salarioAtual * (1 + percentualReajuste / 100);

  console.log(`O novo salário do funcionário é R$${novoSalario.toFixed(2)}.`);
}

// Exercicio 7
function custoDoCarro() {
  const custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro:"));
  const porcentagemDistribuidor = 0.28;
  const porcentagemImpostos = 0.45;

  const custoFinal = custoFabrica * (1 + porcentagemDistribuidor + porcentagemImpostos);

  console.log(`O custo final do carro para o consumidor é R$${custoFinal.toFixed(2)}`);
}

// Exercicio 8
function salarioFinalCarro() {
  let numeroCarrosVendidos = parseInt(prompt("Digite o número de carros vendidos:"));
  let valorTotalVendas = parseFloat(prompt("Digite o valor total das vendas:"));
  let salarioFixo = parseFloat(prompt("Digite o salário fixo:"));
  let comissaoPorCarro = parseFloat(prompt("Digite o valor da comissão por carro vendido:"));
  let comissaoTotal = numeroCarrosVendidos * comissaoPorCarro;
  let porcentagemVendas = 0.05 * valorTotalVendas;
  let salarioFinal = salarioFixo + comissaoTotal + porcentagemVendas;

  alert("O salário final do vendedor é: R$" + salarioFinal.toFixed(2));
}

// Exercicio 9
function CF() {
  let temperaturaFahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));
  let temperaturaCelsius = (temperaturaFahrenheit - 32) * 5 / 9;

  alert("A temperatura em Celsius é: " + temperaturaCelsius.toFixed(2) + "°C");
}

// Exercicio 10
function PesoNotaAluno() {
  let nota1 = parseFloat(prompt("Digite a primeira nota:"));
  let nota2 = parseFloat(prompt("Digite a segunda nota:"));
  let nota3 = parseFloat(prompt("Digite a terceira nota:"));

  const peso1 = 2;
  const peso2 = 3;
  const peso3 = 5;

  let mediaFinal = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

  console.log("A média final é: " + mediaFinal.toFixed(2));
}

// Exercicio 11
function posiNeg10() {
  let valor = prompt("Digite um valor:");
  if (valor > 10) {
    console.log("É maior que 10!");
  } else {
    console.log("Não é maior que 10!");
  }
}

// Exercicio 12
function posiNeg() {
  let valor = Number(prompt("Digite um valor:"));
  if (valor >= 0) {
    console.log("O valor é positivo.");
  } else {
    console.log("O valor é negativo.");
  }
}

// Exercicio 13
function macas() {
  const precoUnidade = 1.3;
  const precoDuzia = 1.0;
  let quantidade = prompt("Quantas maçãs você deseja comprar?");
  quantidade = parseInt(quantidade);
  let precoTotal;
  if (quantidade >= 12) {
    precoTotal = quantidade * precoDuzia;
  } else {
    precoTotal = quantidade * precoUnidade;
  }

  console.log(`O preço total da compra é de R$ ${precoTotal.toFixed(2)}`);
}

// Exercicio 14 
function calcMediaAritimetica() {
  let nota1 = parseFloat(prompt("Insira a nota da primeira avaliação: "));
  let nota2 = parseFloat(prompt("Insira a nota da segunda avaliação: "));
  let media = (nota1 + nota2) / 2;
  if (media >= 6) {
    console.log(`Parabéns! Você foi aprovado(a) com média ${media.toFixed(2)}.`);
  } else {
    console.log(`Infelizmente, você foi reprovado(a) com média ${media.toFixed(2)}.`);
  }
}

// Exercicio 15
function idadeDeEleicao() {
  let anoAtual = prompt("Digite o ano atual:");
  let anoNascimento = prompt("Digite o ano de seu nascimento:");
  let idade = anoAtual - anoNascimento;
  if (idade >= 16) {
    console.log("Você pode votar este ano!");
  } else {
    console.log("Você não pode votar este ano.");
  }
}

// Exercicio 16
function valorMaior() {
  let valor1 = prompt("Digite o primeiro valor:");
  let valor2 = prompt("Digite o segundo valor:");

  if (valor1 > valor2) {
    console.log("O primeiro valor é maior: " + valor1);
  } else {
    console.log("O segundo valor é maior: " + valor2);
  }
}

// Exercicio 17
function valorOrdemCrescente() {
  let valor1 = prompt("Digite o primeiro valor:");
  let valor2 = prompt("Digite o segundo valor:");

  if (valor1 < valor2) {
    console.log(valor1 + ", " + valor2);
  } else {
    console.log(valor2 + ", " + valor1);
  }
}

// Exercicio 18
function horasDeXadrez() {
  const horaInicio = parseInt(prompt("Digite a hora de início do jogo:"));
  const horaFim = parseInt(prompt("Digite a hora de fim do jogo:"));
  let duracao;

  if (horaFim > horaInicio) {
    duracao = horaFim - horaInicio;
  } else {
    duracao = 24 - horaInicio + horaFim;
  }

  console.log(duracao);
}

// Exercicio 19
function horaExtraFuncionario() {
  const horasTrabalhadasMes = parseFloat(prompt("Digite o número de horas trabalhadas no mês:"));
  const salarioHora = parseFloat(prompt("Digite o salário por hora do funcionário:"));
  const salarioSemanal = salarioHora * 40;
  const salarioMensal = salarioSemanal * 4;
  if (horasTrabalhadasMes > 160) {
    const horasExtras = horasTrabalhadasMes - 160;
    const valorHoraExtra = salarioHora * 1.5;
    const salarioHoraExtra = valorHoraExtra * horasExtras;
    const salarioTotal = salarioMensal + salarioHoraExtra;
    console.log(`O salário total do funcionário é R$ ${salarioTotal.toFixed(2)}.`);
  } else {
    console.log(`O salário total do funcionário é R$ ${salarioMensal.toFixed(2)}.`);
  }
}

// Exercicio 20
function imc() {
  let nome, altura, pesoIdeal;
  let sexo;
  nome = prompt("Digite o nome da pessoa:");
  altura = parseFloat(prompt("Digite a altura da pessoa em metros:"));
  sexo = prompt("Digite o sexo da pessoa (M ou F):");
  if (sexo === "M") {
    pesoIdeal = 72.7 * altura - 58;
  } else if (sexo === "F") {
    pesoIdeal = 62.1 * altura - 44.7;
  } else {
    console.log("Sexo inválido.");
  }
  if (pesoIdeal) {
    console.log(`O peso ideal de ${nome} é ${pesoIdeal.toFixed(2)} kg.`);
  }
}

// Exercicio 21
function salarioComissao() {
  let salarioFixo = parseFloat(prompt("Insira o salário fixo do vendedor:"));
  let totalVendas = parseFloat(prompt("Insira o total de vendas efetuadas pelo vendedor:"));
  let comissao = 0;
  if (totalVendas <= 1500) {
    comissao = totalVendas * 0.03;
  } else {
    comissao = 1500 * 0.03 + (totalVendas - 1500) * 0.05;
  }
  let salarioTotal = salarioFixo + comissao;
  console.log(`O salário total do vendedor é R$ ${salarioTotal.toFixed(2)}.`);
}

// Exercicio 22
function saldoDaConta() {
  const numeroConta = parseInt(prompt("Digite o número da conta do cliente:"));
  const saldo = parseFloat(prompt("Digite o saldo da conta:"));
  const debito = parseFloat(prompt("Digite o valor do débito:"));
  const credito = parseFloat(prompt("Digite o valor do crédito:"));
  const saldoAtual = saldo - debito + credito;
  if (saldoAtual >= 0) {
    console.log("Saldo Positivo");
  } else {
    console.log("Saldo Negativo");
  }
  console.log(`Saldo atual da conta ${numeroConta}: R$ ${saldoAtual.toFixed(2)}`);
}

// Exercicio 23 
function quantidaEstoque() {
  let quantidadeAtual = Number(prompt('Digite a quantidade atual de produtos no estoque: '));
  let quantidadeMaxima = Number(prompt('Digite a quantidade máxima: '));
  let quantidadeMinima = Number(prompt('Digite a quantidade mínima: '));
  let quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2

  if (quantidadeatual => quantidadeMedia) {
    console.log('Não efetuar compra')
  }

  else {
    console.log('Efetuar compra')
  }
}

// Exercicio 24
function postivoNegativo2() {
  let valor = parseFloat(prompt("Digite um número: "));

  if (valor > 0) {
    console.log("O número é positivo.");
  } else if (valor < 0) {
    console.log("O número é negativo.");
  } else {
    console.log("O número é zero.");
  }
}

// Exercicio 25
function maiorValor() {
  let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
  let valor2 = parseFloat(prompt("Digite o segundo valor: "));
  let valor3 = parseFloat(prompt("Digite o terceiro valor: "));

  if (valor1 > valor2) {
    if (valor1 > valor3) {
      console.log("O maior valor é:", valor1);
    } else {
      console.log("O maior valor é:", valor3);
    }
  } else {
    if (valor2 > valor3) {
      console.log("O maior valor é:", valor2);
    } else {
      console.log("O maior valor é:", valor3);
    }
  }
}

// Exercicio 26
function somarDoisValoresDiferentes() {
  let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
  let valor2 = parseFloat(prompt("Digite o segundo valor: "));
  let valor3 = parseFloat(prompt("Digite o terceiro valor: "));

  if (valor1 > valor2) {
    if (valor1 > valor3) {
      if (valor2 > valor3) {
        console.log("A soma dos 2 maiores valores é:", valor1 + valor2);
      } else {
        console.log("A soma dos 2 maiores valores é:", valor1 + valor3);
      }
    } else {
      console.log("A soma dos 2 maiores valores é:", valor1 + valor3);
    }
  } else {
    if (valor2 > valor3) {
      if (valor1 > valor3) {
        console.log("A soma dos 2 maiores valores é:", valor2 + valor1);
      } else {
        console.log("A soma dos 2 maiores valores é:", valor2 + valor3);
      }
    } else {
      console.log("A soma dos 2 maiores valores é:", valor2 + valor3);
    }
  }
}

// Exercicio 27
function valores3Crescente() {
  let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
  let valor2 = parseFloat(prompt("Digite o segundo valor: "));
  let valor3 = parseFloat(prompt("Digite o terceiro valor: "));

  let menor, meio, maior;

  if (valor1 < valor2 && valor1 < valor3) {
    menor = valor1;
    if (valor2 < valor3) {
      meio = valor2;
      maior = valor3;
    } else {
      meio = valor3;
      maior = valor2;
    }
  } else if (valor2 < valor1 && valor2 < valor3) {
    menor = valor2;
    if (valor1 < valor3) {
      meio = valor1;
      maior = valor3;
    } else {
      meio = valor3;
      maior = valor1;
    }
  } else {
    menor = valor3;
    if (valor1 < valor2) {
      meio = valor1;
      maior = valor2;
    } else {
      meio = valor2;
      maior = valor1;
    }
  }

  console.log("Os valores em ordem crescente são:", menor, meio, maior);
}

// Exercicio 28
function reconhecerTriangulo() {
  let A = parseFloat(prompt("Digite o valor do lado A: "));
  let B = parseFloat(prompt("Digite o valor do lado B: "));
  let C = parseFloat(prompt("Digite o valor do lado C: "));

  if (A < B + C && B < A + C && C < A + B) {
    console.log("Os valores formam um triângulo");
  } else {
    console.log("Os valores não formam um triângulo");
  }
}

// Exercicio 29
function totalGolsVencedor() {
  let time1 = prompt("Digite o nome do time 1: ");
  let gols1 = parseInt(prompt("Digite o número de gols do time 1: "));
  let time2 = prompt("Digite o nome do time 2: ");
  let gols2 = parseInt(prompt("Digite o número de gols do time 2: "));

  if (gols1 > gols2) {
    console.log("O time vencedor é: " + time1);
  } else if (gols2 > gols1) {
    console.log("O time vencedor é: " + time2);
  } else {
    console.log("EMPATE");
  }
}

// Exercicio 30
function identificarMaiorNumero() {
  let num1 = parseFloat(prompt("Digite o primeiro número: "));
  let num2 = parseFloat(prompt("Digite o segundo número: "));

  if (num1 === num2) {
    console.log("Números iguais");
  } else if (num1 > num2) {
    console.log("Primeiro é maior");
  } else {
    console.log("Segundo é maior");
  }
}

// Exercicio 31
function litrosVendidos() {
  let litros = parseFloat(prompt("Digite a quantidade de litros vendidos: "));
  let tipo = prompt("Digite o tipo de combustível (A-álcool ou G-gasolina): ");

  let precoAlcool = 2.9;
  let precoGasolina = 3.3;
  let precoTotal = 0;

  if (tipo === "A") {
    if (litros <= 20) {
      precoTotal = litros * precoAlcool * 0.97;
    } else {
      precoTotal = litros * precoAlcool * 0.95;
    }
  } else if (tipo === "G") {
    if (litros <= 20) {
      precoTotal = litros * precoGasolina * 0.96;
    } else {
      precoTotal = litros * precoGasolina * 0.94;
    }
  }

  console.log(`O valor a ser pago é R$ ${precoTotal.toFixed(2)}`);

}

// Exercicio 32
function calcularIdadeHeM() {
  const idadeHomem1 = parseInt(prompt("Digite a idade do primeiro homem:"));
  const idadeHomem2 = parseInt(prompt("Digite a idade do segundo homem:"));
  const idadeMulher1 = parseInt(prompt("Digite a idade da primeira mulher:"));
  const idadeMulher2 = parseInt(prompt("Digite a idade da segunda mulher:"));
  let maisVelho;
  if (idadeHomem1 > idadeHomem2) {
    maisVelho = idadeHomem1;
  } else {
    maisVelho = idadeHomem2;
  }
  let maisNova;
  if (idadeMulher1 < idadeMulher2) {
    maisNova = idadeMulher1;
  } else {
    maisNova = idadeMulher2;
  }
  const soma = maisVelho + maisNova;
  const produto = (idadeHomem1 < idadeHomem2 ? idadeHomem1 : idadeHomem2) * (idadeMulher1 > idadeMulher2 ? idadeMulher1 : idadeMulher2);
  alert(`A soma da idade do homem mais velho com a mulher mais nova é ${soma}.\nO produto da idade do homem mais novo com a mulher mais velha é ${produto}.`);

}

// Exercicio 33 
function precoFrutas() {
  let kgMorango = parseFloat(prompt("Digite a quantidade de morangos em Kg:"));
  let kgMaca = parseFloat(prompt("Digite a quantidade de maçãs em Kg:"));

  let precoMorango, precoMaca;
  if (kgMorango <= 5) {
    precoMorango = 2.5;
  } else {
    precoMorango = 2.2;
  }

  if (kgMaca <= 5) {
    precoMaca = 1.8;
  } else {
    precoMaca = 1.5;
  }

  let totalCompra = (kgMorango * precoMorango) + (kgMaca * precoMaca);

  if (kgMorango + kgMaca > 8 || totalCompra > 25) {
    totalCompra *= 0.9;
  }

  alert("O valor total da compra é R$ " + totalCompra.toFixed(2));
}

// Exercicio 34
function acessoUsuario() {
  let codigo = prompt("Digite o código de usuário: ");

  if (codigo != "1234") {
    alert("Usuário inválido!");
  } else {
    let senha = prompt("Digite a senha: ");
    if (senha != "9999") {
      alert("Senha incorreta! " + "Acesso negado!");
    } else {
      alert("Senha correta! " + "Acesso permitido!");
    }
  }
}

// Exercicio 35 
function avaliarExpressaoABC() {
  let a = true
  let b = true
  let c = false

  console.log(a || c && b ^ a && !b)
}

// Exercicio 36
function calcularODesconto() {
  let descricao = prompt("Digite a descrição do produto:");
  let quantidade = Number(prompt("Digite a quantidade adquirida:"));
  let precoUnitario = Number(prompt("Digite o preço unitário:"));

  let total = quantidade * precoUnitario;
  let desconto;

  if (quantidade <= 5) {
    desconto = total * 0.02;
  } else if (quantidade <= 10) {
    desconto = total * 0.03;
  } else {
    desconto = total * 0.05;
  }

  let totalAPagar = total - desconto;

  console.log(`Descrição do produto: ${descricao}`);
  console.log(`Quantidade adquirida: ${quantidade}`);
  console.log(`Preço unitário: R$ ${precoUnitario.toFixed(2)}`);
  console.log(`Total: R$ ${total.toFixed(2)}`);
  console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
  console.log(`Total a pagar: R$ ${totalAPagar.toFixed(2)}`);
}