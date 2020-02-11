import React,{Component} from 'react';
import './App.css';
import Nproducts from './page/Products/Products'
import Navbar from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css';





class App extends Component {
  
  render() {
    return (
      <>
      <Navbar/>
      <Nproducts/>

      </>
    );
  }
}
export default App;


