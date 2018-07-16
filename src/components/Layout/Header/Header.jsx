import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./Header.css";

class Header extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>Dharma Relayer</Navbar.Brand>
                </Navbar.Header>

                <Nav>
                    <LinkContainer to="/" exact={true}>
                        <NavItem>Browse</NavItem>
                    </LinkContainer>

                    <LinkContainer to="/create">
                        <NavItem>Create</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;