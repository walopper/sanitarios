# sanitarios

## Requisitos previos
- NodeJS >= 9.x.x (http://nodejs.org)
- NPM >= 5.x.x (Viene incluido en Node)
- Git (https://git-scm.com/downloads)

## Instalar y montar el proyecto

Abrir una terminal (o la terminal del editor/IDE) y clonar el proyecto

```bash
git clone https://github.com/walopper/sanitarios.git
cd sanitarios
```

Instalar las dependencias

```bash
npm install
```

### Comandos

- npm run start inicia el servidor API REST
- npm run build compila el cliente
- npm run serve sirve el cliente en ambiente local para desarrollo (usa webpack-dev-server)


## Instalando base de datos

Descargar Mongo Community Server https://www.mongodb.com/download-center?jmp=nav#community
Instalar segun instrucciones

## Levantar mongo

En una terminal, ir al directorio del proyecto y ejecutar

```bash
mongod --config ./mongo/mongod.conf
```

