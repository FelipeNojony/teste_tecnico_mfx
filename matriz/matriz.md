Manipulação de Matrizes com JavaScript

Você foi contratado como desenvolvedor júnior para implementar uma funcionalidade que manipula
matrizes bidimensionais em JavaScript. Seu desafio é criar uma função que execute operações específicas em uma matriz de números inteiros.

1. Funcionalidade Principal:

- A função deve receber uma matriz bidimensional de números inteiros como entrada.
- A função deve executar as seguintes operações:

1. Soma de Linhas
2. Soma de Colunas
3. Diagonal Principal
4. Diagonal Secundária

Este exercício foi totalmente realizado em JavaScript conforme solicitado no enunciado, desenvolvi funções para lidar com operações em uma matriz bidimensional, tais como: Soma das linhas, Soma das colunas, Valor da diagonal principal, Valor da diagonal secundaria. Abaixo esta um breve relato de como foi desenvolvido o código de cada função.

1° Soma das linhas: para calcular o valor das linhas criei uma função "somaDasLinhas" que recebe como parametro uma matriz(um array de arrays), primeiramente adicionei um bloco de tratamento de erro, para capturar erros e apresentar uma menssagem na tela, neste caso utilizei o metodo "map" e "reduce" juntos, o map percorre cada linha da matriz e cria um novo array com base em uma operação determinada na função, neste caso o map esta trabalhando em conjunto com o reduce, mapeando linha por linha para que o reduce utilize seu acumulador em cada elemento da linha e acrescente o proximo número no valor do acumulador que começa com 0. Ex: reduce começando em 0+1=1 1+2=3 3+3=6 6+4=10 10+5=15, resultado da linha[1].

2° Soma das colunas:para calcular o valor das colunas criei uma função "somaDasColunas" recebendo tambem como parametro a matriz, para calcular o valor das colunas dessa matriz, primeiramente adicionei um bloco de tratamento de erros, iniciei a função preparando um array vazio "somaColunas" com o mesmo número de posições que o número de colunas da matriz obtido pelo laço de repetição "FOR", preenchendo todas com 0, "matriz[0].length". Posterior foi feito dois laços de repetição, onde o primeiro percorre cada linha da matriz e o segundo cada elemento da linha, finalizei utilizando o sinal de atribuição += para atribuir o valor das linhas[i] e colunas[c]. Retornando somaColunas no final do código.

3° Valor da diagonal principal: Para calcular a diagonal principal criei uma função "diagonalPrincipal" que recebe como parametro a matriz, iniciei o código com um bloco para tratamento de erro e de imediato fiz uma validação com objetivo de garantir que a raiz seja quadrada, para isso criei uma constante "matrizQuadrada" que recebe o trecho de código:
"matriz.every(linha => linha.length === matriz.length);".
Onde: matriz.every(): vai percorrer todas as linhas da matriz. O metodo .every() verifica se todos os elementos do array cumprem a condição que foi dada.
linha.length === matriz.length: faz uma verificação se cada linha tem a mesma quantidade de elementos que linhas dentro do array.
Logo fiz uma verificação condicional utilizando if (!matrizQuadrada), se o valor da matriz foi inverso a condição dada, apresenta um mensagem de erro na tela.

Para calcular o valor da diagonal principal utilizei o metodo "Reduce", onde:
matriz.reduce(): vai acumular um valor durante o loop pelas linhas da matriz.
linha[i]: guarda o elemento da diagonal principal da linha atual, Ex. na linha 0, pega o elemento da posição 0, na linha 1 o elemento da posição 1 e assim por diante.
acc + linha[i]: soma todos os elementos, e o 0 no final significa que meu acumulador esta começão com o valor 0.

4° Valor da diagonal secundaria:Para calcular a diagonal secundaria criei uma função "diagonalSecundaria" que recebe como parametro a matriz, iniciei o código com um bloco para tratamento de erro e de imediato fiz uma validação com objetivo de garantir que a raiz seja quadrada, para isso criei uma constante "matrizQuadrada" que recebe o trecho de código:
"matriz.every(linha => linha.length === matriz.length);".
Onde: matriz.every(): vai percorrer todas as linhas da matriz. O metodo .every() verifica se todos os elementos do array cumprem a condição que foi dada.
linha.length === matriz.length: faz uma verificação se cada linha tem a mesma quantidade de elementos que linhas dentro do array.
Logo fiz uma verificação condicional utilizando if (!matrizQuadrada), se o valor da matriz foi inverso a condição dada, apresenta um mensagem de erro na tela.

Para calcular o valor da diagonal secundaria também utilizei o metedo "Reduce", com alguns ajustes.
A diagonal secundaria começa do canto superior direito da matriz e vai até o canto inferior esquerdo, ou seja, o contratario da diagonal principal, para isso utilizei o mesmo metodo "Reduce" da diagonal principal porem para o reduce percorrer a matriz ao e acumular os elementos corretos utilizei "acc + linha[matriz.length - 1 - i]", onde:
matriz.length -1 -i: vai percorrer linha por linha e acumular os elementos desta forma. Ex: linha[0]colunas[4], linha[1]coluna[3], linha [2] coluna[2] e assim por diante.

por fim utilizei uma função "processandoMatriz()", para imprimir na tela o valor de todas as operações de uma só vez.
