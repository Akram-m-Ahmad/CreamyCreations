// import React from 'react';
// import './product.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NaddNew from './add-product'
// import { Dropdown, MenuItem, Button, ButtonToolbar, DropdownButton, SplitButton, Container, Row, Col, FormControl, Nav, thumbnail, Table, Image } from 'react-bootstrap';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import { BrowserRouter, Redirect } from 'react-router';


// class product extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = { Products: [] };

//   }





//   async componentDidMount() {
// //Products
//     const response = await fetch('http://localhost:8080/Products/');
//     const result = await response.json();
//     console.log(result);

  
// //Categories
//     const response1 = await fetch('http://localhost:8080/Categories/');

//     const result1 = await response1.json();
//     console.log(result1);
//     this.setState({
//       Products: result, error: "none",
//       Categories: result1, error: "none"      
//     });

   

//   }
  
 
//   handleClick(compName, e) {
//     console.log(compName);
//     this.setState({ render: compName });
//   }
//   _renderSubComp() {
//     switch (this.state.render) {
//       case 'NaddNew': return <NaddNew />

//     }
//   }
//   render() {

//     return (
//       <>
 

//          <Button className='add' onClick={this.handleClick.bind(this,'NaddNew')} size="lg" variant="danger">Add new product</Button>
       
//        {this._renderSubComp()} 
  
//         <Container>

//           {
//             this.state.Products.map(Product =>
//               <Row className="row">
//                 <Col calssName="col" sm={2}>
//                   <img
//                     width={170}
//                     height={170}
//                     className="mr-3 img_product"
//                     src={require("../Image/image.jpg")}
//                     alt="Generic placeholder"

//                   />
//                 </Col>
//                 <Col className="col" sm={8}>
               
//                   <p  ><span>Name:</span> {Product.name}</p>
//                   <p><span>Description:</span> {Product.description}</p>
//                   <p><span>Price:</span> {Product.price} $</p>
//                   <p className="drop"> <span>Categories:</span></p>
//                   <DropdownButton id="dropdown-basic-button" size="sm" variant="secondary" title="Categories">
        
//                     {this.state.Categories.map(Categorie =>
//                       <Dropdown.Item >{Categorie.name}</Dropdown.Item>
//                     )}
//                   </DropdownButton>


//                 </Col>
//                 <Col className="col" sm>
//                   <div className="icon">
//                     <div className="lid" />
//                     <div className="lidcap" />
//                     <div className="bin" />
//                   </div> 
                  
//                      <svg onClick={this.del = async()=>{
//                                          window.confirm('Are you sure you wish to delete this item?')
//                                          window.location.reload(); 
//                        const responsep = await fetch(`http://localhost:8080/Products/delete/${Product.ID}`);
//                         const resultp = await responsep.json();
//                        console.log(resultp);
                       

//                      } }className="icon-trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 40" width={40} height={40}>
//                     <path className="trash-lid" fillRule="evenodd" d="M6 15l4 0 0-3 8 0 0 3 4 0 0 2 -16 0zM12 14l4 0 0 1 -4 0z" />
//                     <path className="trash-can" d="M8 17h2v9h8v-9h2v9a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z" />
//                   </svg>

//                   <img
//                     width={170}
//                     height={170}
//                     className="mr-3 imgUpdate"
//                     src={require("../Image/1.png")}
//                     alt="Generic placeholder"

//                   />

//                 </Col>
//               </Row>


//             )
//           }



//         </Container>
//       </>
//     );
//   }
// }

//