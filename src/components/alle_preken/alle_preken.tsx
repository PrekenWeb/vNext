import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Icon from '../../assets/icons/icon'
import Preken from '../preken/preken'
import Accordion from 'react-bootstrap/Accordion'
import './alle_preken.scss'


class alle_preken extends Component {
    render() {
        return (
            <>
            <Container>
                <Row>
                    <Col xs={12} md={4} lg={4}>
                        <Row>
                            <div>
                                <button><Icon id="save" icon="save" size="13px"/>Zoekopdracht opslaan</button>
                            </div>
                            <div className="categories">
                                <h4>Categorieën</h4>
                                <form action=''>
                                    <div className="catergorie audiopreken">
                                        <input type="checkbox" name="audiopreken"></input>
                                        <label><Icon id="music" icon="music" size="13px"/>Audiopreken (<span>132</span>)</label>
                                    </div>
                                    <div className="catergorie audioprekenvideo">
                                        <input type="checkbox" name="audiopreken"></input>
                                        <label><Icon id="music" icon="music" size="13px"/>Audiopreken (<span>132</span>)</label>
                                    </div>
                                    <div className="catergorie leespreken">
                                        <input type="checkbox" name="audiopreken"></input>
                                        <label><Icon id="music" icon="music" size="13px"/>Audiopreken (<span>132</span>)</label>
                                    </div>
                                    <div className="catergorie lezingen">
                                        <input type="checkbox" name="audiopreken"></input>
                                        <label><Icon id="music" icon="music" size="13px"/>Audiopreken (<span>132</span>)</label>
                                    </div>
                                    <div className="catergorie meditatie">
                                        <input type="checkbox" name="audiopreken"></input>
                                        <label><Icon id="music" icon="music" size="13px"/>Audiopreken (<span>132</span>)</label>
                                    </div>
                                    <div className="catergorie series">
                                        <input type="checkbox" name="audiopreken"></input>
                                        <label><Icon id="music" icon="music" size="13px"/>Audiopreken (<span>132</span>)</label>
                                    </div>
                                </form>
                            </div>
                            <div className="filters">
                                <h4>Filters</h4>
                                <div className="labels">
                                    <label>Genesis,Exodus, Psalmen <button><Icon id="close" icon="Close" size="12px"/></button></label>
                                    <label>Kerst<button><Icon id="close" icon="Close" size="12px"/></button></label>
                                </div>
                                <button id='filter-remove'><Icon id="close" icon="undo" size="12px"/>Filter wissen</button>
                            </div>
                        </Row>
                        <Row>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className='header'>Accordion Item #1</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                    </Accordion.Item>
                            </Accordion>
                        </Row>
                    </Col>
                    <Col xs={12} md={8} lg={8}>
                        <Row>
                            <h1>Preken</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac dignissim metus, vitae ullamcorper neque. Praesent ornare, nulla a bibendum placerat, diam purus sodales augue.</p>
                        </Row>
                        <Row>
                            <div className="results-bar">
                                <span id="count-results">21</span><p>resultaten</p> 
                            </div>
                        </Row>
                        <Row>
                            <Preken />
                            <Preken />
                            <Preken />
                            <Preken />
                            <Preken />
                        </Row>
                    </Col>
                </Row>
            </Container>

            </>
        );
    }
}

export default alle_preken;