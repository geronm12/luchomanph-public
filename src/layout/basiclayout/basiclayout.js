import React from 'react';

import {Row, Col, Container} from 'react-bootstrap';

import Navbar from '../../components/navbar';
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
                   <Col xs={2}></Col>
                    <Col xs={10} className="container-middle">
                    {children}
                    </Col>
                   
                </Row>
        </Container>)
}
