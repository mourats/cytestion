# Guia para utilização do cytestion

Gerador de código de teste end-to-end, utilizando a framework [cypress](https://www.cypress.io/). Ele deve ser incluído como um submodulo, usualmente com `git submodule`, de uma aplicação web, alvo da realização dos testes exploratórios.


## Dependências

##### É necessário ter o [Node.js](https://nodejs.org/en/) e [Yarn](https://yarnpkg.com/) instalados.
##### É necessário executar em uma aplicação web, utilizando a biblioteca de componentes do [Ant Desing](https://ant.design/).

Instalar as dependências do projeto, assim:
```
yarn
```

## Execução

A execução do cytestion é bem simples basta executar a geração de testes, assim:
```
yarn generate-test
```

##### Importante:

Na primeira execução, será necessário informar a `baseUrl` que será colocada no arquivo `cypress.json`. Além disso, o diretório da dependência cypress, já instalado, será criado e os arquivos `commands.js` e `index.js`, contendo funções necessárias, serão colocados no path `cypress/support`. 

O artefato gerado será um arquivo de teste chamado `cytestion.spec.js`, encontrado no path `cypress/integration/`.

## Detalhes

O processo de geração dos testes funciona da seguinte forma, uma visita incial é feita na url base fornecida, após isso, o html encontrado na página é analisado e, de forma seletiva, novos testes são criados, a partir dos identificadores `id=` encontrados. O objetivo final é percorrer todos os caminhos possíveis por meios de click e preencher os formulários encontrados, fazendo sua submissão.

##### O processo de explorar os testes é feito pela execução em linha de comando, mas para exemplificar o que acontece, veja o gif:

![Alt Text](data/gif-readme/generate-test.gif)