import React,{Component} from 'react';
import './News.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NewsItem  from '../../components/newItem';


class News extends Component {

  render() {
    return (
      <>
      
     <NewsItem/>
     <NewsItem/>
      </>
    );
  }
}
export default News;
