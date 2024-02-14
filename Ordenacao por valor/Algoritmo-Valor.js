// 1º Solução
/*
let bookPrices = [25, 15, 30, 50, 45, 20];
let sortedArray = [];
let bigger = true;

while (bookPrices.length > 0) {
    let cheapestIndex = 0;

    if(bigger) {
        for (let i = 1; i < bookPrices.length; i++) {
            if (bookPrices[i] > bookPrices[cheapestIndex]) {
                cheapestIndex = i;
            }
        }
    } 
    else {
        for (let i = 1; i < bookPrices.length; i++) {
            if (bookPrices[i] < bookPrices[cheapestIndex]) {
                cheapestIndex = i;
            }
        }
    }
    

    sortedArray.push(bookPrices[cheapestIndex]);
    bookPrices.splice(cheapestIndex, 1);

    console.log(`Added book at index ${cheapestIndex}, price: ${sortedArray[sortedArray.length - 1]}`);
}

console.log(sortedArray);
*/
// 2º Solução

//Uma forma um pouco mais performatica ->
/*
let bookPrices = [25, 15, 30, 50, 45, 20];
let sortedArray = [];
let bigger = true;

while (bookPrices.length > 0) {
    let comparisonFunction = bigger ? (a, b) => b - a : (a, b) => a - b;

    let cheapestIndex = bookPrices.reduce((minIndex, currentValue, currentIndex, array) => {
        return comparisonFunction(currentValue, array[minIndex]) < 0 ? currentIndex : minIndex;
    }, 0);

    sortedArray.push(bookPrices[cheapestIndex]);
    bookPrices.splice(cheapestIndex, 1);

    console.log(`Adicionado livro no índice ${cheapestIndex}, preço: ${sortedArray[sortedArray.length - 1]}`);
}

// Exibe o array ordenado
console.log(sortedArray);
*/

// Solução 3 - 

// Solução do curso ->
const livros = [
    {
      titulo: "JavaScript",
      preco: 25
    },
    {
      titulo: "PHP",
      preco: 15
    }, 
    {
      titulo: "Java",
      preco: 30
    }, 
    {
      titulo: "Elixir",
      preco: 50
    }, 
    {
      titulo: "Go",
      preco: 45
    }, 
    {
      titulo: "Python",
      preco: 20
    }
];

for (let atual = 0; atual < livros.length - 1; atual++) {
  let menor = menorValor(livros, atual)

  let livroAtual = livros[atual];
  let livroMenorPreco = livros[menor];

  livros[atual] = livroMenorPreco
  livros[menor] = livroAtual
}

function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;
    
    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
      if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
        maisBarato = atual
      }
    }
    return maisBarato;
  }

console.log(livros);