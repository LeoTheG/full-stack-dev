import React from 'react';
import Auth from '../client/Auth';
import { Navbar, Nav, NavbarBrand, NavItem } from 'react-bootstrap';


const auth = new Auth();

export default class Menu extends React.Component {
    render() {
        if (auth.isAuthenticated())
            return (
                <Navbar fluid >
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Workplace</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>

                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">Account</NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={2} href="#">Log out</NavItem>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
            )
        else return null;
    }
}

/*

                    <Navbar>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="/">Home</a>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Navbar.Text >
                                Signed in as <Navbar.Link href="/account">User</Navbar.Link>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Navbar>
                    */

                /*
                  <Navbar inverse fluid >

    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Brand</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>

    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Hello</NavItem>
        <NavItem eventKey={2} href="#">World</NavItem>
      </Nav>
    </Navbar.Collapse>

  </Navbar>
  */