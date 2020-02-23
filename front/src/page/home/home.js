import React, { Component } from 'react';
import './home.css';
import * as bootstrap from 'react-bootstrap'

import { SocialIcon } from 'react-social-icons';

class home extends React.Component {
    render() {
        return (

            <div id='home'>
                <br />
                <h1 className="header  effect12"> Welcome to Lama kitchen  </h1>


                <br />
                <bootstrap.Carousel interval="2000" >
                   
                    <bootstrap.Carousel.Item>
                        <img
                            className="image"
                            src='/Image/crepe1.jpeg'
                            alt="First cake"
                            width="800px"
                            height="500px"
                        />
                        <bootstrap.Carousel.Caption className='slidera'>
                            <h3>lama</h3>
                            <p>kitchen and Other</p>
                        </bootstrap.Carousel.Caption>
                    </bootstrap.Carousel.Item>

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
                            src='/Image/crepe2.jpg'
                            alt="second cake"
                            width="800px"
                            height="500px"
                        />
                        <bootstrap.Carousel.Caption className='slidera'>
                            <h3>lama</h3>
                            <p>kitchen and Other</p>
                        </bootstrap.Carousel.Caption>

                    </bootstrap.Carousel.Item>
                    <bootstrap.Carousel.Item>
                        <img
                            className="image"
                            src='/Image/crepe11.jpeg'
                            alt="Third cake"
                            width="800px"
                            height="500px"
                        />

                        <bootstrap.Carousel.Caption className='slidera'>
                            <h3>lama</h3>
                            <p>kitchen and Other</p>
                        </bootstrap.Carousel.Caption>
                    </bootstrap.Carousel.Item>

                    <bootstrap.Carousel.Item>
                        <img
                            className="image"
                            src='/Image/crepe12.jpeg'
                            alt="Third cake"
                            width="800px"
                            height="500px"
                        />
                        <bootstrap.Carousel.Caption className='slidera'>
                            <h3>lama</h3>
                            <p>kitchen and Other</p>
                        </bootstrap.Carousel.Caption>

                    </bootstrap.Carousel.Item>

                    <bootstrap.Carousel.Item>
                        <img
                            className="image"
                            src='/Image/crepe13.jpeg'
                            alt="Third cake"
                            width="800px"
                            height="500px"
                        />

                        <bootstrap.Carousel.Caption className='slidera'>
                            <h3>lama</h3>
                            <p>kitchen and Other</p>
                        </bootstrap.Carousel.Caption>
                    </bootstrap.Carousel.Item>

                    <bootstrap.Carousel.Item>
                        <img
                            className="image"
                            src='/Image/crepe14.jpeg'
                            alt="Third cake"
                            width="800px"
                            height="500px"
                        />

                        <bootstrap.Carousel.Caption className='slidera'>
                            <h3>lama</h3>
                            <p>kitchen and Other</p>
                        </bootstrap.Carousel.Caption>
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
                        <bootstrap.Carousel.Caption className='slidera'>
                            <h3>lama</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </bootstrap.Carousel.Caption>

                    </bootstrap.Carousel.Item>



                    <bootstrap.Carousel.Item>
                        <img
                            className="image"
                            src='/Image/crepe19.jpeg'
                            alt="Third cake"
                            width="800px"
                            height="500px"
                        />
                        <bootstrap.Carousel.Caption className='slidera'>
                            <h3>lama</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </bootstrap.Carousel.Caption>

                    </bootstrap.Carousel.Item>
                    <bootstrap.Carousel.Item>
                        <img
                            className="image"
                            src='/Image/crepe20.jpeg'
                            alt="Third cake"
                            width="800px"
                            height="500px"
                        />
                        <bootstrap.Carousel.Caption className='slidera'>
                            <h3>lama</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </bootstrap.Carousel.Caption>

                    </bootstrap.Carousel.Item>

                    <bootstrap.Carousel.Item>
                        <img
                            className="image"
                            src='/Image/crepe21.jpeg'
                            alt="Third cake"
                            width="800px"
                            height="500px"
                        />
                        <bootstrap.Carousel.Caption className='slidera'>
                            <h3>lama</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </bootstrap.Carousel.Caption>

                    </bootstrap.Carousel.Item>
                </bootstrap.Carousel>
                <bootstrap.Card >
                    <bootstrap.Card.Header >About Lama</bootstrap.Card.Header>
                    <bootstrap.Card.Body>
                        <bootstrap.Card.Title>Lama Started With Creamy Creation</bootstrap.Card.Title>
                        <bootstrap.Card.Text>
                            Lama is an ambitious women. She started her career in Creamy Creations 2 years ago, and she got improved gradually. Now, she is getting more popular in her field of work. Since her childhood, she dreamed to have a brilliant and strong name in this field, and that
        development is her first and last goal, and now she is one of the most famous sweetness.</bootstrap.Card.Text>
                    </bootstrap.Card.Body>
                </bootstrap.Card>
                <br />
                <nav className="social">
                    <ul>
                        <li><a className="aaa" href="#">Facebook <SocialIcon url="http://facebook.com/jaketrent" /> </a></li>
                        <li><a className="aaa" href="#">Youtube <SocialIcon url="http://youtube.com/jaketrent" /></a></li>
                        <li><a className="aaa" href="#">Whatsapp <SocialIcon url="http://whatsapp.com/jaketrent" /> </a></li>
                        <li><a className="aaa" href="#">Github <SocialIcon url="http://github.com/jaketrent" /></a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}


export default home;