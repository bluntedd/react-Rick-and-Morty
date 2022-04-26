import React from 'react'
import { Card, Container, Nav, Navbar, Row, link, NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>

        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/objeto">Navbar</Navbar.Brand>
          <Nav className="me-auto">

            <Link className="nav-link" to="/Personagem">Personagens</Link>
            
            
            
          
          
          </Nav>
          </Container>
        </Navbar>

        <br />


    </div>
  )
}

export default Menu