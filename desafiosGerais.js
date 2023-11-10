// Desafio 2

const salario = 5001;
const scoreDeCredito = 701;
const idade = 19;


console.log(salario >=5000 && scoreDeCredito >= 700 && idade >= 18)

// Desafio 3

const navegador = 'Chrome';
const sistemaOperacional = 'Windows';


console.log((navegador === 'Chrome' || navegador === 'Firefox') && (sistemaOperacional === 'Windows' || sistemaOperacional === 'Mac'))


// Desafio 3

const idade2 = 65;
const compraMinima = 100;
const isNewClient = false;


console.log(idade2 >= 60 && compraMinima >= 100 && isNewClient === false)


const array = [1, 2, 'henrique', '27', 'professor', 'front end', 'ada', 3, 4, 5, 'Suel', '18', 'Front End', 'Full Stack', 'CC', 6, 7, 8]

const infoUser = array.splice(2, 5);
const infoUser2 = array.splice(5, 5);

// console.log(infoUser)
// ['henrique','27','professor','front end','ada']
// console.log(infoUser2)
// ['Suel','18','Front End','Full Stack','CC']


// desafio 04

const notas = [8, 9, 9]

console.log((notas[0] + notas[1] + notas[2]) / 3)


// desafio 5

const matriz = [
  [1, 2],
  [3, 4]
]

const determinante = (matriz[0][0] * matriz[1][1]) - (matriz[0][1] * matriz[1][0])

console.log(determinante)


// desafio 6


const vetor1 = [1, 0, 1]
const vetor2 = [2, 1, 0]

console.log((vetor1[0] * vetor2[0]) + (vetor1[1] * vetor2[1]) + (vetor1[2] * vetor2[2]))

// desafio 7

const numeros = [3, 8, 15, 21, 30, 37, 42];

const filtro = numeros.filter(numero => numero % 2 === 0);

console.log(filtro);

// desafio 8

const nomes = ["Alice", "Bob", "Eva", "John", "Daniel", "Isabel"];

const filtroNomes = nomes.filter(nome => nome.length < 5);

console.log(filtroNomes);


// desafio 9

const idades = [15, 22, 17, 20, 30, 12];

const filtroIdades = idades.filter(idade => idade >= 18);

console.log(filtroIdades);



// objetos e dicionarios

const biblioteca = {
  livro1: {
    titulo: "A Arte da Guerra",
    autor: "Sun Tzu",
    anoPublicacao: 1900
  },
  livro2: {
    titulo: "Dom Quixote",
    autor: "Miguel de Cervantes",
    anoPublicacao: 1605
  },
  livro3: {
    titulo: "1984",
    autor: "George Orwell",
    anoPublicacao: 1949
  }
};

biblioteca.livro4 = {
  titulo: "O peequeno prrincipe",
  autor: "Antonie de Saint",
  anoPublicacao: 1943
}

console.log(biblioteca.livro1.autor)

biblioteca.livro4.titulo = "O pequeno principe"

delete biblioteca.livro3

console.log('livro5' in biblioteca)


// desafio de MAP

let listaDeCompras = new Map();

console.log(listaDeCompras.set("maças", 5));
console.log(listaDeCompras.set("bananas", 3));
console.log(listaDeCompras.set("leite", 2))
console.log(listaDeCompras.set("pao", 1))


console.log(listaDeCompras.get('leite'))
console.log(listaDeCompras.set('maças', 10))

console.log(listaDeCompras.delete('leite'))
console.log(listaDeCompras.has('leite'))


console.log(listaDeCompras)


// desafio 2

const dicionarioDeSinonimos = {
  feliz: ["alegre", "contente", "satisfeito"],
  triste: ["melancólico", "abatido", "deprimido"],
  bom: ["ótimo", "excelente", "maravilhoso"]
};

console.log(dicionarioDeSinonimos.feliz);
console.log(dicionarioDeSinonimos.triste);
console.log(dicionarioDeSinonimos.bom);

// desafio 3

const dicionarioDeSinonimosemMap = new Map();

dicionarioDeSinonimos.set('feliz', ['alegre', 'contente', 'satisfeito']);
dicionarioDeSinonimos.set('triste', ['melancólico', 'abatido', 'deprimido']);
dicionarioDeSinonimos.set('bom', ['ótimo', 'excelente', 'maravilhoso']);


// desafio 4

const pessoa = {
  nome: "Exemplo",
  idade: 20,
  cidade: "ExemploCity"
};

console.log(pessoa.idade >= 18);
console.log(pessoa.cidade !== "São Paulo");


// desafio 5


const aluno = {
  nome: "Aluno",
  nota1: 8,
  nota2: 6
};

const media = (aluno.nota1 + aluno.nota2) / 2;

const aprovado = media >= 7;

console.log(media);
console.log(media >= 7);

// Desafio 06

const frutas = new Map([
  ['maçã', 2.5],
  ['banana', 1.8],
  ['pêra', 2.0]
  ['uva', 3.2]
]);

const precoMaca = frutas.get('maçã');
const precoBanana = frutas.get('banana');
const macaMaisCaraQueBanana = precoMaca > precoBanana;

const precoPera = frutas.get('pêra');
const precoUva = frutas.get('uva');
const peraNaoCustaMesmoQueUva = precoPera !== precoUva;

console.log(macaMaisCaraQueBanana);
console.log(peraNaoCustaMesmoQueUva);



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

const nota20 = 8

if (nota20 >= 90) {
  console.log("Aprovado")
} else if (nota20 >= 70 && nota20 <= 90) {
  console.log("Aprovado com merito")
} else {
  console.log("Reprovado")
}

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


// desafio 5

const ano = 2024

const naodivisiveis = ano % 100 === 0 && ano % 400 !== 0

if (ano % 4 === 0 && !naodivisiveis) {
  console.log('é bissexto')
} else {
  console.log('não é')
}


// desafio 6

const idade3 = 17

console.log(idade3 >= 18 ? 'pode comprar' : 'não pode')

if (idade3 >= 18) {
  console.log('pode levar')
} else {
  console.log('não pode')
}



// desafio 8 - switch

const numero = prompt("Digite um número:");

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
    console.log("Mês inválido");
}
