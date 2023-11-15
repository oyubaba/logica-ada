// desafio 1
let soma = 0

for (let i = 1; i <= 10; i++) {
    soma += i;
}

console.log(soma)



// desafio 2

const pessoa = {
    nome: 'cebolinha',
    idade: 1,
    cidade: 'floripa',
}

for (let propriedade in pessoa) {
    console.log(propriedade + ':' + pessoa[propriedade])
}


// desafio 3

const frutas = ['maça', 'banana', 'laranja', 'pessego', 'manga']

for (let propriedade in pessoa) {
    console.log(propriedade + ':' + pessoa[propriedade])
}

// desafio 4

const numeroEscolhido = 2

for (let i = 0; i <= 10; i++) {
    console.log(`${i} X ${numeroEscolhido} = ${numeroEscolhido * i}`)
}



// desafio 5

const valoresNumericos = {
    valor1: 10,
    valor2: 20,
    valor3: 30,
    valor4: 40,
    valor5: 50,
}

let soma2 = 0


for (let propriedade2 in valoresNumericos) {
    soma2 += valoresNumericos[propriedade2];
}

console.log(soma2)


// desafio 6

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i <= array.length; i++) {
    console.log(array[i] === 7 ? `achei o numero 7 na posição ${i}` : `o numero 7 nao esta na posição ${i}`)
}


// desafio 7

const numeroEntrada = 2
let arraySoma = [];


for (let i = 0; i < numeroEntrada; i++) {
    if (i <= 1) {
        arraySoma.push(1);
    } else {
        arraySoma.push(arraySoma[i - 1] + arraySoma[i - 2]);
    }
}
    console.log(arraySoma);


    // desafio 8

    const palavra = "cebolinha"
    let somaDeVogais = 0

    const vogais = ['a', 'e', 'i', 'o', 'u']

    const palavraSeparada = palavra.split('');

    for (letras of palavraSeparada) {
        if (vogais.includes(letras)) {
            somaDeVogais += 1
        }
    }

console.log(somaDeVogais)




// desafio 9

let array3 = [5, 4, 6, 7, 2, 8, 3, 9, 1]

for (let i = 0; i < array3.length; i++) {
    for (let j = 0; j < array3.length - 1 - i; j++) {
        if (array3[j] > array3[j + 1]) {
          [array3[j], array3[j + 1]] = [array3[j + 1], array3[j]];
        }
      }
}

console.log("Array ordenado:", array3);


// desafio 9.1

console.log(array3.sort((a, b) => a - b));


// desafio 10

const qntDados = 5
let  somaDosValores = 0

for (let i = 0; i < qntDados; i++) {
    const rolagem = Math.floor(Math.random() * 6) + 1
    console.log(rolagem)
    somaDosValores += rolagem
}

console.log(somaDosValores)


// desafio 11

const qntDados2 = 5
const qntLados = 2
let  somaDosValores2 = 0

for (let i = 0; i < qntDados2; i++) {
    const rolagem = Math.floor(Math.random() * qntLados) + 1
    console.log(`dado ${i + 1}: ${rolagem}`)
    somaDosValores2 += rolagem
}

console.log(`soma dos ${qntDados2} dados com ${qntLados} lados: ${somaDosValores2}`)


// desafio 12

const qntDados3 = 3
const qntLados2 = 9
const numeroTentativas = 3
let  somaDosValores3 = 0

for(let i = 0; i < numeroTentativas; i++) {
    console.log(`tentativa ${i + 1}: `)
    for (let i = 0; i < qntDados3; i++) {
        const rolagem = Math.floor(Math.random() * qntLados2) + 1
        console.log(`dado ${i + 1}: ${rolagem}`)
        somaDosValores3 += rolagem
    }
    console.log(`soma dos valores: ${somaDosValores3}`)
}





