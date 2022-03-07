import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Icon from '../../assets/icons/icon'
import './preekdetail.scss'
import { Link } from "react-router-dom"
import MusicPlayer from "./musicplayer"

class preekdetail extends Component {
    render() {
        return (
            <>
            <Container className='prekendetail-container'>
                <Row>
                    <Col xs={12} md={9} lg={9}>
                        <Link to="/allepreken"><Icon id="arrow-left" icon="arrow-left" size="13px"/>Alle preken</Link>
                        <div className="info_preek detail">
                            <div className="labels_preek">
                                <label><a href='#top'><Icon id="music" icon="music" size="13px"/>Preek</a></label>
                                <label><a href='#top'><Icon id="info" icon="info" size="13px"/>Advent</a></label>
                                <label><a href='#top'><Icon id="user" icon="user" size="13px"/>Ds. J Driessen</a></label>
                                <label className='serie'><a href='#top'><Icon id="stack" icon="document-stack" size="13px"/>Advent serie (4)</a></label>
                                <span className='date_preek'><Icon id="calendar_date" icon="calendar" size="11px"/>15-12-2021</span>
                            </div>
                        </div>
                        <h1>Lorem ipsum dolor sit amet dolor sit amet elit labore diam</h1>
                        <span className='subtitle-preek'>Genesis 11:27 en 31 - 12:4 en 5</span>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={9} lg={9}>
                    <MusicPlayer />
                        <div className="content">
                            <h4>
                                Teksten
                            </h4>
                            <span className='versnaam'>Jesaja 60:8 - 12</span>
                            <div className="vers">
                                <p>8.   Wie zijn deze, die daar komen gevlogen als een wolk, en als duiven tot haar vensters?</p>
                                <p>9.   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus urna est, scelerisque vitae 
                                        turpis sed, tincidunt sodales magna. Quisque pretium neque nec tortor finibus hendrerit. In placerat 
                                        lectus arcu.</p>
                                <p>10.  Lorem ipsum. Suspendisse potenti. Vestibulum mi nisl, maximus non vehicula quis, 
                                        lacinia et nulla. Quisque vel fermentum lectus.</p>
                                <p>11.  Nullam in lobortis elit. Suspendisse potenti. Vestibulum mi nisl, maximus non vehicula quis, lacinia et nulla. Quisque vel fermentum lectus.</p>
                                <p>12.  Amet in lobortis elit. Suspendisse potenti. Vestibulum mi nisl, maximus non elit quis, lacinia et nulla. Quisque vel fermentum.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={3} lg={3}>
                        <div className="informatie-col">
                        <h4>Informatie</h4>
                            <div className="subtitle-wrapper">
                                <span className='subtitle'>Predikant / spreker</span>
                                <p className='subtitle-info'>Ds. W.A. Zondag</p>
                            </div>
                            <div className="subtitle-wrapper">
                                <span className='subtitle'>Bijbelboek</span>
                                <p className='subtitle-info'>Jesaja 60</p>
                            </div>
                            <div className="subtitle-wrapper">
                                <span className='subtitle'>Gemeente</span>
                                <p className='subtitle-info'>Tricht Geldermalsen</p>
                            </div>
                            <div className="subtitle-wrapper">
                                <span className='subtitle'>Gelegenheid</span>
                                <p className='subtitle-info'>Advent</p>
                            </div>
                            <div className="subtitle-wrapper">
                                <span className='subtitle'>Gepubliceerd op</span>
                                <p className='subtitle-info'>20-12-2021</p>
                            </div>
                            <div className="subtitle-wrapper">
                                <span className='subtitle'>Gepreekt op</span>
                                <p className='subtitle-info'>19-12-2021</p>
                            </div>
                            <div className="subtitle-wrapper">
                                <span className='subtitle'>Punt 1</span>
                                <p className='subtitle-info'>De schoonheid</p>
                            </div>
                            <div className="subtitle-wrapper">
                                <span className='subtitle'>Punt 2</span>
                                <p className='subtitle-info'>Hun vlucht</p>
                            </div>
                            <div className="subtitle-wrapper">
                                <span className='subtitle'>Punt 3</span>
                                <p className='subtitle-info'>De formatie</p>
                            </div>
                            <div className="subtitle-wrapper">
                                <span className='subtitle'>Punt 4</span>
                                <p className='subtitle-info'>De thuiskomst</p>
                            </div>
                            <div className="subtitle-wrapper">
                                <span className='subtitle'>Punt 5</span>
                                <p className='subtitle-info'>De verwondering</p>
                            </div>
                            </div>
                    </Col>
                </Row>
            </Container>
            </>
        );
    }
}

export default preekdetail;