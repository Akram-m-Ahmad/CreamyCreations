import React from 'react';
import './Events.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddNewsForm } from '../../components/AddNewsForm';
export default class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Description: [],
                      Date: [],
           News: [],
            addModalShow: false,
        };
    }
    async componentDidMount() {
        //Events
        const response = await fetch('http://localhost:8080/News/');
        const result = await response.json();
        console.log(result);

        this.setState({
            News: result
        })
    }


    async handleSubmit(event) {

        event.preventDefault()
        const responseO = await fetch(`http://localhost:8080/Events/create/?date=${this.state.date}&description=${this.state.description}&Location=${this.state.Location}&Events_ID=dw`);
        const result = await responseO.json();
        window.location.reload();

    }







    render() {
        let addModalClose = () => this.setState({ addModalShow: false });
        return (
            <>
                <ButtonToolbar>
                    <Button
                        variant="primary"
                        onClick={() => this.setState({ addModalShow: true })}
                    > Add New News </Button>
                    <AddNewsForm
                        show={this.state.addModalShow}
                        onHide={addModalClose}
                    />


                </ButtonToolbar>
                {this.state.News.map(New =>
                    <Row className="row">
                        <Col calssName="col" sm={2}>
                            <img
                                width={170}
                                height={170}
                                className="mr-3 img_product"
                                alt="Generic placeholder"
                                src={`http://localhost:8080/images/${New.newsImg}`}
                            />

                        </Col>

                        <Col className="col" sm={8}>
                            <span>Description: {New.description}</span><br /><hr />
                             <span>Date: {New.date}</span><br />

                        </Col>

                        <Col className="col" sm>
                            <div className="icon">

                                <div className="lid" />
                                <div className="lidcap" />
                                <div className="bin" />
                            </div>
                            <span class="icon-trash" onClick={this.del = async () => {
                                if(window.confirm('Are you sure you wish to delete this item?')){
                                    
                                window.location.reload();
                                const responsep = await fetch(`http://localhost:8080/News/delete/${New.ID}`);
                                const resultp = await responsep.json();
                                console.log(resultp);
                            }}}  >
                            </span>
                        </Col>

                    </Row>

                )}

            </>
        );

    }
}