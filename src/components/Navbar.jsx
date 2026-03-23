import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaPhoneAlt, FaShoppingBasket, FaPlus } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Navmain() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary justify-space-between" style={{ backgroundColor: "#FEFEFE" , position:"fixed" ,width:"100%" , zIndex:1}}>
                <Container fluid>
                    <Navbar.Brand as={Link} to="/" className='ps-5'>
                        <img src="src/assets/Images/gymat_dark-1.svg" alt="logo" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/About">About</Nav.Link>

                            <NavDropdown title="Pages" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/pages">Trainer</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/pages">Pricing Page</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/pages">Gallery Page</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/pages">Error Page</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/pages">Typography Page</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Class" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/class">Class Layout 01</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/class">Class Layout 02</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/class">Class Layout 03</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/class">Class Layout 04</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/class">Class Details Page</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/class">Upcoming Class 01</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/class">Upcoming Class 02</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/class">Today’s Class</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/class">Next 2 Day’s Class</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Schedule" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/Schedule">Routine Layout 01</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Schedule">Routine Layout 02</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Schedule">Routine Navigation Layout</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Schedule">Schedule by Day</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Schedule">Schedule by Class</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Blog" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/Blog">Blog Layout 01</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Blog">Blog Layout 02</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Blog">Blog Details</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Shop" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/Shop">Shop</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Shop">Cart</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Shop">Checkout</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Shop">My account</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Shop">Wishlist</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Shop">Shop Details</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <div className='pe-5 d-flex align-items-center gap-4'>
                        <div className='d-flex align-items-center gap-3 px-3'>
                            <Link to="#"><FaPhoneAlt /></Link>
                            <div>
                                <Link to="#">
                                    <p className='mb-0' style={{ color: "#aaa9a9", fontSize: "13px" }}>Let's Phone:</p>
                                </Link>
                                <Link to="#">
                                    <p className='mb-0' style={{ fontSize: "18px" }}>+123-(233)-375</p>
                                </Link>
                            </div>
                        </div>

                        <div>
                            <Navbar.Brand className='m-0' as={Link} to="/Shop">
                                <FaShoppingBasket style={{ color: "#4d4d4d", fontSize: "27px" }} />
                            </Navbar.Brand>
                        </div>

                        <div>
                            <Navbar.Brand className="me-0" as={Link} to="/">
                                <Button className="d-flex align-items-center rounded-1 pe-4" style={{ backgroundColor: "white", color: "black" }} variant="danger">
                                    <FaPlus className="me-3" style={{ backgroundColor: "red", padding: "5px", fontSize: "25px", borderRadius: "3px", color: "white" }} />
                                    Join Class Now
                                </Button>
                            </Navbar.Brand>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}

export default Navmain;