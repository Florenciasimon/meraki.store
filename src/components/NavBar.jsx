import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
    <Navbar  data-bs-theme="dark">
        <Container>
            <Navbar.Brand to="/" as={NavLink}>Meraki Store</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link to="/category/living" as={NavLink}>Living</Nav.Link>
                <Nav.Link to="/category/cocina" as={NavLink}>Cocina</Nav.Link>
                <Nav.Link to="/category/dormitorio" as={NavLink}>Dormitorio</Nav.Link>
            </Nav>
            <CartWidget />
        </Container>
    </Navbar>
    );
};