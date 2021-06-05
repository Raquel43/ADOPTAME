# API CURSOS CON NODE.js Y EXPRESS

## Pasos inciales
- Crear directorio del proyecto "mascotas"
- Inicializar proyecto dentro de "mascotas" ejecutando:
`
    npm init
`
## Instalación de dependencias
### Libreria express para crear la API
    npm install --save express

### Servidor de nodmon para que se reinicie el servidor cada vez que guardemos los cambios
    npm install --save-dev nodemon

### En package.json canviar "test:..." por
    "start": "nodemon ./index"

### Instalación del ORD Mongoose 
Nos servirá para crear los modelos relacinados con las colecciones de MongoDB

    npm install --save mongoose

### Instalación de cors para que se pueda consumir la API de otras URL's
    npm install --save cors


### Paquete para recoger los daatos de los formularios
    npm install body-parser
    
## Instalar MongoDB Compass
 - Entrar y crear la BD de datos "mascotas"
 - Crear la colección con el mismo nombre "mascotas"
 - crear algunos documentos json de ejemplo 

## Código de la aplicación

1. Crear index con código express

2. Crear modelos
- Crear carpeta models
- Crear archivo Mascotas.js

3. Crear controllers (operaciones CRUD)
- Crear carpeta controllers
- Crear archivo mascotasController.js

4. Crear rutas
- Crear carpeta routes
- Crear archivo index.js

## Arrancar servidor
    npm start

## PROBAR LA API (endpoints)

### Mostrar todos los mascotas
Acceder al navegador con la url 
http://localhost:5000/mascotas
http://localhost:5000/usuarios
http://localhost:5000/formularios

### Mostrar un mascota específico
Acceder através de la id de un mascota (el id depende de cada base de datos)
http://localhost:5000/mascotas/60814fe3b4030ff9ac3af514

Utilizando Postman
![Mascotas get](./screenshots/mascotas_get.png)

### Insertar un nuevo mascota utilizando Postman
![Mascotas post](./screenshots/mascotas_post.png)

### Modificar los datos de un mascota existente utilizando Postman
![Mascotas put](./screenshots/mascotas_put.png)

### Borrando un mascota existente utilizando Postman
![Mascotas delete](./screenshots/mascotas_delete.png)

# Remascotas
https://expressjs.com/es/api.html
https://mongoosejs.com/docs/guide.html
https://docs.npmjs.com/
https://nodejs.org/es/
https://docs.mongodb.com/manual/