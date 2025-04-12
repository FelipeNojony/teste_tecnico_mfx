const matriz = [
  [32, 42, 22, 12, 52],
  [1, 2, 3, 4, 5],
  [10, 20, 30, 40, 50],
  [1, 12, 13, 14, 15],
  [1, 28, 3, 44, 12],
];

function somaDasLinha(matriz) {
  try {
    return matriz.map((linha) => linha.reduce((acc, numero) => acc + numero, 0));
    
  } catch (erro) {
    console.error(
      "O valor da soma das linhas não pode ser exibido",
      erro.message
    );
  }
}

function somaDasColunas(matriz) {
  try {
    let somaColunas = [];

    for (let i = 0; i < matriz[0].length; i++) {
      somaColunas[i] = 0;
    }

    for (let i = 0; i < matriz.length; i++) {
      for (let c = 0; c < matriz[i].length; c++) {
        somaColunas[c] += matriz[i][c];
      }
    }
    return somaColunas;

  } catch (erro) {
    console.error(
      "O valor da soma das colunas não pode ser apresentado",
      erro.message
    );
  }
}

function diagonalPrincipal(matriz) {
  try {
    const matrizQuadrada = matriz.every(linha => linha.length === matriz.length);
    if (!matrizQuadrada) {
      throw new Error("a matriz não é quadrada!!");
    }

    return matriz.reduce((acc, linha, i) => acc + linha[i], 0);
  } catch (erro) {
    console.error(
      "O valor da diagonal principal não pode ser exibido,",
      erro.message
    );
  }
}

function diagonalSecundaria(matriz) {
  try {
    const matrizQuadrada = matriz.every(linha => linha.length === matriz.length);
    if (!matrizQuadrada) {
      throw new Error("a matriz não é quadrada!!")
    }

    return matriz.reduce((acc, linha, i) => acc + linha[matriz.length - 1 - i], 0);

  } catch (erro) {
    console.error(
      "O valor da diagonal secundaria não pode ser exibido,",
      erro.message
    );
  }
}

function processandoMatriz(matriz) {
  try {
    console.log("A soma de todas as linhas é:", somaDasLinha(matriz));
    console.log("A soma de todas as colunas é:", somaDasColunas(matriz));
    console.log("O valor da diagonal principal é:", diagonalPrincipal(matriz));
    console.log("O valor da diagonal secundaria é:", diagonalSecundaria(matriz));
  } catch (erro) {
    console.error("Os resultados não podem ser apresentados", erro.message);
  }
}

processandoMatriz(matriz);
