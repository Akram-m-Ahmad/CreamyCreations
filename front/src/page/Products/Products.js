import React from 'react';
import '../Products/Products.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {   Container, Row } from 'react-bootstrap';
 import CategoryItems from '../../components/CategoryItems'

export default class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      name: "",
      modalInputName: "",
      // Products: [],
      Categories: [],
      Cate: [],
      Images: []
    };
  }

  async componentDidMount() {
    /* //Products
    const response = await fetch('http://localhost:8080/Products/');
    const result = await response.json();
    console.log(result); */
    //Gategories
    const responseG = await fetch('http://localhost:8080/Categories/');
    const resultG = await responseG.json();
    // console.log(resultG);
    //ProductsImage
    const responseI = await fetch('http://localhost:8080/ProductImages/');
    const resultI = await responseI.json();
    // console.log(resultI);
    //CatIDPro
    const responseID = await fetch('http://localhost:8080/CatIDPro/');
    const resulta = await responseID.json();
    // console.log(resulta);
    this.setState({
/*       Products: result, error: "none",
 */      Categories: resultG, 
      Cate: resulta,  
      Images: resultI, 
    });


  }

  render() {

    return (
      <div className="wrapper">




        <Container>

          <div>




            {this.state.Categories.map((cat, index) => (
              <>
                <h1 className="topicPro">{cat.name}</h1>
                <Row className="roww">
                  <CategoryItems
                    value={cat.ID}
                    key={index} />
                </Row>
              </>
            ))}
          </div>


        </Container>
        <div />
      </div>)
  }
}