
// Condicionais


// desafio 1

const numeroooo = 3

if (numeroooo % 2 === 0) {
  console.log("É par");
} else {
  console.log("É ímpar");
}

console.log(numeroooo % 2 === 0 ? console.log("É par") : console.log("É impar"))



// desafio 2

const nota20 = 80

if (nota20 >= 90) {
  console.log("Aprovado")
} else if (nota20 >= 70 && nota20 <= 90) {
  console.log("Aprovado com merito")
} else {
  console.log("Reprovado")
}

console.log(nota20 >= 90 ? "Aprovado" : nota20 >= 70 ? "Aprovado com mérito" : "Reprovado");


// desafio 3

const numero1 = 1
const numero2 = 2
const numero3 = 3

if (numero1 > numero2 && numero1 > numero3) {
  console.log('numero 1 é o maior')
} else if (numero2 > numero3) {
  console.log('numero 2 é o maior')
} else {
  console.log('numero 3 é o maior')
}
console.log(numero1 > numero2 && numero1 > numero3 ? 'numero 1 é o maior' : numero2 > numero3 ? 'numero 2 é o maior' : 'numero 3 é o maior');

// desafio 4

const comprimento1 = 1
const comprimento2 = 2
const comprimento3 = 3

if (comprimento1 === comprimento2 && comprimento2 == comprimento3) {
  console.log('equilatero')
} else if (comprimento1 === comprimento2 || comprimento2 == comprimento3 || comprimento1 === comprimento3) {
  console.log('isosceles')
} else {
  console.log('escaleno')
}

console.log(comprimento1 === comprimento2 && comprimento2 === comprimento3 ? 'equilatero' : comprimento1 === comprimento2 || comprimento2 === comprimento3 || comprimento1 === comprimento3 ? 'isosceles' : 'escaleno');


// desafio 5

const ano = 2024

const naodivisiveis = ano % 100 === 0 && ano % 400 !== 0

if (ano % 4 === 0 && !naodivisiveis) {
  console.log('é bissexto')
} else {
  console.log('não é')
}

console.log(ano % 4 === 0 && !naodivisiveis ? 'é bissexto' : 'nao é');

// desafio 6

const idade3 = 17

console.log(idade3 >= 18 ? 'pode comprar' : 'não pode')

if (idade3 >= 18) {
  console.log('pode levar')
} else {
  console.log('não pode')
}



// desafio 8 - switch

const numero = 3;

switch (numero % 2) {
  case 0:
    console.log("É par");
    break;
  case 1:
    console.log("É ímpar");
    break;
  default:
    console.log("Número inválido");
}

// desafio 9 - switch


const letra = "a";

switch (letra.toLowerCase()) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    console.log("É uma vogal");
    break;
  default:
    console.log("É uma consoante");
}


// desafio 10 

const mes = "janeiro";

switch (mes.toLowerCase()) {
  case 'dezembro':
  case 'janeiro':
  case 'fevereiro':
    console.log("Inverno");
    break;
  case 'março':
  case 'abril':
  case 'maio':
    console.log("Primavera");
    break;
  case 'junho':
  case 'julho':
  case 'agosto':
    console.log("Verão");
    break;
  case 'setembro':
  case 'outubro':
  case 'novembro':
    console.log("Outono");
    break;
  default:
    console.log("Mes invalido");
}
