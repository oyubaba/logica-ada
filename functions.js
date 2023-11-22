
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

function calculadora (num1, num2, operador) {

    if (operador === '+') {
        const matematica = num1 + num2

        return matematica
    }
    if (operador === '-') {
        const matematica = num1 - num2

        return matematica
    }
    if (operador === '*') {
        const matematica = num1 * num2

        return matematica
    }
    if (operador === '/') {
        const matematica = num1 / num2

        return matematica
    }
}

console.log(calculadora(10, 10, '/'))



// DESAFIO 2

let saldo = 0;


function deposito(valor) {
  saldo += valor;
  console.log(`deposito de R$${valor} realizado`);
}

function saque(valor) {
  if (valor <= saldo) {
    saldo -= valor;
    console.log(`saque de R$${valor} realizado`);
  } else {
    console.log('saldo insuficiente para sacar.');
  }
}

function consultarSaldo() {
  console.log(`seu saldo atual é de R$${saldo}`);
}

while (true) {
  let operacao = prompt('escolha a operação desejada: 1 - depósito 2 - saque 3 - consultar Saldo 4 - sair');
  
  switch (operacao) {
    case '1':
      let valorDeposito = parseFloat(prompt('digite o valor do deposito:'));
      deposito(valorDeposito);
      break;
      
    case '2':
      let valorSaque = parseFloat(prompt('digite o valor do saqur:'));
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

  if (operacao === '4') {
    break;
  }
}


// DESAFIO 3

function exibirTabuleiro(tabuleiro) {
    for (let i = 0; i < 3; i++) {
        let row = '';
        for (let j = 0; j < 3; j++) {
            row += tabuleiro[i * 3 + j] + ' ';
        }
        console.log(row);
    }
}

function verificarVencedor(tabuleiro, jogador) {
    const combinacoesVitoria = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < combinacoesVitoria.length; i++) {
        const [a, b, c] = combinacoesVitoria[i];
        if (tabuleiro[a] === jogador && tabuleiro[b] === jogador && tabuleiro[c] === jogador) {
            return true;
        }
    }
    return false;
}

function jogarJogoDaVelha() {
    let tabuleiro = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];
    let jogadorAtual = 'X';
    let jogando = true;

    while (jogando) {
        exibirTabuleiro(tabuleiro);

        let posicao = parseInt(prompt(`jogador ${jogadorAtual}, escolha uma posição (1-9):`)) - 1;

        if (tabuleiro[posicao] === '_') {
            tabuleiro[posicao] = jogadorAtual;

            if (verificarVencedor(tabuleiro, jogadorAtual)) {
                exibirTabuleiro(tabuleiro);
                console.log(`parabéns! o jogador ${jogadorAtual} venceu!`);
                jogando = false;
            } else if (!tabuleiro.includes('_')) {
                console.clear();
                exibirTabuleiro(tabuleiro);
                console.log('Empate!');
                jogando = false;
            } else {
                jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
            }
        } else {
            console.log('essa posição não existe! tente novamente.');
        }
    }
}

jogarJogoDaVelha();


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

