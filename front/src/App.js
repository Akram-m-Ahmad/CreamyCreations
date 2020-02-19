import React,{Component} from 'react';
import './App.css';
import Nproducts from './page/Products/Products'
import Navbar from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import News from './page/News/News'
import Event from './page/Event/Event'



class App extends Component {
  
  render() {
    return (
      <div >
      <Navbar/>
      {/* <Event/> */}
      {/* <Nproducts/> */}
<News/>
      </div>
    );
  }
}
export default App;


