import React, { Component } from 'react';
import Icon from '../../../assets/icons/icon'
import { Container, Row, Col } from "react-bootstrap";
import './mainSection.scss'
import BackgroundMain from '../../../assets/images/background-header.png'
import ImageMain from '../../../assets/images/illustratie.svg'
import { Link } from 'react-router-dom'

class mainSection extends Component {
    render() {
        return (
            <>
            <div id="backgroundmain" style={{backgroundImage: `url(${BackgroundMain})`}}>
                <Container>
                     <Row>
                         <Col className='image-wrapper' xs={12} md={4} lg={5}>
                         <img src={ImageMain} alt="main" id="mainimage"></img>
                         </Col>
                         <Col className='text-wrapper' xs={12} md={8} lg={5}>
                            <h1>Preken luisteren, lezen of downloaden</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac dignissim metus, vitae ullamcorper neque. Praesent ornare, nulla bibendum placerat, diam purus sodales augue.</p>
                            <button className='button'><Link to="/preken">Bekijk alle preken <Icon id="arrowright" icon="arrow-right" size="13px"/></Link></button>
                         </Col>
                        </Row>
                </Container>
            </div>
            </>
        );
    }
}

export default mainSection;