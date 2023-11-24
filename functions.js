
function rolarDado(qntDados, qntLados) {
    let somaDosValores = 0;
    for (let i = 0; i < qntDados; i++) {
      const rolagem = Math.floor(Math.random() * qntLados) + 1;
      console.log(`dado ${i + 1}: ${rolagem}`);
      somaDosValores += rolagem;
    }
    return somaDosValores;
  }
  
  function realizarTentativas(numeroTentativas, qntDados, qntLados) {
    for (let i = 0; i < numeroTentativas; i++) {
      console.log(`tentativa ${i + 1}: `);
      const soma = rolarDado(qntDados, qntLados);
      console.log(`soma dos valores: ${soma}`);
    }
  }
  
  const qntDados3 = 3;
  const qntLados2 = 9;
  const numeroTentativas = 3;
  
  realizarTentativas(numeroTentativas, qntDados3, qntLados2);


// Desafio 1

function soma(numero1, numero2){
    const soma = numero1 + numero2
    return numero1 + numero2;    
}

function subtracao(numero1, numero2){
    return numero1 - numero2;
}
  
function multiplicacao(numero1, numero2) {
    return numero1 * numero2;
}
  
function divisao(numero1, numero2) {
    return numero1 / numero2;
}
  
    function calculadora(numero1, numero2, operador){
    try {    
    if ( operador === '+'){
        return soma(numero1, numero2)
    }
    if ( operador === '-'){
        return subtracao(numero1, numero2)
    }
    if ( operador === '-'){
        return subtracao(numero1, numero2)
    }
    if ( operador === '*'){
        return multiplicacao(numero1, numero2)
    }
    if ( operador === '/'){
        return divisao(numero1, numero2)
    }
    } catch (error) {
    console.log('nao foi possivel realizar', error)
    }
}
  console.log(calculadora(20, 2, "+"))
  console.log(calculadora(20, 2, "-"))
  console.log(calculadora(20, 2, "*"))
  console.log(calculadora(20, 2, "/"))
  console.log(calculadora(10, 10, '-'))



// DESAFIO 2

let saldo = 10;

function deposito(valor) {
    if(valor > 0 && typeof(valor) === 'number') {
        saldo += valor;
        console.log(`deposito de R$${valor} realizado`);
    } else {
        throw new Error('Não é possivel realizar um deposito. Tente novamente!')
    }
}

function saque(valor) {
  if (valor <= saldo) {
    saldo -= valor;
    console.log(`saque de R$${valor} realizado`);
  } else {
    throw new Error('Saldo insuficiente, operação nao realizada')
  }
}

function consultarSaldo() {
  console.log(`seu saldo atual é de R$${saldo}`);
}

let pare = true

while (pare) {
  let operacao = prompt('escolha a operação desejada: 1 - depósito 2 - saque 3 - consultar Saldo 4 - sair');
  
  try {
      switch (operacao) {
        case '1':
          let valorDeposito = parseFloat(prompt('digite o valor do deposito:'));
          deposito(valorDeposito);
          break;
          
        case '2':
          let valorSaque = parseFloat(prompt('digite o valor do saque:'));
          saque(valorSaque);
          break;
          
        case '3':
          consultarSaldo();
          break;
          
        case '4':
          break;
          
        default:
          console.log('selecione uma opção valida');
          break;
      }
  } catch (error) {
    console.log(error)
  } finally {
    operacao = null
    pare = false
  }

  if (operacao === '4') {
    break;
  }
}


// // DESAFIO 3


function quadroCompleto(quadro) {
  return quadro.every((celula) => celula !== null);
}

function exibir(quadro) {
  const exibicao = quadro.map((celula, indice) => (celula !== null ? celula : indice + 1));
  alert(
    `${exibicao[0]} | ${exibicao[1]} | ${exibicao[2]}\n` +
    `${exibicao[3]} | ${exibicao[4]} | ${exibicao[5]}\n` +
    `${exibicao[6]} | ${exibicao[7]} | ${exibicao[8]}\n`
  );
}

function inicializarQuadro() {
  return Array(9).fill(null);
}

function verificarGanhador(quadro) {
  const linhasVitoria = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
  ];

  for (const linha of linhasVitoria) {
    const [a, b, c] = linha;
    if (quadro[a] && quadro[a] === quadro[b] && quadro[a] === quadro[c]) {
      return quadro[a];
    }
  }
  return null;
}

function iniciarJogo() {
  let quadroJogo = inicializarQuadro();
  let jogadorAtual = "X";
  let jogoEmAndamento = true;

  function mostrarQuadro() {
    exibir(quadroJogo);
  }

  let rodada = 0;

  while (jogoEmAndamento) {
    console.log("Rodada " + rodada);
    mostrarQuadro();

    rodada++;

    const movimento = prompt(
      `Jogador ${jogadorAtual}, escolha uma célula (1-9):`
    );
    const indiceMovimento = parseInt(movimento) - 1;

    if (
      quadroJogo[indiceMovimento] === null &&
      indiceMovimento >= 0 &&
      indiceMovimento <= 8
    ) {
      quadroJogo[indiceMovimento] = jogadorAtual;

      const vencedor = verificarGanhador(quadroJogo);
      if (vencedor) {
        console.log(`Jogador ${vencedor} venceu!`);
        jogoEmAndamento = false;
        exibir(quadroJogo);
        alert(`Jogador ${vencedor} venceu!`);
      } else if (quadroCompleto(quadroJogo)) {
        console.log("Empate!");
        jogoEmAndamento = false;
        exibir(quadroJogo);
        alert("Empate!");
      } else {
        jogadorAtual = jogadorAtual === "X" ? "O" : "X";
      }
    } else {
      console.log("numero invalido, tente novamente!");
    }
  }
}

iniciarJogo();


// TESTE LOGICA 1

const array = [1, 3, 5, 6, 9];

function encontrarMinMaxSoma(array) {
    array.sort((a, b) => a - b);
  
    const minSum = array.slice(0, 4).reduce((acc, num) => acc + num, 0);
  
    const maxSum = array.slice(1).reduce((acc, num) => acc + num, 0);
  
    return [minSum, maxSum];
  }
  
  console.log(encontrarMinMaxSoma(array));

  
// TESTE LOGICA 2

let degraus = Number(prompt('digite a quantidade de degraus'));

function escada(n) {
    if (Number.isInteger(n) && n > 0) {
        for (let i = 1; i <= n; i++) {
            console.log('#'.repeat(i));
        }
    } else {
        console.log('digite um numero valido!');
    }
}

escada(degraus);

