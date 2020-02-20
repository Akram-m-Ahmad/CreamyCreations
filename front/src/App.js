import React, { Component } from 'react';
import './App.css';
import Nproducts from './page/Products/Products'
import Navbar from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import News from './page/News/News'
import Event from './page/Event/Event'
import Pro from './page/Admin/productA'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StickyFooter from 'react-sticky-footer';
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

            <Route exact path="/" component={Pro} />
          </Switch>
        </div>
        <StickyFooter
          bottomThreshold={200}
          normalStyles={{
            backgroundColor: "#999999",
            padding: "2rem"
          }}

        >
          Add any footer markup here
</StickyFooter>
      </BrowserRouter>

    );
  }
}
export default App;


