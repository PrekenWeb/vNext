import React from "react";
import Header from "../components/header/header";
import Recent from '../components/article-recent/recent';
import RecentTest from '../components/article-recent/recentTest';
import Uitgelicht from '../components/article-uitgelicht/uitgelicht';
import RecentPreek from "../components/recent/recentPreek";
import Footer from "../components/footer/footer";
import Icon from '../assets/icons/icon'
import { Container, Row, Col } from "react-bootstrap";
import './home.scss'
import BackgroundMain from '../assets/images/background-header.png'
import ImageMain from '../assets/images/illustratie.svg'
import { Link } from 'react-router-dom'

function Home() {
    return (
      <>
      <Header />
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
      <RecentPreek />
      <Footer />
      </>
    );
  }

  export default Home