// Framework servidor node
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
// Framework ODM (objet document model)
const mongoose = require("mongoose");
// Cors permite que un cliente se conecta a otro servidor para el intercambio de recursos
const cors = require("cors");

//Permite utilizar las variables de entorno
require('dotenv').config();

// conectar mongo
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mascotas connection successful"))
  .catch((err) => console.error("tienes un error", err));

// crear el servidor
const app = express();

// habilitar bodyparser (de esta manera podemos leer "form-data" como "x-www-form-ulrencoded")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Habilitar cors
app.use(cors());

// Rutas de la app
app.use("/", routes());

const host = process.env.HOST || '0.0.0.0';
// puerto
const port = process.env.PORT || 3000;

app.listen (port, host, ()=>{
  console.log('El servidor está funcionando');
});