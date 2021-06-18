# Builder Step
FROM node:14.16.1-stretch-slim AS builder

# 1. Primeiro a parte mais demorada - o package.json e npm install
WORKDIR /app
COPY package.json /app
RUN npm install 

# 2. Copia o restante dos arquivos
COPY . /app

# 3. Faz o build da aplicação
ARG APP_BACKEND_URL=http://192.168.1.12:5000
ENV REACT_APP_BACKEND_URL=${APP_BACKEND_URL}}
RUN npm run build

# Server step
FROM nginx AS server
COPY --from=builder /app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf