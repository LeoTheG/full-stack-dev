import React from 'react';
import Auth from '../client/Auth';
import { Navbar, Nav, NavbarBrand, NavItem } from 'react-bootstrap';


const auth = new Auth();

/*
    Navigation menu displayed on top of every page
*/
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
                            <NavItem eventKey={2} onClick={() => auth.logout()}>Log out</NavItem>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
            )
        else return null;
    }
}