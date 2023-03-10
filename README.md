# Introducci贸n

# 馃弮 Pasos iniciales
## 馃敤 Variables de entorno
Dentro del proyecto se encuentra una carpeta llamada **config** en la que encontraremos nuestros archivos de configuraci贸n para inicializar correctamente nuestro servidor (credenciales, variables de ambiente, etc.)
- **env.js** Archivo que contiene las configuraciones de nuestro ambiente (credenciales de mercado pago, credenciales de imagekit, host y puerto)
- **config.json** Archivo que contiene las configuraciones del ORM para que se conecte con nuestra base de datos

## 鈿欙笍 Correr el proyecto
```
npm i
npm start
```
o
```
npm i
npm start:dev
```
La diferencia entre `npm start` con respecto a `npm start:dev` es que corre el servidor de forma normal, sin embargo al incluir `:dev` corre el servidor con nodemon

# 馃摎 Documentaci贸n de API
Toda la documentaci贸n puede ser consultada a trav茅s de [apollo studio](https://studio.apollographql.com/sandbox/explorer). Aqu铆 podremos encontrar los schemas, los queries y los mutations. A su vez, se puede probar la API con dicha herramienta.

# Sequelize ORM
Para este proyecto se implement贸 Sequelize ORM para la comunicaci贸n y gesti贸n de la base de datos.
## 馃弮 Correr migraciones
La primera vez que correremos nuestro servidor, es importante correr las migraciones para tener nuestra base de datos debidamente configurada.
Para ello, basta con correr
```
npm migrate
```
NOTA: Antes de correr las migraciones es necesario tener instalado **postgreSQL**, haber configurado las **credenciales** y haber corrido el comando `npm i`

## 鈿欙笍 Crear una nueva migraci贸n
Internamente, el proyecto maneja **sequelize-cli** para ayudarnos a crear y correr migraciones. Para crear una nueva migraci贸n junto con su modelo, basta con ejecutar el siguiente comando:

```
npx sequelize-cli model:generate --name <TABLE_NAME> --attributes <ATT_NAME>:<ATT_TYPE>,...
```
Por ejemplo:
```
npx sequelize-cli model:generate --name user --attributes firstName:string,lastName:string,email:string
```