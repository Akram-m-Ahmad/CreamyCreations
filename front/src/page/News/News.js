import React,{Component} from 'react';
import './News.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NewsItem  from '../../components/newItem';
import {Col,Image } from 'react-bootstrap';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      News:[]
    };
  }
  async componentDidMount() {
    //News
    const response = await fetch('http://localhost:8080/News/');
    const result = await response.json();
    console.log(result);
   
    this.setState({
      News: result, error: "none",
    });
    }
    render() {
    return (
      <div style={{margin: 0}} className="mainCountainer">

             
       {this.state.News.map(nnews => (
          <NewsItem value={nnews}/>
            )
            )
       }
      </div>
    );
  }
}
export default News;
