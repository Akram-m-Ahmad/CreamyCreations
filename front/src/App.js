import React, { Component } from 'react';
import './App.css';
import Nproducts from './page/Products/Products'
import Navbar from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import News from './page/News/News'
import Event from './page/Event/Event'
import Footer from './components/footer'
import Home from './page/home/home'
import Orders from './page/Admin/Orders'
import AddProduct from './page/Admin/add-product'
import AdminProducts from './page/Admin/productA'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EventsA  from "./page/Admin/Events"
import Scroll from './components/Scroll'
class App extends Component {
   
  render() {
        
    return (

      <BrowserRouter>
        {/* <Orders /> */}
<EventsA/>
        <div className="App">
          <Navbar />
          <AdminProducts />
          {/* <Switch>

            <Route path="/Nproducts" component={Nproducts} />
            <Route path="/News" component={News} />
            <Route path="/Events" component={Event} />
            <Route path="/AdminAddProduct" component={AddProduct} />
            <Route exact path="/" component={Home} />
          </Switch> */}
         </div>
        <Footer />
       <Scroll/>
      </BrowserRouter>

    );
  }
}
export default App;


