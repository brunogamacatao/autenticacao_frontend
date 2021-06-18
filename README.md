# Autenticação - Frontend

Projeto genérico para autenticação de sistemas web baseado em JWT, feito em React, React Router Dom, Axios e Bootstrap.

Esse projeto também possui suporte a Docker e Docker Compose.

## Configuração do Projeto

A URL do backend pode ser definida na variável de ambiente `REACT_APP_URL_BACKEND` ou especificada no arquivo `.env`.

## Construindo e Executando o Projeto Localmente

* Construir: `yarn`
* Executar: `yarn start`

## Construindo a Imagem Docker

Durante a construção da imagem Docker é possível especificar a URL do servidor. 

Esse projeto contem um Dockerfile com 2 steps:

* builder: a versão de deployment do projeto é construída.
* server: utiliza o nginx como servidor web

Exemplo de comando para construção da imagem:

```
docker build . --build-arg APP_BACKEND_URL=http://192.168.1.12:5000 -t brunogamacatao/autenticacao_frontend
```

## Executando o Projeto em Container Docker

O Nginx escuta requisições na porta 80, portanto, você pode querer fazer um redirecionamento de portas:

```
docker run --rm -it -p 3000:80 brunogamacatao/autenticacao_frontend
```

## Executando a Aplicação Completa

Esse projeto possui um arquivo `docker-compose.yml` que define o banco de dados, backend e frontend. Para iniciar a aplicação completa basta executar o comando:

```
docker-compose up
```
