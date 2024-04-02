# [WIP] Product and Orders Shop Sync

Este projeto consiste em uma API para a sincronização de produtos e pedidos entre lojas.


## Requisitos

- Node.js
- Yarn
- PostgreSQL

## Configurando o banco

```sh
yarn migrate
```

## Instalação

1. Instale as dependências:

```sh
yarn install
```

2. Copie o arquivo .env.example para .env e preencha as variáveis de ambiente necessárias:

```sh
cp .env.example .env
```

3. Inicie o serviço:

```sh
yarn start
```


## Testes

Para executar os testes, use o seguinte comando:

```sh
yarn test
```

Para executar os testes com cobertura, use o seguinte comando:

```sh
yarn test:cov
```

## Estrutura do Projeto

O projeto foi pensado com o propósito de ser um monólito modular, podendo facilmente se transformar em um monorepo com os módulos se tornando microserviços independentes. Cada módulo contém seus próprios controladores, repositórios, casos de uso e rotas.

Atualmente, existem dois módulos:

* Authentication: Concluído em 90%, faltando apenas a integração com o Redis para controle de sessões.
* Order: Com cerca de 30% de conclusão, está inoperante e sem testes.

## Proximos Passos
Essa é a ideia final do projeto, como cada componente deveria ser:

* Authentication: Um sistema completo e seguro de autenticação, utilizando o Redis para armazenar as sessões.
* Order: Possibilita a criação e listagem de pedidos via API e sincroniza os dados dos pedidos com o serviço de shop externo, trocando mensagens por filas.
* Products: Cria e lista novos produtos e sincroniza os dados dos produtos com o serviço de shop externo, trocando mensagens por filas.
* Sync: Serviço para sincronizar produtos e pedidos com algum serviço de shop externo. Sua comunicação é baseada em filas e mantém um controle por status de sincronização, além de registrar todas as alterações sincronizadas para histórico.