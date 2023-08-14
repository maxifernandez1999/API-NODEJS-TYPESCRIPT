//archivo principal de la App
import "dotenv/config";
import express from 'express';
import cors from 'cors';
// import db from "./config/mongo"

// Importo la ruta del modelo item.ts
import { router } from './routes';
// Obtengo la variable de entorno de .env
const PORT = process.env.PORT || 3001

// Inicializo EXPRESS
const app = express();

// Use CORS para que la API sea consumida por cualquier origen
app.use(cors());

// Sirve para que se pueda recibir datos de tipo JSON en el BODY
app.use(express.json());

// Use Item 
app.use(router);

// Conectar mongodb
// db().then(() => { console.log("Conexion Ready")});

//Inicio la APP
app.listen(PORT, () => console.log(`Listo por el puerto: ${PORT}`));
