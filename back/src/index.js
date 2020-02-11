import express from 'express';
import ProductsDatabase from './Product_db';
import NewsDatabase from './News_db';
import CategoriesDatabase from './Categories_db'
const app = express();

app.listen(8080, ()=>{console.log("Listening on port 8080")});


//Products  
const startProduct = async()=>{

  const controller = await ProductsDatabase()  ;
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
  
 
  
 

}
startProduct()

//News

const startNews = async()=>{

  const controller = await NewsDatabase()  ;

  
  app.get('/News/', async(req, res)=>{
    const result = await controller.getNews(req.query);
    res.send(result);
  });
 
  app.get('/News/:id', async(req, res)=>{
    const {id} = req.params;
    const result = await controller.getNewsByID(id);
    res.json(result);
  });

  app.get('/News/create', async(req, res)=>{
    const{description,date } = req.query;
  console.log({description,date})
    const result = await controller.createNews({description,date});
    res.json(result);
  });

  app.get('/News/delete/:id', async(req, res)=>{
   
    const {id}= req.params;
    const result = await controller.deleteNews(id);
    res.json(result);
  });

  app.get('/News/update/:id', async(req, res)=>{
   
    const {id}= req.params;
    const {description,date } = req.query;
    const result = await controller.updateProducts(id, {description,date});
    res.json(result);
  });
  
 
 

}
startNews()

//Categories

const startCategoriesDatabase = async()=>{

  const controller = await CategoriesDatabase()  ;

  
  app.get('/Categories/', async(req, res)=>{
    const result = await controller.getCategories(req.query);
    res.send(result);
  });
 
  app.get('/Categories/:id', async(req, res)=>{
    const {id} = req.params;
    const result = await controller.getgetCategoriesByID(id);
    res.json(result);
  });

  app.get('/Categories/create', async(req, res)=>{
    const{name } = req.query;
  console.log({name})
    const result = await controller.createCategories({name});
    res.json(result);
  });

  app.get('/Categories/delete/:id', async(req, res)=>{
   
    const {id}= req.params;
    const result = await controller.deleteCategories(id);
    res.json(result);
  });

  app.get('/Categories/update/:id', async(req, res)=>{
   
    const {id}= req.params;
    const {name } = req.query;
    const result = await controller.updateCategories(id, {name});
    res.json(result);
  });
  
 
 

}
startCategoriesDatabase()

