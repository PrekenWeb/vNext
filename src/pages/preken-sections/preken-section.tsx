import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Icon from '../../assets/icons/icon'
import Preek from '../../components/preek/preek';
import PreekActive from '../../components/preek/preekActive';
import "./preken-section.scss"
import Dropdown from '../../components/accordion/dropdown';

import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


class prekenSection extends Component {
    render() {
        return (
            <>
            <Container className='allepreken-wrapper' >
                <Row>
                    <Col xs={12} md={4} lg={4}>
                        <Row>
                            <div className='save-container'>
                                <button className='save-search'><Icon id="save" icon="save" size="12px"/>Zoekopdracht opslaan</button>
                            </div>
                            <div className="categories">
                                <h4>Categorieën</h4>
                                <form action=''>
                                    <div className="categorie audiopreken">
                                        <label className='checked'> <Checkbox {...label} defaultChecked /><Icon id="music" icon="music" size="13px"/>Audiopreken (<span>132</span>)</label>
                                    </div>
                                    <div className="categorie audioprekenvideo">
                                        <label> <Checkbox {...label} /><Icon id="video" icon="video" size="13px"/>Audiopreken met video (<span>34</span>)</label>
                                    </div>
                                    <div className="categorie leespreken">
                                        <label><Checkbox {...label} /><Icon id="document" icon="document" size="13px"/>Leespreken (<span>12</span>)</label>
                                    </div>
                                    <div className="categorie lezingen">
                                        <label><Checkbox {...label} /><Icon id="book" icon="book" size="13px"/>Lezingen(<span>24</span>)</label>
                                    </div>
                                    <div className="categorie meditatie">
                                        <label><Checkbox {...label} /><Icon id="hearing" icon="hearing" size="13px"/>Meditaties (<span>7</span>)</label>
                                    </div>
                                    <div className="categorie series">
                                        <label><Checkbox {...label} /><Icon id="document-stack" icon="document-stack" size="13px"/>Series (<span>12</span>)</label>
                                    </div>
                                </form>
                                <button className='filter-button'><Icon id="filtering" icon="filtering" size="22px"/>Filters</button>
                            </div>
                            <div className="filters">
                                <h4>Filters</h4>
                                <div className="labels">
                                    <label>Genesis,Exodus, Psalmen<button><Icon className="close" icon="Close" size="11px"/></button></label>
                                    <label>Kerst<button><Icon className="close" icon="Close" size="11px"/></button></label>
                                </div>
                                <div className="remove-filter">
                                    <button id='filter-remove'><Icon id='undo' icon="undo" size="14px"/>Filter wissen</button>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <div className="dropdown-container">
                                <Dropdown></Dropdown></div>
                        </Row>
                    </Col>
                    <Col xs={12} md={8} lg={8}>
                        <Row>
                            <h1>Preken</h1>
                            <p className='preken-tekst'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac dignissim metus, vitae ullamcorper neque. Praesent ornare, nulla a bibendum placerat, diam purus sodales augue.</p>
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
                            <div>
                                <Preek />
                                <PreekActive />
                                <Preek />
                                <Preek />
                                <Preek />
                                <Preek />
                                <Preek />
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>

            </>
        );
    }
}

export default prekenSection;