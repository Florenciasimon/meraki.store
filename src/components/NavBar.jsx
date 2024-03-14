import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
    <Navbar  data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#home">Meraki Store</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Bazar</Nav.Link>
                <Nav.Link href="#features">Deco</Nav.Link>
                <Nav.Link href="#pricing">Muebles</Nav.Link>
            </Nav>
            <CartWidget />
        </Container>
    </Navbar>
    );
};