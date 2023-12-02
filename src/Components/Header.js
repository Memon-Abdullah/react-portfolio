import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
  

export const Header = ()=>{
    return(
        <div className="header">
            <Navbar id="navbar" expand="lg" className="navbar" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand href="#" className="brand py-1">CodeByAbdullah</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto me-auto my-2 my-lg-0 d-flex justify-content-center" style={{ maxHeight: '300px' }} navbarScroll >

                        <Link className="Navbar-link  d-flex justify-content-center mb-3"  to={"/"}> Home</Link>
                        <Link className="Navbar-link  d-flex justify-content-center mb-3"  to={"/About"}>About </Link>
                        <Link className="Navbar-link  d-flex justify-content-center mb-3"  to={"/Projects"}>Projects</Link> 
                        <Link className="Navbar-link  d-flex justify-content-center mb-3"  to={"/Contact"}>Contact </Link> 
                
                    </Nav>
                    
                    <div className=" d-flex justify-content-center">
                        <Link to={'Contact'}>
                            <Button  className="hire-me ">Hire me</Button>
                        </Link>
                        
                    </div>
                             
                    </Navbar.Collapse>
                </Container>
            </Navbar>   
        </div>
    )
}