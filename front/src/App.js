import React, { Component } from 'react';
import './App.css';
import Nproducts from './page/Products/Products'
import Navbar from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import News from './page/News/News'
import Event from './page/Event/Event'
import Footer from './components/footer'
import Home from './page/home/home'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>

            <Route path="/Nproducts" component={Nproducts} />
            <Route path="/News" component={News} />
            <Route path="/Events" component={Event} />

            <Route exact path="/" component={Home} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>

    );
  }
}
export default App;


