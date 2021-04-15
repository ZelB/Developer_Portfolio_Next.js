/*Home Page to give table of content of site and navigation */
import React from 'react'

//import Layout Component contiaing layout and Navigation
import Layout from '../components/Layout.js';

//import container and layout components from bootstrap react
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { GiMagnifyingGlass } from "react-icons/gi";


const index = () => {
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

                    h4 {
                        background: #DDD;
                        padding: 10px;
                        text-align: center;
                    }

                    h5 {
                        margin: 10px;
                        padding: 10px;
                        text-align: center;
                    }
                    
                    `}
                </style>

            <h1>HOME PAGE</h1>
            <br />
            
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={3}>
                        <Image src='../static/profileImg.jpg' alt="profile image" width='75%' rounded  />
                    </Col>

                    <Col xs={12} md={9}>
                        <p> <h4>Name:</h4> <h5>Zelda Basson</h5></p> 

                        <p> <h4>Marital Status:</h4> <h5>Married</h5></p>
                        
                        <p> <h4>Driver's License:</h4> <h5>Yes, Code 8</h5></p>

                        <p> <h4>Date Of Birth:</h4> <h5> 1993, February 22</h5></p>
                     
                    </Col>
                </Row>
                <p />
                <Row className="justify-content-md-center">
                    <Col>
                        <h4> <GiMagnifyingGlass />  More about me...</h4>
                        <p>
                            Full stack web developer with a diploma in IT (2021). 
                            Experienced aircraft maintenance planner with a demonstrated history of working in the aviation industry. 
                            Skilled in Aviation, Bookkeeping, Maintenance, Project Planning. 
                            Goal driven and enjoy working in a team. 
                            I have designed, implemented and maintained varies systems during my previous job functions. 
                            I enjoy analysing and always aim to be prepared. 
                        </p>

                        <p>
                            Honesty, reliability and trustworthiness are qualities very important to me. 
                            One should always practice these qualities inside and outside of your working environment. 
                            I see myself as a good team player and encourage my fellow team members. You will not always have all the answers; 
                            That is why I want to be part of the solution and brain storming for better alternatives.
                        </p>

                        <p>
                            My hobbies include hiking and long walks along on the beach. I also enjoy home DIY's and working in the garden.
                        </p>
                    </Col>
                    
                </Row>
               

            </Container>
            <br />

        </Layout>
            
        
    )
}

export default index

