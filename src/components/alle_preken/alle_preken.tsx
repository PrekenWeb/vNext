import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Icon from '../../assets/icons/icon'
import Preken from '../preken/preken'
import Accordion from 'react-bootstrap/Accordion'
import './alle_preken.scss'

import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


class alle_preken extends Component {
    render() {
        return (
            <>
            <Container className='allepreken-wrapper' >
                <Row>
                    <Col xs={12} md={4} lg={4}>
                        <Row>
                            <div>
                                <button className='save-search'><Icon id="save" icon="save" size="12px"/>Zoekopdracht opslaan</button>
                            </div>
                            <div className="categories">
                                <h4>Categorieën</h4>
                                <form action=''>
                                    <div className="catergorie audiopreken">
                                        <Checkbox {...label} />
                                        <label><Icon id="music" icon="music" size="13px"/>Audiopreken (<span>132</span>)</label>
                                    </div>
                                    <div className="catergorie audioprekenvideo">
                                        <Checkbox {...label} />
                                        <label><Icon id="music" icon="music" size="13px"/>Audiopreken (<span>132</span>)</label>
                                    </div>
                                    <div className="catergorie leespreken">
                                        <Checkbox {...label} />
                                        <label><Icon id="music" icon="music" size="13px"/>Audiopreken (<span>132</span>)</label>
                                    </div>
                                    <div className="catergorie lezingen">
                                        <Checkbox {...label} />
                                        <label><Icon id="music" icon="music" size="13px"/>Audiopreken (<span>132</span>)</label>
                                    </div>
                                    <div className="catergorie meditatie">
                                        <Checkbox {...label} /> 
                                        <label><Icon id="music" icon="music" size="13px"/>Audiopreken (<span>132</span>)</label>
                                    </div>
                                    <div className="catergorie series">
                                        <Checkbox {...label} />
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
                            
                        </Row>
                    </Col>
                    <Col xs={12} md={8} lg={8}>
                        <Row>
                            <h1>Preken</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac dignissim metus, vitae ullamcorper neque. Praesent ornare, nulla a bibendum placerat, diam purus sodales augue.</p>
                        </Row>
                        <Row>
                            <div className="results-bar-wrapper">
                                <div className="results-bar">
                                    <div id="count-results"> <span>21</span></div>
                                    <h5>resultaten</h5>
                                </div>    
                                <div className="sort">
                                    <h6>Sortering</h6>
                                    <select name="pets" id="sortering">
                                        <option value="nieuw">Datum nieuw - oud</option>
                                        <option value="oud">Datum oud - nieuw</option>
                                    </select>
                                </div>
                            </div>
                        </Row>
                        <Row className='prekenRow'>
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