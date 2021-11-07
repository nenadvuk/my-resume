import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";
import { Telegram, HomeRounded } from "@material-ui/icons";
import myData from "../../utilities/myData";
import CustomButton from "../Button/CustomButton";

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
            className={pathName === "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>
          {/* Skills link */}
          <Nav.Link
            as={NavLink}
            to="/skills"
            className={
              pathName === "/skills" ? "header_link_active" : "header_link"
            }
          >
            Skills
          </Nav.Link>
          {/* projects link */}
          <Nav.Link
            as={NavLink}
            to="/projects"
            className={
              pathName === "/projects" ? "header_link_active" : "header_link"
            }
          >
            Projects
          </Nav.Link>
          {/* Hobbies */}
          <Nav.Link
            as={NavLink}
            to="/hobbies"
            className={
              pathName === "/hobbies" ? "header_link_active" : "header_link"
            }
          >
            Hobbies
          </Nav.Link>
        </Nav>
        <div className="header_right">
          {Object.keys(myData.socials).map((item) => (
            <a
              href={myData.socials[item].link}
              target="_blank"
              rel="noreferrer"
              key={item}
              title={myData.socials[item].title}
            >
              {myData.socials[item].icon}
            </a>
          ))}
        </div>
        <CustomButton text={"E-mail"} icon={<Telegram />} /* onClick={window.open(`mailto:${myData.email}?subject=Subject&body=Body%20goes%20here`)} */ /> {/* myData.email */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
