import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import './header.scss';
import England from '../../assets/images/england.svg'
import Logo from '../../assets/images/prekenweb.svg'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Icon from '../../assets/icons/icon'
import MenuButton from '../menuButton/menuButton'

const Header = () => {

  return (
    <>
      <AppBar position="static">
        <div className={"top-bar"}>
          <Container>
            <Row>
              <Col xs={5} lg={6}>
                <a href="sermonweb.org" target="_blank"> <img id="language" src={England} alt=""/>sermonweb.org<Icon id="external-link" icon="external-link" size="11px"/></a>
              </Col>
              <Col xs={7} lg={6}>
                <ul className={"top-menu"}>
                  <li><a href="#top">Registreren</a></li>
                  <li><a href="#top">Mijn PrekenWeb<Icon id="user" icon="user" size="30px"/></a></li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="top-bar-2">
        <Container>
          <Row>
            <Col className="header-container" xs={12} lg={7}> 
              <div className="logo">
                <Link to="/">
                  <img src={Logo} alt="" />
                </Link>
              </div>
              <div className="menu-item-container">
                <Link to="/preken" className={"menu-item lg"}><Icon className='list-icon' icon="list" size="15px"/>Alle preken</Link>
                <Link to="#top" className={"menu-item lg"}><Icon className='info-icon' icon="info" size="15px"/>Hulp & contact</Link>
                <MenuButton></MenuButton>
              </div>
            </Col>
            <Col className="search-container" xs={12} lg={5}>
              <div className="search">
                <form className="nav-search" action="/">
                  <input type="text" placeholder="Zoek een preek..." name="search"></input>
                  <button type="submit"><Icon id='search' icon="search" size="20px"/></button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
        </div>
      </AppBar>
    </>
  );
};
export default Header;
