import React, { Component } from 'react';
import Preek from '../preek/preek';
import { Container, Row, Col } from "react-bootstrap";
import Icon from '../../assets/icons/icon';
import FastNav from '../fast-nav/fastNav';
import './recentPreek.scss'
import { Link } from "react-router-dom"
import PreekActive from '../preek/preekActive';

class recentPreek extends Component {
    render() {
        return (
            <div className='recente-preken'>
            <Container>
                <Row>
                    <Col className='preken-top-col' xs={12} md={7} lg={7}>
                        <h2>Recente preken</h2>
                        <Preek />
                        <PreekActive />
                        <Preek />
                        <Preek />
                        <Preek />
                        <Link to="/preken" className='allepreken'>Alle preken <Icon id="arrowright" icon="arrow-right" size="13px"/></Link>
                    </Col>
                    <Col></Col>
                    <Col className="preken-bot-col" xs={12} md={4} lg={4}>
                        <h2><Icon id="fast" icon="fast-to" size="20px"/> Snel naar</h2>
                        <FastNav />
                        <FastNav />
                        <FastNav />
                        <FastNav />
                        <FastNav />
                        <FastNav />
                        <FastNav />
                        <FastNav />
                        <FastNav />
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default recentPreek;