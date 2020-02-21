import React, { Component } from 'react';
import './home.css';
import * as bootstrap from 'react-bootstrap'




class home extends React.Component {
    render() {
        return (
            <div id='home'>
                <br />
                <h1 class="header"> Welcome To Kitchen Lama</h1>


                <br />
                <bootstrap.Carousel interval="2000">


                    <bootstrap.Carousel.Item>
                        <img
                            className="image"
                            src='/Image/giphy.gif'
                            alt="First cake"
                            width="800px"
                            height="500px"
                        />

                    </bootstrap.Carousel.Item>



                    <bootstrap.Carousel.Item>
                        <img
                            className="image"
                            src='/Image/crepe1.jpeg'
                            alt="First cake"
                            width="800px"
                            height="500px"
                        />

                    </bootstrap.Carousel.Item>
                    <bootstrap.Carousel.Item>
                        <img
                            className="image"
                            src='/Image/crepe2.jpg'
                            alt="second cake"
                            width="800px"
                            height="500px"
                        />


                    </bootstrap.Carousel.Item>
                    <bootstrap.Carousel.Item>
                        <img
                            className="image"
                            src='/Image/crepe11.jpeg'
                            alt="Third cake"
                            width="800px"
                            height="500px"
                        />


                    </bootstrap.Carousel.Item>

                    <bootstrap.Carousel.Item>
                        <img
                            className="image"
                            src='/Image/crepe12.jpeg'
                            alt="Third cake"
                            width="800px"
                            height="500px"
                        />


                    </bootstrap.Carousel.Item>

                    <bootstrap.Carousel.Item>
                        <img
                            className="image"
                            src='/Image/crepe13.jpeg'
                            alt="Third cake"
                            width="800px"
                            height="500px"
                        />


                    </bootstrap.Carousel.Item>

                    <bootstrap.Carousel.Item>
                        <img
                            className="image"
                            src='/Image/crepe14.jpeg'
                            alt="Third cake"
                            width="800px"
                            height="500px"
                        />


                    </bootstrap.Carousel.Item>

                    <bootstrap.Carousel.Item>
                        <img
                            className="image"
                            src='/Image/crepe17.jpeg'
                            alt="Third cake"
                            width="800px"
                            height="500px"
                        />


                    </bootstrap.Carousel.Item>

                    <bootstrap.Carousel.Item>
                        <img
                            className="image"
                            src='/Image/crepe18.jpeg'
                            alt="Third cake"
                            width="800px"
                            height="500px"
                        />


                    </bootstrap.Carousel.Item>



                    <bootstrap.Carousel.Item>
                        <img
                            className="image"
                            src='/Image/crepe19.jpeg'
                            alt="Third cake"
                            width="800px"
                            height="500px"
                        />


                    </bootstrap.Carousel.Item>
                    <bootstrap.Carousel.Item>
                        <img
                            className="image"
                            src='/Image/crepe20.jpeg'
                            alt="Third cake"
                            width="800px"
                            height="500px"
                        />


                    </bootstrap.Carousel.Item>

                    <bootstrap.Carousel.Item>
                        <img
                            className="image"
                            src='/Image/crepe21.jpeg'
                            alt="Third cake"
                            width="800px"
                            height="500px"
                        />


                    </bootstrap.Carousel.Item>
                </bootstrap.Carousel>
                <bootstrap.Card class="card">
                    <bootstrap.Card.Header>About Lama</bootstrap.Card.Header>
                    <bootstrap.Card.Body>
                        <bootstrap.Card.Title>Lama Started With Creamy Creation</bootstrap.Card.Title>
                        <bootstrap.Card.Text>
                            Lama is an ambitious women. She started her career in Creamy Creations 2 years ago, and she got improved gradually. Now, she is getting more popular in her field of work. Since her childhood, she dreamed to have a brilliant and strong name in this field, and that
        development is her first and last goal, and now she is one of the most famous sweetness.</bootstrap.Card.Text>
                    </bootstrap.Card.Body>
                </bootstrap.Card>
                <br />

            </div>
        );
    }
}


export default home;