import React, { Component } from 'react';
import Preken from './preken'
import SnelNav from './snelNav'
import { Container, Row, Col } from "react-bootstrap";
import Icon from '../../assets/icons/icon'
import './recentePreken.scss'

class recentePreken extends Component {
    render() {
        return (
            <div className='recente-preken'>
            <Container>
                <Row>
                    <Col className='preken-top-col' xs={12} md={7} lg={7}>
                        <h2>Recente preken</h2>
                        <Preken />
                        <Preken />
                        <Preken />
                        <Preken />
                        <Preken />
                        <a href='#'>Alle preken <Icon id="arrowright" icon="arrow-right" size="13px"/></a>
                    </Col>
                    <Col></Col>
                    <Col xs={12} md={4} lg={4}>
                        <h2><Icon id="fast" icon="fast-to" size="20px"/> Snel naar</h2>
                        <SnelNav />
                        <SnelNav />
                        <SnelNav />
                        <SnelNav />
                        <SnelNav />
                        <SnelNav />
                        <SnelNav />
                        <SnelNav />
                        <SnelNav />
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default recentePreken;