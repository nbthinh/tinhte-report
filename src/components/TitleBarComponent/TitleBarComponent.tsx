import { Link } from "react-router-dom"
import "./TitleBarComponent.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container, NavDropdown, NavItem } from "react-bootstrap";




function TitleBarComponent() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbar-minwidth">
                <Container>
                    <Navbar.Brand as={Link} to="/demo/">
                        Report Page
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>

                            <Nav.Link as={Link} to="/demo/">
                                Demo (Đang dev)
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* <div className="container">
                <div className="row">
                    <div className="col-12">

                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Link to="">Home</Link>
                        <br />
                        <Link to="demo">Dashboard</Link>

                    </div>
                </div>
            </div> */}
        </>
    )
}

export default TitleBarComponent
