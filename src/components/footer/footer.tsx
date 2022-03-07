import React, { Component } from 'react';
import './footer.scss'
import './footer-responsive.scss'
import { Container, Row, Col } from "react-bootstrap";
import Nieuwsbrief from '../../assets/images/nieuwsbrief.png'
import BackgroundFooter from '../../assets/images/background-footer.png'
import Icon from '../../assets/icons/icon'


class footer extends Component {
    render() {
        return (
            <div>
                <div id="background-light" style={{backgroundImage: `url(${BackgroundFooter})`}}>
                <Container className='footer-1'>
                        <Row>
                            <Col className='col-wrapper' xs={12} md={5} lg={5}>
                                <img src={Nieuwsbrief} alt="inschrijven" id="nieuwsbrief"></img>
                            </Col>
                            <Col xs={12} md={5} lg={5}>
                                <h2>Inschrijven nieuwsbrief</h2>
                                <p>Ontvang de laatste preken en series direct in uw mail.</p>
                                <form>
                                    <div className='input-wrapper'>
                                    <span >Naam</span>
                                    <input type="name" id="name" required></input>
                                    </div>
                                    <div className='input-wrapper'>
                                    <span >E-mail</span>
                                    <input type="email" id="email" required></input>
                                    </div>
                                    <button id="submit-btn" type="submit">Inschrijven <Icon id="arrowright" icon="arrow-right" size="13px"/></button>
                                </form>
                            </Col>
                        </Row>   
                </Container>
                </div>
                <div className='background-dark'>
                <Container className="footer-2">
                        <Row>
                            <Col xs={12} lg={9} className="footer-nav">
                            <h3>Meer PrekenWeb</h3>
                                <div className="nav-links">
                                <ul>
                                    <li><a href="#top">Preken</a></li>
                                    <li><a href="#top">Preek toevoegen</a></li>
                                    <li><a href="#top">Financieel bijdragen</a></li>
                                </ul>
                                <ul className='bottom-nav-col'>
                                    <li><a href="#top">Kerken en overige links</a></li>
                                    <li><a href="#top">Hulp nodig?</a></li>
                                    <li><a href="#top">Contact</a></li>
                                </ul>
                                </div>
                                
                            </Col>
                            <Col xs={12} lg={3} className="social-wrapper">
                                <h3>PrekenWeb op Social</h3>
                                <a href="#top" className='social-links'><Icon icon="facebook" size="20px" /></a>
                                <a href="#top" className='social-links'><Icon icon="twitter" size="20px" /></a>
                            </Col>
                            <span id='copyright'>© Copyright 2022 PrekenWeb</span>
                        </Row>
                </Container>
                </div>
            </div>
        );
    }
}

export default footer;