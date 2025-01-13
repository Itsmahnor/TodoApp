import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { authAction } from '../Store';

export const Top = () => {
  const dispatch = useDispatch();
  const isLoggedIn=useSelector((state)=> state.isLoggedIn);
const LogOut = ()=>{
  sessionStorage.clear("id")
  dispatch(authAction.logOut())
}
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-gradient-to-r from-[#C30E59] to-[#FF7582] shadow-md py-4">
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand href="/" className="font-bold text-[2.5rem] text-white hover:scale-105 transition-transform">
          TODO APP
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Left Nav Links */}
          <Nav className="me-auto space-x-4">
            <Nav.Link href="/" className="text-white text-lg hover:text-[#FFD1DC] transition-colors">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="text-white text-lg hover:text-[#FFD1DC] transition-colors">
              About Us
            </Nav.Link>
            <Nav.Link href="/tasks" className="text-white text-lg hover:text-[#FFD1DC] transition-colors">
              Add Task
            </Nav.Link>
          </Nav>

          {/* Right Nav Links */}
          <Nav className="space-x-4">
            <Nav.Link href="/signup" className="text-white text-lg hover:text-[#FFD1DC] transition-colors">
              SignUp
            </Nav.Link>
            <Nav.Link href="/signin" className="text-white text-lg hover:text-[#FFD1DC] transition-colors">
              SignIn
            </Nav.Link>
            {isLoggedIn &&   <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-[#C30E59] to-[#a30e50] text-white font-bold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition"
            onClick={LogOut}
          >
            LogOut
          </button>}
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
