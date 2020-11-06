import React, { useState } from 'react';
import './App.css';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText
// } from 'reactstrap';

const MyNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"blue"}}>
  <a class="navbar-brand" href="#" style={{color:"white"}}>OLÓÒTỌ́</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#" style={{color:"white"}}>Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" style={{color:"white"}}>Service</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" style={{color:"white"}}>About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true" style={{color:"white"}}>Contact</a>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default MyNav;