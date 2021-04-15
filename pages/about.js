/* serve as an introduction to you as a developer –
your educational history, your work history, who you are and what
you’re passionate about.*/

import React from 'react'

//import Layout Component contiaing layout and Navigation
import Layout from '../components/Layout.js';

//import container and layout components from bootstrap react
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import icons
import { GiBlackBook } from "react-icons/gi";
import { GiFireworkRocket } from "react-icons/gi";

// Make custom CSS rules to style component
const layoutStyle = {
    margin: 10,
    padding: 10
}

const about = () => {
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
                    
                    h2 {
                        background: #DDD;
                        text-align: center;
                        padding: 10px;
                    }

                    h4 {
                        margin: 10px;
                        padding: 10px;
                    }

                    a, em {
                        color: gray;
                        margin: 10px;
                        padding: 7px;
                    }

                    p {
                        margin: 15px;
                        padding: 10px;
                    }
                    
                    `}
                </style>

            <h1>ABOUT ME</h1>
            <br />
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={6}>
                       <h2> <GiBlackBook /> Education</h2>
                       <h4>Tertiary Education</h4>
                       <ul>
                           <li style={layoutStyle}>Diploma in Information Technologies <em>
                               <a href='https://www.unisa.ac.za/sites/corporate/default/Register-to-study-through-Unisa/Undergraduate-&-honours-qualifications/Find-your-qualification-&-choose-your-modules/All-qualifications/Diploma-in-Information-Technology-Information-Technology-(98806-%E2%80%93-ITE)'>
                                   UNISA | 2017 to 2021 (click me)</a></em>
                           </li>

                           <li style={layoutStyle}>Full Stack Developer Course  <em>
                               <a href='https://www.hyperiondev.com/bootcamps/web_development/'>
                                HyperionDev | 2021 (click me)</a></em>
                           </li>

                           <li style={layoutStyle}>NQF 5 Bookkeeping Course Certificate  <em>
                               <a>UNISA | 2015</a></em>  
                           </li>
                       </ul>

                       <p />
                        <h4>On The Job Training and Short Courses</h4>
                        <ul>
                            <li style={layoutStyle}>Lead Aviation Auditors Course <em>Cranfield Aviation Training | 2020</em></li>
                            <li style={layoutStyle}>Dangerous Goods <em>The Academy of Aviation| 2020</em></li>
                            <li style={layoutStyle}>Piston Engine General (Cat C) <em>Debela Training and Management | 2017</em></li>
                            <li style={layoutStyle}>Aircraft Maintenance Planning <em>Cranfield Aviation Training | 2016</em></li>
                        </ul>

                    </Col>

                    <Col xs={12} md={6}>
                        <h2> <GiFireworkRocket />  Work History</h2>
                        <h5>ExecuJet Aviation (Pty) Ltd | LuxAviation Group</h5>
                        <h6>Maintenance Planner - Operations | <em>July 2019 to Dec 2020</em></h6>
                        <ul>
                            <li>Aircraft Maintenance Planning for various make and models aircraft</li>
                            <li>Airworthiness monitoring and Aircraft Management services </li>
                            <li>Maintaining a database with aircraft airworthiness documentation. </li>
                            <li>Monitoring publications: AMM, AD’s SB’s, AFM’s, MMEL’s.Logbook research for applicability </li>
                            <li>Aircraft C of A Renewals with the SACAA </li>
                            <li>Built a database and tracking all aircraft AFM revision status. </li>
                            <li>Assisting with building aircraft AMPs </li>
                            <li>AOC airworthiness oversight – part 135 and part 43 regulations </li>
                        </ul>
                        <p />

                        <h5>CDC Aviation (Pty) Ltd | Cirrus Africa</h5>
                        <h6>Maintenance Planner and Administrator | <em>January 2018 to June 2019</em></h6>
                        <ul>
                            <li>Aircraft maintenance planner for entire fleet including flight school aircraft</li>
                            <li>Aircraft maintenance status tracking and AD / SB applicability research. </li>
                            <li>Compiling aircraft logbooks for sign-outs and release to services </li>
                            <li>Managing aircraft jobs, work packs, parts allocated, Sub Contractors and CRMA’s. </li>
                            <li>Compiling estimates and client maintenance inquiries. </li>
                            <li>Effective managing of Aircrafts, Aircraft documentation, Spare parts, Aircraft Hours, Aircraft Routs, Lodge communication and Runway assessments </li>
                            <li>All maintenance division invoicing and Debit Control. </li>
                            <li>Handled all Foreign and SA CAA audits </li>
                        </ul>

                        <h5>Avdex (Pty) Ltd</h5>
                        <h6>Bookkeeper and Maintenance Administrator | <em>March 2015 to January 2018</em></h6>
                        <ul>
                            <li>Administrator on the AMP Online aircraft maintenance tracking system. </li>
                            <li>Client and software users support </li>
                            <li>Implemented and maintained a tracking system which stays on top of the latest Manual Revisions and Publications of different aircraft/ engine make and models. </li>
                            <li>Routine monitoring AD’s and SB’s and adding / building items into Aircraft maintenance Schedules. </li>
                            <li>Building Aircraft Maintenance Tracking Schedules which are used to track aircraft maintenance. </li>
                            <li>Reporting errors “Bugs” in the website and testing any changes made. </li>
                            <li>The Company’s Bookkeeper. All accounts inquiries / Invoicing / Statements. </li>
                            <li>Meeting with clients and providing software training. </li>
                        </ul>


                    </Col>

                </Row>

            </Container>
        </Layout>
    )
}

export default about
