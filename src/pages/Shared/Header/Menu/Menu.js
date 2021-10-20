import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Menu = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">GYM ZONE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/packages">Packages</Nav.Link>
            <Nav.Link as={Link} to="/feedback">Feedback</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            {user.email ?
              <button className="btn btn-link" onClick={logOut}>Log Out</button>
              :
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            }
            {user.email ? ''
              :
              <Nav.Link as={Link} to="/register">Register</Nav.Link>}
          </Nav>

          {user.email ?
            <Navbar.Text className="ms-md-5">
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
            :
            ''
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;