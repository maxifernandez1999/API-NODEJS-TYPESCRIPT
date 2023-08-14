// Manejador de rutas de express
// GET, PUT, POST, DELETE
import { Router, Response, Request } from "express";
import {deleteItem, getItem, getItems, postItem, updateItem} from "../controllers/item";
const router = Router();

// http://localhost:3002/item [GET]
router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', postItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);



export { router };
