import React from 'react';

import {Row, Col, Container} from 'react-bootstrap';
import Navbar from '../../components/navbar';

import Facebook from "../../assets/png/facebook-black.png";
import Instagram from "../../assets/png/instagram-black.png";
import Twitter from "../../assets/png/twitter-black.png";

import "./basiclayout.scss";

export default function basiclayout(props) {

    const {children} = props;

    return (
       <Container fluid className="basic-layout">
               <Row>
               <Col xs={12}>
                <Navbar></Navbar>
                </Col>
                </Row>
                <Row>
                   <Col xs={1}></Col>
                    <Col xs={10} className="container-middle">
                    {children}
                    </Col>
                   <Col xs={1}></Col>
                </Row>
                <Row>
                <Col xs={12} className="footer"> 
                <footer>
                <img src={Instagram} alt="instagram"/> 
                <h6>@luchomanph</h6>       
                <img src={Facebook} alt="facebook"/>  
                <h6>@luchomanph</h6>    
                <img src={Twitter} alt="twitter"/>     
                <h6>@luchomanph</h6>   
                </footer></Col>
                </Row>
        </Container>)
}
