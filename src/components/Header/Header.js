import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import { Link, NavLink, withRouter } from 'react-router-dom';
import {
  HomeRounder,
  SchoolRounded,
  WorkRounder,
  Facebook,
  LinkedIn,
  GitHub,
  Telegram,
  HomeRounded,
} from '@material-ui/icons';
import myData from '../../utilities/myData';
import CustomButton from '../Button/CustomButton';

const Header = (props) => {
  const pathName = props.location && props.location.pathname;

  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Nav.Link as={NavLink} to="/">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">
          {/* Resume link */}
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName === '/' ? 'header_link_active' : 'header_link'}
          >
            Resume
          </Nav.Link>
          {/* projects link */}
          <Nav.Link
            as={NavLink}
            to="/projects"
            className={
              pathName === '/projects' ? 'header_link_active' : 'header_link'
            }
          >
            Projects
          </Nav.Link>
        </Nav>
        <div className="header_right">
          {Object.keys(myData.socials).map((item) => (
            <a href={myData.socials[item].link} target="_blank" key={item}>
              {myData.socials[item].icon}
            </a>
          ))}
        </div>
        <CustomButton text={'Contact me'} icon={<Telegram />} />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
