import express from 'express';
import initializeDatabase from './Products_db';

const app = express();


const start = async()=>{

  const controller = await initializeDatabase();
  app.get('/', (req, res)=>{

    res.json({message:"Hello"});
  });
  
  app.get('/Products/', async(req, res)=>{
    const result = await controller.getProducts(req.query);
    res.send(result);
  });
  app.get('/Products/:id', async(req, res)=>{
    const {id} = req.params;
    const result = await controller.getProductsByID(id);
    res.json(result);
  });

  app.get('/Products/create', async(req, res)=>{
    const{name,description,price,Categories_ID } = req.query;
  console.log({name,description,price,Categories_ID })
    const result = await controller.createProducts({name,description,price,Categories_ID});
    res.json(result);
  });

  app.get('/Products/delete/:id', async(req, res)=>{
   
    const {id}= req.params;
    const result = await controller.deleteProducts(id);
    res.json(result);
  });

  app.get('/Products/update/:id', async(req, res)=>{
   
    const {id}= req.params;
    const {name,description,price } = req.query;
    const result = await controller.updateProducts(id, {name,description,price});
    res.json(result);
  });
  
  app.listen(8080, ()=>{console.log("Listening on port 8080")});
  
  

}
start()
