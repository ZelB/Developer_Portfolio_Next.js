/*contain your best work. You will want to
show off diversity as much as possible here. You should have at least
one project deployed to Heroku. some of your work to Github and link to those repositories from here*/

import React from 'react'

//import Layout Component contiaing layout and Navigation
import Layout from '../components/Layout.js';

//import container and layout components from bootstrap react
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import cards from bootstrap to display 
import Card from 'react-bootstrap/Card';


const projects = () => {
    return (
        <Layout>
            <style jsx>
                    {`
                    h1 {
                        text-indent: 150px;
                        text-shadow: 3px 2px #DDD;
                        font-family: 'Train One', cursive;
                        fontWeight: 800;
                        margin: 20;
                    }
                    h5 {
                        margin: 10px;
                        padding: 10px;
                        text-align: center;
                     }

                     h4 {
                        margin: 10px;
                        padding: 10px;
                        text-align: center;
                        color: gray;
                     }
                    
                    `}
            </style>

            <h1>PROJECTS LISTING</h1>
            <p />

            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={4}>

                        <Card>
                            <Card.Img variant="top" src='../static/weddingImg.png'/>
                            <Card.Body>
                                <Card.Title><h4>Online fictitious website where users shop for wedding decorations</h4></Card.Title>
                                <Card.Text>
                                <h5>The project was created using:</h5>
                                <p>
                                    <ul>
                                        <li> HTML </li>
                                        <li> CSS</li>
                                        <li> JavaScript</li>
                                        <li> jQuery</li>
                                    </ul>
                                </p>

                                <p><h5>You are welcome to view my <a href='https://github.com/ZelB/Elegant_Weddings_Store' target='_blank'>GitHub repository</a></h5></p>
                                </Card.Text>
                                <h5><a href='https://zelb.github.io/Elegant_Weddings_Store/' target='_blank'>Go To Website</a></h5>
                            </Card.Body>
                        </Card>
                            
                    </Col>

                    <Col xs={12} md={4}>
                        <Card>
                            <Card.Img variant="top" src='../static/iTunesImg.png'/>
                            <Card.Body>
                                <Card.Title><h4>iTunes Wish List</h4></Card.Title>
                                <Card.Text>
                                <h5>The project was created using:</h5>
                                <p>
                                    <ul>
                                        <li> React </li>
                                        <li> CSS</li>
                                        <li> Bootstrap</li>
                                        <li> JavaScript</li>
                                        <li> API</li>
                                    </ul>
                                </p>

                                <p><h5>You are welcome to view my <a href='https://github.com/ZelB/iTunes_Wish_List' target='_blank'>GitHub repository</a></h5></p>
                                </Card.Text>
                                <h5><a href='https://tranquil-woodland-15636.herokuapp.com/' target='_blank'>Go To Website</a></h5>
                            </Card.Body>
                        </Card>
                        
                    </Col>

                    <Col xs={12} md={4}>
                        <Card>
                            <Card.Img variant="top" src='../static/gameImg.png'/>
                            <Card.Body>
                                <Card.Title><h4>Memory Card Game using react</h4></Card.Title>
                                <Card.Text>
                                <h5>The project was created using:</h5>
                                <p>
                                    <ul>
                                        <li> React </li>
                                        <li> CSS</li>
                                        <li> Bootstrap</li>
                                        <li> JavaScript</li>
                                        <li> BrowserRouter</li>
                                    </ul>
                                </p>

                                <p><h5>You are welcome to view my <a href='https://github.com/ZelB/React_Memory_Game' target='_blank'>GitHub repository</a></h5></p>
                                </Card.Text>
                                <h5><a href='https://shrouded-fjord-75184.herokuapp.com/play' target='_blank'>Go To Website</a></h5>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                </Row>

            </Container>
           
        </Layout>
    )
}

export default projects
