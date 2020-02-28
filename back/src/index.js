import express from 'express';
import ProductsDatabase from './Product_db';
import NewsDatabase from './News_db';
import CategoriesDatabase from './Categories_db'
import Eventsdatabase from './Events_db'
import getProductImageDatabase from './ProductImage_db'
import OrdersDatabase from './Orders_db'
import CatIDProData from './CatIDPro'
const multer = require('multer');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, './public'))); // <-- location of public dir
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
    const { description, date, newsImg } = req.query;
    console.log({ description, date, newsImg })
    const result = await controller.createNews({ description, date, newsImg });
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


  app.get('/Events/delete/:id', async (req, res) => {
    const { id } = req.params;
    const result = await controller.deleteEvents(id);
    res.json(result);
  });


  app.get('/Events/create', async (req, res) => {
    const { description, location, date, eventImg } = req.query;
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

// Event Image for multer


const multerStorage = multer.diskStorage({
  destination: path.join(__dirname, './public/images'),
  filename: (req, file, cb) => {
    const { fieldname, originalname } = file
    const date = Date.now()
    const filename = `${fieldname}-${date}-${originalname}`
    cb(null, filename)
  }
})

const upload = multer({ storage: multerStorage })
const startForm = async () => {
  const controller = await Eventsdatabase();
  app.post("/formEvents", upload.single('image'), async (req, res) => {
    const { description, location, date } = req.body;
    const eventImg = req.file.filename
    try {
      const result = await controller.createEvents({ description, location, date, eventImg });
      res.json({ success: true, result });
    } catch (err) {
      console.log(err.message)
      console.log("jsjj")
    }
  });
}
startForm()

const startProductsForm = async () => {
  const controller = await ProductsDatabase();
   app.post("/formPro", upload.single('image'), async (req, res) => {
     const { name, description, price, Categories_ID} = req.body;
     const proImg = req.file.filename
    try {
      const result = await controller.createProducts({ name, description, price, Categories_ID, proImg});
      res.json({ success: true, result });
    } catch (err) {
      console.log(err.message)
      console.log("jsjj")
    }
  });
}
startProductsForm()

const startNewsForm = async () => {
  const controller = await NewsDatabase();
  app.post("/formNews", upload.single('image'), async (req, res) => {
    const { description, date } = req.body;
    const newsImg = req.file.filename
    try {
      const result = await controller.createNews({ description, date, newsImg });
      res.json({ success: true, result });
    } catch (err) {
      console.log(err.message)
      console.log("jsjj")
    }
  });
}
startNewsForm()

//imageById

const startImageId = async () => {
  const controller = await CategoriesDatabase();
  app.get('/ImagId/', async (req, res) => {
    
    const result = await controller.getImageId( );
    console.log(result)
    res.json(result);
  });
}
startImageId()