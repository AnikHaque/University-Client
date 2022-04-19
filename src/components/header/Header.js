import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user,logout,admin} = useAuth();
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="" variant="" className='header'>
  <Container>
  <Navbar.Brand href="#home"><img src="https://university.cactusthemes.com/wp-content/uploads/2014/10/logo-univeristy-1x.png" className='img-fluid w-75'></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto navigation-menu">
      <Nav.Link as={Link} to="/home" className='mx-2 fw-bold text-light'>Home</Nav.Link>
      <Nav.Link as={Link} to="/about" className='mx-2 fw-bold text-light'>About</Nav.Link>
      <Nav.Link as={Link} to="/products" className='mx-2 fw-bold text-light'>Events</Nav.Link>
      <Nav.Link as={Link} to="/blogs" className='mx-2 fw-bold text-light'>Courses</Nav.Link>
      <Nav.Link as={Link} to="/blogs" className='mx-2 fw-bold text-light'>Blogs</Nav.Link>
      <Nav.Link as={Link} to="/faq" className='mx-2 fw-bold text-light'>Faq</Nav.Link>
      <Nav.Link as={Link} to="/contact" className='fw-bold text-light'>Contact</Nav.Link>
      
      
    </Nav>
    <Nav>
    
    {
      admin &&  <Nav.Link as={Link} to="/dashboard" className='fw-bold pt-3 text-white'>Admin Dashboard</Nav.Link>
    }
       
        

     {
      !admin && user.email &&
      <Nav.Link as={Link} to="/dashboard" className='fw-bold pt-3 text-white'>User Dashboard</Nav.Link>
        } 
    
      { 
!user.email ?
     <Nav.Link as={Link} to="/login">
          <Button className='btn btn-light text-dark fw-bold px-4 pe-4'><i class="fa-solid fa-user pe-2"></i>Login</Button>
          </Nav.Link>
          :
          <Nav.Link as={Link} to="/login">
          <Button onClick={logout} className='btn btn-light text-dark fw-bold px-4 pe-4'><i class="fa-solid fa-user pe-2"></i>LogOut</Button>
          </Nav.Link>

          } 
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
           
        </div>
    );
};

export default Header;