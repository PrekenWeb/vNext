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
import Logo from '../../assets/images/logo.svg';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';


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
              <Col xs={12} lg={6}>
                <a href="sermonweb.org" target="_blank">sermonweb.org</a>
              </Col>
              <Col xs={12} lg={6}>
                <ul className={"top-menu"}>
                  <li><a href="#">Registreren</a></li>
                  <li><a href="#">Mijn PrekenWeb<span className="user-icon"></span></a></li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row>
            <Col xs={12}>
              <Toolbar disableGutters>
                <div className="logo">
                  <Link to="/">
                    <img src={Logo} alt="" />
                  </Link>
                </div>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: 'block', md: 'none' },
                    }}
                  >
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Link to="/allepreken" className={"menu-item"}>Alle preken</Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Link to="/contact" className={"menu-item"}>Hulp & contact</Link>
                    </MenuItem>
                  </Menu>
                </Box>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                >
                  LOGO
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  <Link to="/allepreken" className={"menu-item"}>Alle preken</Link>
                  <Link to="/contact" className={"menu-item"}>Hulp & contact</Link>
                </Box>
              </Toolbar>
            </Col>
          </Row>
        </Container>
      </AppBar>
    </>
  );
};
export default Header;
