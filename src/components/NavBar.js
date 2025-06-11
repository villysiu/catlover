import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useState} from 'react';
const NavBar = ({setChoice}) => {

  const [show, setShow] = useState(false);

  const handleClick = (choice) => {
    choice===1 ? setChoice(1) : setChoice(0);
    setShow(false);
  } 

  return (
    <Navbar expand="sm" className="bg-body-tertiary" fixed="top" onMouseLeave={()=>setShow(false)}>
      <Container fluid>
        <Navbar.Brand href="#">Cat Lovers</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" onClick={()=>setShow(!show)}/>
        <Navbar.Collapse id="navbarScroll" in={show}>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={()=>handleClick(0)}>Home</Nav.Link>
            <Nav.Link onClick={()=>handleClick(1)}>Favorites</Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;