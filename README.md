# DESAFIO_TEIA
 
## Descrição
 
O projeto foi desenvolvido utilizando o framework Angular 2 na versão mais recente (17.3.1) e foram utilizadas as seguintes bibliotecas:
- Angular Material (versão 17.3.1),
- Bootstrap (versão 5.3.3). 
 
## Instalação
 
- Caso não possua o Angular 2 v17.3.1 instalado, necessário a instalação através do comando: `npm install -g @angular/cli.`
- Acesse a pasta do projeto e instale as dependências com `npm install`.
Obs: Necessário Node.js na versão v18.13.0 (preferência) ou superiores.
 
## Execução
 
- Execute o comando `ng serve` (ng s),
- Acesse `http://localhost:4200/` para visualizar,
Obs: Alguns sistemas desabilitam a execução de scripts ng no powershell, preferível a utilização do command prompt (cmd).

## Acesso a Aplicação

A Aplicação pode ser acessa atráves do endereço: https://main.d3t5wamnz1f7t3.amplifyapp.com/

## Estrutura e Design do código
 
- Estrutura das pastas

Foi utilizada minimamente a estrutura TI departamental sugerida pela SUART/Caixa, conforme abaixo: 

src 
-> app 
  -> app 
  -> core 
  -> features 
  -> shared  

* Pasta `src\app\app`: Seguindo a sugestão da SUART, foi criada uma nova pasta app dentro das pastas src\app e incluido o app.component.html, app.component.scss, app.component.spec.ts, app.component.ts.
* Pasta `core`: Foi incluída as pastas:
  -> `http`: Contém centralizado o serviço httpClient do angular na service http.service.ts, além de uma pasta models com o arquivo http.interface.ts.
  -> `layout`: Módulo que agrupa os componentes necessários para a montagem do layout padrão da aplicação. Contém os componentes: cabecalho.component e rodape.component.
  - `store`: Contém o arquivo app.store.ts, responsável pelo gerenciamento de estado e persistencia dos dados trafegados em toda a aplicação. Foi definida a estrutura da seguinte maneira: Temos as states (variáveis do tipo signals introduzidas na versão 16 do angular) que são modificadas atrávez de métodos (updates). Os componentes consomem o estados da aplição a partir de propriedades computadas.
* Pasta `features`: Contém as funcionalidades da aplicação com as respectivas páginas, modulos e service especializada.
* Pasta `shared`: Contém as funcionalidades compartilhadas entre os componentes.
* Pasta `environments`: Contém de forma centralizada a url da API utilizada na aplicação, seja no ambiente de desenvolvimento quanto no ambiente de produção. 

- Requisição e Fluxo geral

A requisição dos dados a API é realizada de forma centralizada pela `principal.service.ts`, a resposta sofre um processo de alteração para se adequar ao padrão definido para uso na aplicação e é armazenado na variável `arrayDadosApi` da store através do método `updateArrayDadosApi`, garantido que os dados da requisição esteja disponível a toda aplicação sempre que solicitado, evitando requisições desnecessárias. Os dados então são consumidos pelos componentes `album.component` e `album-detalhado.component` presentes em `principal.module.ts`.

Em `album.component` os dados passam por uma nova transformação, sendo agrupados por `albumId` (obtemos 100 albuns e 50 imagens para cada album) na estrutura: `[{albumId, dados: [{albumId, id, title, url, thumbnailUrl}]}]` e são consumidos por uma propriedade computada (computed). Com isso, o componente é capaz de gerar um menu com card de albuns para escolha e seleção por parte dos usuários. Ao clicar em um card, o array `dados` referente ao `albumId` selecionado é armazenado na variável `arrayDadosDetalhados` da store através do método `updateArrayDadosDetalhados`, ficando disponível para ser consumido no pelo component `album-detalhado.component`.

Em `album-detalhado.component` o array `dados` é consumido por uma propriedade computada (computed) e as informações são renderizadas no html na forma de cards contendo a imagem retornada da url informada pela propriedade `thumbnailUrl`, o `id` e o `title`.

- Funcionalidades Adicionadas

* Em ambos os componentes os dados são listados dinamicamente utilizando *ngFor e são exibidos de forma paginada em grupo de 10 em 10.
* Em `album-detalhado.component` é possível filtrar no campo input os dados pelo `id` e pelo `title`. Além disso, também é possível ordenar os dados de forma crescente ou decrescente clicando no botão 'ordenar'.

 
