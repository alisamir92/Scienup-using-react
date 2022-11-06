import { Col, Row , Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom"

function Header(){

    return(
        <div>
            <Row className="header">
                <Col className="site-logo" lg={6}>
                    <Link to="/">S</Link>
                </Col>
                <Col className="main-nav" lg={6}>
                <Navbar expand="lg">
                    <Container>
                       
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">HOME</Nav.Link>
                            <Nav.Link href="#link">MARKET PLACE</Nav.Link>
                            <Nav.Link href="#home">ABOUT US</Nav.Link>
                            <Nav.Link href="#home">SUPPORT</Nav.Link>
                            <Nav.Link href="#home">SIGN UP</Nav.Link>
                            <Nav.Link href="#home">LOGIN</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                </Col>

            </Row>
        </div>
    )

}

export default Header;