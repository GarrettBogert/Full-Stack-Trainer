import React, { useState, useEffect } from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import FlashCardApp from './mini-apps/FlashCardApp.js'

const PAGES = ['Home', 'Flash cards', 'Multiple choice', 'Recruiter tracking'];

function App() {
  const [currentPage, setCurrentPage] = useState(PAGES[0])
  return (
    <div className="App">
      {renderNavBar(setCurrentPage)}
      <div className="column left"></div>
      <div className="column center">
        {renderCurrentPage(currentPage)}
      </div>
      <div className="column right"></div>
    </div>
  )
}

const renderNavBar = (setCurrentPage) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand onClick={() => setCurrentPage(PAGES[0])}>Full Stack Trainer</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => setCurrentPage(PAGES[0])}>Home</Nav.Link>
          <NavDropdown title="Mini-apps" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => setCurrentPage(PAGES[1])}>Flash cards</NavDropdown.Item>
            <NavDropdown.Item onClick={() => setCurrentPage(PAGES[1])}>Multiple choice (coming soon) </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setCurrentPage(PAGES[1])}>Recruiter tracking (coming soon)</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

const renderCurrentPage = (currentPage) => {
  switch (currentPage) {
    case 'Flash cards':
      return (
        <FlashCardApp
        />
      );
    case 'Home':
      return Home();
    default:
      return Home();
  }
}

function Home() {
  return (
    <p>
      Welcome to Full Stack Trainer. This application is a series of 'mini-apps' that will help aid in your journey to broadening your programming skills in an ever-demanding job market.
    </p>
  )
}
export default App;
