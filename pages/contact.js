/* your contact details (emailaddress, telephone number etc).*/

import React from 'react'
//import Layout Component contiaing layout and Navigation
import Layout from '../components/Layout.js';

//import container and layout components from bootstrap react
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import cards from bootstrap to display 
import Card from 'react-bootstrap/Card';

//import icons
import { AiTwotonePhone } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

const contact = () => {
    return (
        <Layout>
            <style jsx>
                    {`
                    h1 {
                        text-shadow: 3px 2px #DDD;
                        font-family: 'Train One', cursive;
                        fontWeight: 800;
                        margin: 20;
                        text-indent: 150px;
                    }

                    h5 {
                        margin: 7px;
                        padding: 7px;
                        text-align: center;
                     }
                    
                    `}
            </style>

            <h1>CONTACT INFORMATION</h1>
            <p />

            <Container fluid="md">
                <Row className="justify-content-md-center">
                    <Col>
                        <Card style={{ width: '25rem' }}>
                            <Card.Img variant="top" src='../static/codingHead.jpg' />
                                <Card.Text><h5><AiTwotonePhone /> (+27)78 458 7663</h5></Card.Text>
                                <Card.Text><h5><AiTwotoneMail /> zbasson73@gmail.com</h5></Card.Text>
                                <Card.Text><h5><AiFillLinkedin /> <a href="https://www.linkedin.com/in/zelda-basson-790985129/">Linkedin</a></h5> </Card.Text>
                                <Card.Text><h5><AiOutlineGithub /> <a href="https://github.com/ZelB/">GitHub</a></h5> </Card.Text>

                        </Card>
                    </Col>
                </Row>
            </Container>
           
        </Layout>
    )
}

export default contact
