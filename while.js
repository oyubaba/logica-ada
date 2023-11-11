
// desafio 3

let soma2 = 0;
let numero2;


while (true) {
  numero2 = parseInt(prompt("Digite um numero:"));

  if (numero2 === 0) {
    break;
  }

  if (numero2 % 2 === 0) {
    soma2 += numero2;
  }
}

console.log(`a soma é: ${soma2}`);

// desafio 4

const numeroAleatorio = parseInt(Math.random() * 100) + 1;

let chute = Number(prompt("Chute um numero"))


while (numeroAleatorio !== chute) {
  chute = Number(prompt("Voce errou, chute outro numero"))
}



// desafio 5

const numeroAleatorio2 = parseInt(Math.random() * 100) + 1;

let chute2 = Number(prompt("Chute um numero"));
let tentativas = 1;

while (numeroAleatorio2 !== chute2 && tentativas < 5) {
  chute = Number(prompt("Voce errou, chute outro numero"));
  console.log(tentativas);
  tentativas++;
}
