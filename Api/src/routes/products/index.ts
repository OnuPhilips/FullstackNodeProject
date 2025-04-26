
import { Router } from "express";
// Product Endpoints

const router = Router();

router.get('/', (req, resp)=>{
    resp.send('Getting the list of all Products from 1 to 2000');
})

router.get('/:id', (req, resp)=>{
    console.log(req.params);
    resp.send('Getting Product with ID : ...');
    
})

router.post('/', (req, resp)=>{
    resp.send('Adding a new Product');
})

export default router;