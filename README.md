<img title="" src="https://user-images.githubusercontent.com/19174364/181839343-25731cf9-9732-467b-9dbc-aa6b54d46b2f.png" alt="Gopher" width="679"> 

# <b> Projeto Final | :cook: Receitinhas - {Reprograma} </b> :purple_heart: |

Projeto de conclusão do curso de Desenvolvimento Back-end - Todas em Tech \| On16 da [{reprograma}](https://www.reprograma.com.br/).

Este projeto é uma API REST de receitas saudáveis e acessíveis para bebês e crianças. É possível cadastrar receitas, editar, visualizar e deletar.
 [Aplicação](https://receitinhas.herokuapp.com/) | [Documentação](https://receitinhas.herokuapp.com/documentation)  :page_facing_up: |  [Apresentação](https://www.canva.com/design/DAFHPmLcpBM/Z6szgo6-SYJX6wCwxO3pew/view?utm_content=DAFHPmLcpBM&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent)  :desktop_computer: |

### O problema

Com a pandemia e a crise econômica, a situação da fome no Brasil se agravou muito. Apenas 44,8% dos lares tinham seus moradores e suas moradoras em situação de segurança alimentar e isso significa um aumento de 54% desde 2018.

São 116,8 milhões de pessoas em insegurança alimentar no Brasil e 19,1 milhões de pessoas passando fome.

O consumo de alimentos baratos, ricos em sódio, açúcares e gordura e pobres em vitaminas e minerais está em alta. Bebês gordinhos, mas anêmicos retratam que a desnutrição e o excesso de peso estão andando juntos. Esses alimentos ruins favorecem a obesidade, diabetes e outros problemas de saúde de longo prazo. O consumo de comida saudável caiu 85% na pandemia.

Embora as crianças não tenham sido as mais afetadas pelo vírus em si, elas são as mais afetadas pelos impactos secundários, como a falta de aulas e merenda, que, para muitas delas, era a principal refeição do dia.

O custo dos alimentos aumentou e tem um peso enorme no orçamento das famílias mais pobres, na média, com 55% dessa renda é possível comprar alimentos básicos suficientes para apenas um adulto.

29% das famílias brasileiras estão comendo mais alimentos industrializados

22% estão consumindo mais bebidas açucaradas

18% estão ingerindo mais fast food

Mais de 9 milhões de crianças vivem em extrema pobreza no país, com provável dificuldade de se alimentar bem; dado, de 2019, que piorou com a combinação de desemprego alto, crise econômica, assistência social insuficiente e aumento nos preços dos alimentos. As crianças pedem alimentos às mães, que não conseguem dar e se sentem culpadas, incapazes.

### A Solução

##### Receitinhas é um livro de receitas online de alto valor nutritivo e baixo custo para crianças e bebês.

###### Informações de cada receita:

- [x]  Nome
- [x]  Categoria(s) [comidinhas, lanches, sopas, saladas, sobremesas e bebidas]
- [x]  Ingredientes
- [x]  Modo de preparo
- [x]  Idade recomendada

###### Arquitetura

```
📁 Receitinhas
   |
   |- 📁 src
   |   |- 📁 github
   |       |- 📑 ci.yaml
   |       |- 📑 coverage.yaml
   |   |
   |   |- 📁 controllers
   |       |- 📑 recipeController.js
   |
   |   |- 📁 database
   |       |- 📑 mongooseConect.js
   |
   |   |- 📁 models
   |       |- 📑 recipeModel.js
   |
   |    |- 📁 routes
   |       |- 📑 index.js
   |       |- 📑 recipeRoutes.js
   |
   |    |- 📑 app.js
   |
   |- 📁 swagger
   |   |- 📑 swagger_output.json
   |
   |- 📁 test
   |   |- 📑 recipes.test.js
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 Procfile
   |- 📑 README.md
   |- 📑 server.js
   |- 📑 swagger.js 
```

##### Instalação

```
// Clonar o repositório
$ git clone git@github.com:victoriascholte/receitinhas.git

// entrar na pasta do repositório
$ cd receitinhas

// instalar as dependências
$ npm install

// rodar o projeto
$ npm run start 
```

##### Tecnologias e pacotes

Node.js | MongoDB | Next.js

Git | VSCode | WebStorm | Codecov

Postman | Heroku | Vercel

###### Dependências

express | cors | dotenv | mongoose | nodemon | jest | swagger-autogen | swagger-ui-express | save-dev

Projeto criado por [Victoria Scholte](https://github.com/victoriascholte) com orientação da super prof. [Mayhhara F Lilian](https://github.com/mflilian)!  
Agradecimentos especiais: André, por estar sempre comigo e me apoiando em tudo; Carol, Di, Maria e Cláudia, por cuidarem do Tito para eu poder estudar; Francisco, pela ajuda e paciência com o frontend, todas minhas colegas de turma, pela parceria essencial; professoras e equipe da {reprograma}, pelos ensinamentos e oportunidade.

<p align="center"><a href="https://github.com/victoriascholte/receitinhas/actions/workflows/ci.yaml"><img src="https://github.com/victoriascholte/receitinhas/actions/workflows/ci.yaml/badge.svg" alt="CI"></a>    
<a href="https://codecov.io/gh/victoriascholte/receitinhas" ><img src="https://codecov.io/gh/victoriascholte/receitinhas/branch/main/graph/badge.svg?token=RNKLZ62E4J"/></a>
