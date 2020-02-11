import React,{Component} from 'react';
import './App.css';
import Nheader from './components/header'
import Nproduct from './page/product'
import order from './page/order'
class App extends Component {
  
  render() {
    return (
      <>
       {/* <div className='App'>
      Contact List:
      <ul>
      {
  this.state.Products.map(Product=><li>{Product.name} </li>)
      }
     </ul>
      </div> */}
      <Nheader/>
      <Nproduct/>

      </>
    );
  }
}
export default App;


