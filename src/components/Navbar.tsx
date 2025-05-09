import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Navbar as BsNavbar, Nav } from 'react-bootstrap';
import { FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';
import Logo from './Logo';
import '../styles/Navbar.scss';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BsNavbar 
      expand="lg" 
      className={`navbar-dark ${isScrolled ? 'scrolled' : ''}`} 
      fixed="top"
      expanded={expanded}
    >
      <Container>
        <BsNavbar.Brand as={Link} to="/">
          <Logo />
        </BsNavbar.Brand>
        <BsNavbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)}
        />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link 
              as={NavLink} 
              to="/" 
              onClick={() => setExpanded(false)}
              className="nav-link"
              end
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/music" 
              onClick={() => setExpanded(false)}
              className="nav-link"
            >
              Music
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/about" 
              onClick={() => setExpanded(false)}
              className="nav-link"
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/contact" 
              onClick={() => setExpanded(false)}
              className="nav-link"
            >
              Contact
            </Nav.Link>
          </Nav>
          <Nav className="social-icons">
            <Nav.Link href="https://www.youtube.com/channel/SoundSpeaks" target="_blank" className="neon-orange">
              <FaYoutube />
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/soundspeaks" target="_blank" className="neon-blue">
              <FaInstagram />
            </Nav.Link>
            <Nav.Link href="https://www.tiktok.com/@soundspeaks" target="_blank" className="neon-purple">
              <FaTiktok />
            </Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar; 