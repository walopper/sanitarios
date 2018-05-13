# Sanitarios Rodriguez Full-Stack Website

### Requisitos previos
- NodeJS >= 9.x.x (http://nodejs.org)
- NPM >= 5.x.x (Viene incluido en Node)
- Git (https://git-scm.com/downloads)

## Instalar y montar el proyecto

Abrir una terminal (o la terminal del editor/IDE) y clonar el proyecto

```bash
git clone https://github.com/walopper/sanitarios.git
cd sanitarios
```

### Instalar las dependencias

```bash
npm install
```

#### Comandos

- `npm run start` inicia el servidor API REST
- `npm run build` compila el cliente
- `npm run serve` sirve el cliente en ambiente local para desarrollo (usa webpack-dev-server)


## Instacion y configuracion de MongoDB

### Instalando mongodb

Descargar Mongo Community Server https://www.mongodb.com/download-center?jmp=nav#community
Instalar segun instrucciones

### Levantar mongodb

En una terminal, ir al directorio del proyecto y ejecutar

```bash
mongod --config ./mongo/mongod.conf
```

### Configuracion de la base de datos

Es necesario crear una base de datos y un usuario para autenticar.

1. Ejecutar Mongo en linea de comando


2. Crear la base de datos

```bash
use sanitariosdb
```

3. Crear los usuarios

```bash
db.createUser(
  {
    user: "sradmin",
    pwd: "PASSWORD_AQUI",
    roles: [ { role: "readWrite", db: "sanitariosdb" } ]
  }
)
```

```bash
db.createUser(
  {
    user: "public",
    pwd: "PASSWORD_AQUI",
    roles: [ { role: "read", db: "sanitariosdb" } ]
  }
)
```

4. Configurar la misma contraseña en Sails en el archivo `./server/config/datastores.js`

