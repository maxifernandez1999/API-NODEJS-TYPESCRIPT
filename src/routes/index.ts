// Se crea una cargador dinamico de rutas
// con el objetivo de importar automaticamente
// las rutas en el app.js

// El nombre del archivo coincide con el nombre de la ruta

import { Router } from "express";

// Import para leer directorias
import { readdirSync } from 'fs';

// Obtengo el directorio actual
// ./routes
const PATH_ROUTER = `${__dirname}`;

const router = Router();

// Se elimina la extension del archivo
// ej: item.ts => item
const cleanFileName = (filename: string) => {
    const file = filename.split('.').shift();
    return file;
}

//Obtengo los archivos de la carpeta routes
readdirSync(PATH_ROUTER).filter((filename) => {
    //elimino la extension
    console.log(filename);

    const cleanName = cleanFileName(filename);
    if (cleanName !== 'index') {
        //importacion dinamica
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(`Se esta cargando la ruta... /${cleanName}`);
            router.use(`/${cleanName}`, moduleRouter.router);

        });
    }
})

export { router };