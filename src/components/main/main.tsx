import React, { Component } from 'react';
import Icon from '../../assets/icons/icon'
import { Container, Row, Col } from "react-bootstrap";
import './main.scss'
import './main-responsive.scss'
import BackgroundMain from '../../assets/images/background-header.png'
import ImageMain from '../../assets/images/illustratie.png'
import { Link } from 'react-router-dom'



class main extends Component {
    render() {
        return (
            <>
            <div id="backgroundmain" style={{backgroundImage: `url(${BackgroundMain})`}}>
                <Container>
                     <Row>
                         <Col className='image-wrapper' xs={12} md={5} lg={5}>
                         <img src={ImageMain} alt="main" id="mainimage"></img>
                         </Col>
                         <Col className='text-wrapper' xs={12} md={5} lg={5}>
                            <h1>Preken luisteren, lezen of downloaden</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac dignissim metus, vitae ullamcorper neque. Praesent ornare, nulla bibendum placerat, diam purus sodales augue.</p>
                            <button className='button'><Link to="/allepreken"><a href='#'>Bekijk alle preken <Icon id="arrowright" icon="arrow-right" size="13px"/></a></Link></button>
                         </Col>
                        </Row>
                </Container>
            </div>
            </>
        );
    }
}

export default main;