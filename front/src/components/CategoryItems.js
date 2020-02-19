import React from 'react';
import '../page/Products/Products.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, MenuItem, Button, ButtonToolbar, DropdownButton, SplitButton, Container, Row, Col, FormControl, Nav, thumbnail, Table, Image } from 'react-bootstrap';
import Modal from "./Model";
import ImageGallery from 'react-image-gallery';


function CategoryItems(props) {

  let productByCat = [];
  const products = async () => {
    const response = await fetch(`http://localhost:8080/OrderByCatProducts/${this.props.value}`);
    const result = await response.json();
    productByCat = result;
  }
  return (
    <>
      {alert("hello")}
      {productByCat.map((product, index) => (
        <>

          <Col calssName="col cl" sm>
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <img className="ImagePr" src={require("../Image/image.jpg")} alt="Paris" />
                </div>
                <div className="flip-box-back">
                  <h2 className='topicPro'>Akram</h2>
                  <p><span>Name:</span> {product.name}</p>
                  <p><span>Description:</span> {product.description}</p>
                  <p><span>Price:</span> {product.price} $</p>
                  {/* <p><span>Price:</span> {props.value.Categories_ID} $</p> */}
                  <Button className='add add2' onClick={e => this.modalOpen(e)} size="lg" variant="danger">Add new product</Button>
                </div>
              </div>
            </div>

          </Col>
        </>
      ))}
    </>
  )
} export default CategoryItems;

// class CategoryItems extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       products: [],
//       catID: this.props.value.ID
//     }
//     alert(this.props.value.ID)
//   }
//   async componentDidMount() {

//     //Products
//     const response = await fetch('http://localhost:8080/Products/');
//     const result = await response.json();
//     /* console.log(result); */
//     this.setState({
//       products: result.filter((product, index) =>
//         product.Categories_ID == this.state.catID
//       ),
//       error: "none"
//     })
//   }
//   render() {
//     return (
//       <>
//         {this.state.products.map((product, index) => (
//           <Col calssName="col cl" sm>
//             <div className="flip-box">
//               <div className="flip-box-inner">
//                 <div className="flip-box-front">
//                   <img className="ImagePr" src={require("../Image/image.jpg")} alt="Paris" />
//                 </div>
//                 <div className="flip-box-back">
//                   <h2 className='topicPro'>Akram</h2>
//                   <p><span>Name:</span> {product.name}</p>
//                   <p><span>Description:</span> {product.description}</p>
//                   <p><span>Price:</span> {product.price} $</p>
//                   {/* <p><span>Price:</span> {props.value.Categories_ID} $</p> */}
//                   <Button className='add add2' onClick={e => this.modalOpen(e)} size="lg" variant="danger">Add new product</Button>
//                 </div>
//               </div>
//             </div>

//           </Col>

//         ))}
//       </>
//     )
//   }
// }
// export default CategoryItems;