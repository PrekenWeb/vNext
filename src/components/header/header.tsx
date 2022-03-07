import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import './header.scss';
import England from '../../assets/images/england.svg'
import Logo from '../../assets/images/logo.svg';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Icon from '../../assets/icons/icon'


const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
                  <li><a href="#">Registreren</a></li>
                  <li><a href="#">Mijn PrekenWeb<Icon id="user" icon="user" size="30px"/></a></li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="top-bar-2">
        <Container>
          <Row>
            <Col className="header-container" xs={12} md={12} lg={12}  xl={6}> 
              <div className="logo">
                <Link to="/">
                  <img src={Logo} alt="" />
                </Link>
              </div>
              <div className="menu-item-container">
                <Link to="/allepreken" className={"menu-item lg"}><Icon className='list-icon' icon="list" size="15px"/>Alle preken</Link>
                <Link to="#" className={"menu-item lg"}><Icon className='info-icon' icon="info" size="15px"/>Hulp & contact</Link>
                <button className="menu menu-item"><Icon className='menu-icon' icon="menu" size="18px"/>Menu</button>
              </div>
            </Col>
            <Col className="search-container" xs={12} md={12} lg={12} xl={6}>
              <div className="search">
                <form className="nav-search" action="/">
                  <input type="text" placeholder="Zoek een preek..." name="search"></input>
                  <button type="submit"><Icon id='search' icon="search" size="14px"/></button>
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
