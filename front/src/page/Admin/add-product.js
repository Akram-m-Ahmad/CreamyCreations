import React from 'react';
import './product.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormControl, InputGroup, Modal, Button, Row, col, Form } from 'react-bootstrap';
import { MDBBadge } from 'mdbreact';

class AddProduct extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      description: '',
      category: -1,
      product: this.props.product,
      mode: this.props.mode,
      categories: [],
      product: this.props.value

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value

    });
  }
  handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }

  async componentDidMount() {
    //Products
    const response = await fetch(`http://localhost:8080/Categories`);
    const result = await response.json();
    this.setState({
      categories: result
    })
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.image.files[0])
    const body = new FormData();
    body.append('image', e.target.image.files[0]);
    body.append('name', this.state.name);
    body.append('price', this.state.price);
    body.append('catID', this.state.category);
    body.append('description', this.state.description);
    const response = await fetch('http://localhost:8080/Products/create',
      {
        method: "POST",
        body

      });
    console.log(response);
  }
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3>{this.props.mode}</h3>
          </Modal.Title>
        </Modal.Header>

        <div className="container">
          <form onSubmit={this.handleSubmit} style={{ marginTop: '20PX' }}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <MDBBadge tag="a" color="light">Product Name</MDBBadge>  </InputGroup.Prepend>
              <FormControl name='name' onChange={(e) => { this.handleChange(e) }} />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <MDBBadge tag="a" color="light">Product Description</MDBBadge>
              </InputGroup.Prepend>
              <FormControl name='description' as="textarea" onChange={(e) => { this.handleChange(e) }} />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <MDBBadge tag="a" color="light">Price</MDBBadge></InputGroup.Prepend>
              <FormControl name='price' aria-label="Amount (to the nearest dollar)" onChange={(e) => { this.handleChange(e) }} />
              <InputGroup.Append>
                <MDBBadge tag="a" color="light">.00 $</MDBBadge></InputGroup.Append>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <MDBBadge tag="a" color="light">Product Category</MDBBadge>
              </InputGroup.Prepend>
              <FormControl as="select" name='category' onChange={(e) => { this.handleChange(e) }}>
                {this.state.categories.map((cat, index) =>
                  <option value={index} key={index}>{cat.name}</option>)}</FormControl>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <MDBBadge tag="a" color="light">Product Image</MDBBadge>  </InputGroup.Prepend>
              <div className="custom-file">
                <input type="file" name="image" />
              </div></InputGroup>
            <Button variant="outline-danger" size="lg" style={{ marginTop: '20px', marginBottom: '20px', borderRadius: '50px' }} block="block" type="submit">
              {this.props.mode}
            </Button>
          </form>


        </div>


      </Modal>

    );
  }
}
export default AddProduct;
