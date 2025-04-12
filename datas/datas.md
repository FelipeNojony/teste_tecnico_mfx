Manipulação de Data e Hora com JavaScript

Você foi contratado como desenvolvedor júnior para implementar uma funcionalidade que manipula
datas e horas em JavaScript. Seu desafio é criar uma função que resolva uma série de tarefas
relacionadas a data e hora.

1. Funcionalidade Principal:

- A função deve realizar as seguintes operações:

1. Calcular a Diferença entre Duas Datas
2. Adicionar Dias a uma Data
3. Converter para Outro Fuso Horário
4. Formatar Data

Este exercício foi totalmente desenvolvido em JavaScrip, com o intuito de manipular datas e horas conforme foi disposto no enunciado, abaixo vou fazer um breve relato de como desenvolvi as funções para lidar com o exercício.

1° Calcular a diferença entre duas datas: para calcular a diferença entre duas datas criei uma função chamada "diferencaEntreDatas", iniciei o código com um bloco de tratamento de erro, em seguida criei duas constantes "dataAtual = new Date()", representando a data e hora atual do sistema e "dataFutura = new Date()", que copia a data atual do sistema, posteriormente sera usada para acrescentar o valor de dias na diferença entre as datas, em seguida fiz o calculo: "dataFutura.setDate(dataAtual.getDate() + 25)", onde dataAtual.getDate() esta retornando a data atual do sistema e adicionando mais 25 dias e ".setDate()" altere o valor acrescentando os 25 dias em dataFutura. em seguida criei três variaveis para proseguir, "diferencaDeTempo", que faz uma subtração para calcular a diferença exata de tempo entre dataFutura - dataAtual em milissegundos, "tempoDoDia", que repesenta o valor de milissegundos de um dia e "diferencaEntreDias" que faz uma divisão entre diferencaDeTempo / tempoDoDia, resultando assim o valor exato da diferença entre dias das duas datas.

2° Adicionar dias a uma data: para essa operação criei uma função "adicionaDias" que recebe como parametro dias, iniciei o código com um bloco de tratamento de erro e criei uma variavel "data = new Date()", que recebe a data e hora atual do sistema, em seguida utilizei um calculo parecido com o calculo da função "diferencaEntreDatas", criei uma variavel "adicionarDias = new Date(data.setDate(data.getDate() + dias))", onde: adicionar dias recebe "new Date()" representando a data e hora atual e fazendo o calculo "data.getDate()("data atual") + o parametro "dias" e setando com setDate() o valor do calculo na varialvel "data", por final utilizei o metodo "toLocaleDateString" para formatar a data para uma string no padrão pt-Br.

3° Converter para outro fuso horário: para realizar essa operação criei uma função "fusoHorarioFormatado", iniciei o codigo com um bloco de tratamento de erro, em seguida salvei a data e hora atual do sistema na variavel "dataAtual", em seguida criei duas constantes com os indicadores de fuso horário, "londres" e "saoPaulo", esses indicadores serão utilizados pela API Intl.DateTimeFormat, criei a função fusoHorarioFormatado para fazer a formatação da data e hora para o padrão brasileiro, por fim imprimi o resultado utilizando console.log

4° Formatar data: para realizar a formatação da data atual criei uma função "formatarData", iniciei com um bloco de tratamento de erro, em seguida adicionei uma constante "dataFormatada" que guarda a data e hora atual, em seguida retornei "dataFormatada" utilizando o método "toLocaleDateString", para fazer a formatação da data para os padrões brasileiros.

por fim utilizei uma função "operacoesDatas()", para imprimir na tela o valor de todas as operações de uma só vez.
