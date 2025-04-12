Integração SOAP em XML com JavaScript

Você foi contratado como desenvolvedor júnior para integrar um sistema com um serviço SOAP
que fornece funcionalidades para conversão de números. O seu desafio é implementar uma função
em JavaScript que envia uma requisição SOAP para um webservice público e processa a resposta
XML para converter um número inteiro em sua forma textual.

- A função deve enviar uma requisição SOAP que recebe um número inteiro como parâmetro.
- A função deve então processar a resposta XML para extrair e exibir o número em sua forma
textual.

Este exercício foi desenvolvido totalmente em Javascript com integração com Html, para uma melhor experiência, trata-se de um conversor de número para sua forma em texto, utilizando uma requisição SOAP para um webservice público e processando a resposta em XML texto.

Para iniciar criei uma função assíncrona "converterNumeroExtenso" pois irei trabalhar com fetch para fazer a requisição para o webservice, de inicio criei 4 constantes "numero" que recebe o valor(que o usuário quer converter) do input com id=numero no meu html usando DOM, "proxy" que recebe uma url de cors temporario (Somente utilizando em modo de desenvolvimento para não ter mais problemas com cors que eu estava encontrando), "url" recebe proxy + a url do webservice SOAP e "body" que recebe o corpo da requisão SOAP.

Em seguida iniciei um bloco de tratamento de erros para capturar qualquer tipo de erro no código e mostra uma mensagem na tela e fiz minha requisição SOAP com await fetch() onde que await aguarda a resposta da requisição, utilizando o metodo POST que é padrão.

Finalizando, criei a const "texto" que vai receber a resposta do servidor e transforma-la em texto puro(XML em string), em seguida criei uma const "xmlDoc" que recebe uma conversão utilizando "DOMparser()", para converter a string xml em um documento DOM, podendo assim ser manipulado como um documento HTML, a const "resultado" faz a busca na tag "NumberToWordsResult" vinda da resposta do servidor, utilizando .textContent para fazer a extração do texto da tag.

Para imprimir o resultado na tela, fiz uma busca pela id=resultado utilizando DOM no meu Html, e se não houver resultado mostra uma mensagem de erro ao usuário.