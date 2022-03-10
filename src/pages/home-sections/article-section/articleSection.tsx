import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Icon from '../../../assets/icons/icon';
import './articleSection.scss'
import Uitgelicht from '../../../components/article-uitgelicht/uitgelicht';
import Recent from '../../../components/article-recent/recent';
import RecentTest from '../../../components/article-recent/recentTest';


class articleSection extends Component {
    render() {
        return (
            <div className='artikelen-wrapper'>
                <Container>
                    <Row className='title-row'>
                        <Col className="uitgelicht" xs={12} md={5} lg={6}>
                            <h2>Uitgelicht</h2>
                            <Uitgelicht />
                        </Col>
                        <Col xs={12} md={7} lg={6}>
                            <Row>
                                <div className="recent">
                                    <h2>Recente berichten</h2>
                                    <a href="#top">Alle berichten <Icon id="arrowright" icon="arrow-right" size="13px"/></a>
                                </div>
                            </Row>
                            <Row className='top-row'>
                                <Col className="top-col" xs={12} md={6} lg={6}>
                                    <Recent />
                                </Col>
                                <Col xs={12} md={6} lg={6}>
                                    <RecentTest />
                                </Col>
                            </Row>
                            <Row className='bottom-row'>
                                <Col className="top-col" xs={12} md={6} lg={6}>
                                    <Recent />
                                </Col>
                                <Col xs={12} md={6} lg={6}>
                                    <Recent />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                </div>
        );
    }
}

export default articleSection;