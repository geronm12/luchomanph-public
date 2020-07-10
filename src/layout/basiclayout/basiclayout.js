import React from 'react';

import {Row, Col, Container} from 'react-bootstrap';

import Navbar from '../../components/navbar';

import "./basiclayout.scss";

export default function basiclayout(props) {

    const {children} = props;

    return (
       <Container fluid className="basic-layout">
           <Col xs={12}>
           <Row>
               <Navbar></Navbar>
           </Row>
           <Row>
               <Col xs ={2}>
               </Col>
               <Col xs={9}>
               {children}
               </Col>
           </Row>
           </Col>
       </Container>
    )
}
