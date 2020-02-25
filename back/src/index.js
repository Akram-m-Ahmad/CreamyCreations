import express from 'express';
import ProductsDatabase from './Product_db';
import NewsDatabase from './News_db';
import CategoriesDatabase from './Categories_db'
import Eventsdatabase from './Events_db'
import getProductImageDatabase from './ProductImage_db'
import OrdersDatabase from './Orders_db'
import CatIDProData from './CatIDPro'
const app = express();

app.listen(8080, () => { console.log("Listening on port 8080") });


//Products  
const startProduct = async () => {

  const controller = await ProductsDatabase();
  app.get('/', (req, res) => {

    res.json({ message: "Hello" });
  });

  app.get('/Products/', async (req, res) => {
    const result = await controller.getProducts(req.query);
    res.send(result);
  });


  app.get('/Products/create', async (req, res) => {
    const { name, description, price, Categories_ID } = req.query;
    console.log({ name, description, price, Categories_ID })
    const result = await controller.createProducts({ name, description, price, Categories_ID });
    res.json(result);
  });

  app.get('/Products/delete/:id', async (req, res) => {

    const { id } = req.params;
    const result = await controller.deleteProducts(id);
    res.json(result);
  });

  app.get('/Products/update/:id', async (req, res) => {

    const { id } = req.params;
    const { name, description, price } = req.query;
    const result = await controller.updateProducts(id, { name, description, price });
    res.json(result);
  });

  app.get('/Products/:id', async (req, res) => {
    const { id } = req.params;
    const result = await controller.getProductsByID(id);
    res.json(result);
  });

  app.get('/OrderByCatProducts/:id', async (req, res) => {
    const { id } = req.params;
    const result = await controller.getProductsByCategory(id);
    res.json(result);
  });


}
startProduct()

//News

const startNews = async () => {

  const controller = await NewsDatabase();


  app.get('/News/', async (req, res) => {
    const result = await controller.getNews(req.query);
    res.send(result);
  });

  app.get('/News/create', async (req, res) => {
    console.log("create")
    const { description, date } = req.query;
    console.log({ description, date })
    const result = await controller.createNews({ description, date });
    res.json(result);
  });



  app.get('/News/delete/:id', async (req, res) => {

    const { id } = req.params;
    const result = await controller.deleteNews(id);
    res.json(result);
  });

  app.get('/News/update/:id', async (req, res) => {

    const { id } = req.params;
    const { description, date } = req.query;
    const result = await controller.updateProducts(id, { description, date });
    res.json(result);
  });

  app.get('/News/:id', async (req, res) => {
    const { id } = req.params;
    const result = await controller.getNewsByID(id);
    res.json(result);
    await result.finalize();
  });



}
startNews()

// //Categories

const startCategoriesDatabase = async () => {

  const controller = await CategoriesDatabase();


  app.get('/Categories/', async (req, res) => {
    const result = await controller.getCategories(req.query);
    res.send(result);
  });


  app.get('/Categories/create', async (req, res) => {
    const { name } = req.query;
    console.log({ name })
    const result = await controller.createCategories({ name });
    res.json(result);
  });

  app.get('/Categories/delete/:id', async (req, res) => {

    const { id } = req.params;
    const result = await controller.deleteCategories(id);
    res.json(result);
  });

  app.get('/Categories/update/:id', async (req, res) => {

    const { id } = req.params;
    const { name } = req.query;
    const result = await controller.updateCategories(id, { name });
    res.json(result);
  });


  app.get('/Categories/:id', async (req, res) => {
    const { id } = req.params;
    const result = await controller.getgetCategoriesByID(id);
    res.json(result);
  });


}
startCategoriesDatabase()

//Events
const startEvents = async () => {

  const controller = await Eventsdatabase();
  app.get('/', (req, res) => {

    res.json({ message: "Hello" });
  });

  app.get('/Events/', async (req, res) => {
    const result = await controller.getEvents(req.query);
    res.send(result);
  });



  app.get('/Events/create', async (req, res) => {
    const { description, location, date,eventImg } = req.query;
    console.log({ id, description, location, date, eventImg })
    const result = await controller.createEvents({ description, location, date, eventImg });
    res.json(result);
  });

  app.get('/Products/delete/:id', async (req, res) => {

    const { id } = req.params;
    const result = await controller.deleteProducts(id);
    res.json(result);
  });

  app.get('/Events/update/:id', async (req, res) => {

    const { id } = req.params;
    const { description, location, date } = req.query;
    const result = await controller.updateProducts({ id, description, location, date });
    res.json(result);
  });


  app.get('/Events/:id', async (req, res) => {
    const { id } = req.params;
    const result = await controller.getEventsByID(id);
    res.json(result);
  });


}
startEvents()



//ProductImages

const startProductImages = async () => {

  const controller = await getProductImageDatabase();

  app.get('/ProductImages/', async (req, res) => {
    const result = await controller.getProductImages(req.query);
    res.send(result);
  });



  app.get('/ProductImages/create', async (req, res) => {
    const { id, path, Products_id } = req.query;
    console.log({ id, path, price, Products_id })
    const result = await controller.createProductImages({ id, path, Products_id });
    res.json(result);
  });

  app.get('/ProductImages/delete/:id', async (req, res) => {

    const { id } = req.params;
    const result = await controller.deleteProductImages(id);
    res.json(result);
  });

  app.get('/ProductImages/update/:id', async (req, res) => {

    const { id } = req.params;
    const { path, Products_id } = req.query;
    const result = await controller.updateProducts(id, { path, Products_id });
    res.json(result);
  });


  app.get('/ProductImages/:id', async (req, res) => {
    const { id } = req.params;
    const result = await controller.getProductImagesByID(id);
    res.json(result);
  });


}
startProductImages()


//Orders

const startOrdersdatabse = async () => {
  const controller = await OrdersDatabase();
  app.get('/Orders/', async (req, res) => {
    const result = await controller.getOrders(req.query);
    res.send(result);
  });

  //create a new element
  app.get('/Orders/create', async (req, res) => {
    const { date, username, userPhone, Products_ID } = req.query;
    console.log({ date, username, userPhone, Products_ID })
    const result = await controller.createOrders({ date, username, userPhone, Products_ID });
    res.json(result);
  });
  //DELETE element
  app.get('/Orders/delete/:id', async (req, res) => {

    const { id } = req.params;
    const result = await controller.deleteOrders(id);
    res.json(result);
  });

  //get element by ID
  app.get('/Orders/:id', async (req, res) => {
    const { id } = req.params;
    const result = await controller.getOrdersByID(id);
    res.json(result);
  });

  app.get('/Orders/update/:id', async (req, res) => {

    const { id } = req.params;
    const { date, username, userPhone } = req.query;
    const result = await controller.updateOrders(id, { date, username, userPhone });
    res.json(result);
  });
}
startOrdersdatabse()


//get CatIDPRo 
const startCatIDPro = async () => {
  const controller = await CatIDProData();
  app.get('/CatIDPro/', async (req, res) => {
    const { id } = req.params;
    const result = await controller.getCatIDPro();
    res.json(result);
  });
}
startCatIDPro()


 
 

