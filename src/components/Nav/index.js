import React from 'react';
import './index.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavigationBar() {
    return (
      <Navbar className='nav text-center' bg='light' expand='lg'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          {/* <Nav class='mr-auto' activeKey='about'> */}
            {/* <NavDropdown className='dropdown-title' title='Sort By' id='basic-nav-dropdown'> */}
              <NavDropdown.Item eventKey='about' href='#about-me'>About</NavDropdown.Item>
              <NavDropdown.Item eventKey='about' href='#work-stuff'>Projects</NavDropdown.Item>
              <NavDropdown.Item eventKey='about' href='#contact-info'>Contact Info</NavDropdown.Item>
              <NavDropdown.Item eventKey='about' href='#about-me'>Resume</NavDropdown.Item>
            {/* </NavDropdown> */}
          {/* </Nav> */}
        </Navbar.Collapse>
      </Navbar>
      //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //   <a className="navbar-brand" href="#">Navbar</a>
      //   <button
      //     className="navbar-toggler"
      //     type="button"
      //     data-toggle="collapse"
      //     data-target="#navbarNavAltMarkup"
      //     aria-controls="navbarNavAltMarkup"
      //     aria-expanded="false"
      //     aria-label="Toggle navigation"
      //   >
      //     <span className="navbar-toggler-icon"></span>
      //   </button>
      //   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      //     <div className="navbar-nav">
      //       <a className="dropdown-item" href="#about-me">About Me</a>
      //       <a className="dropdown-item" href="#work-stuff">Projects</a>
      //       <a className="col text-center" href="./Resume.pdf" target="_blank"
      //         >Resume</a
      //       >
      //       <a className="dropdown-item" href="#contact-info">Contact Info</a>
      //     </div>
      //   </div>
      // </nav>
    )
}

export default NavigationBar;