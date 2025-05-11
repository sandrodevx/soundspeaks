import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaTiktok, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="#000000" 
            fillOpacity="1" 
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,176C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
      <Container>
        <Row className="footer-content">
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className="neon-orange">SoundSpeaks</h5>
            <p>Your gateway to the best AfroHouse and Tech House music. Experience the sounds that speak to your soul.</p>
            <div className="social-links">
              <a href="https://www.youtube.com/@SoundSpeaks-s1" target="_blank" rel="noopener noreferrer" className="neon-orange">
                <FaYoutube />
              </a>
              <a href="https://www.instagram.com/sound_speaks/" target="_blank" rel="noopener noreferrer" className="neon-blue">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@sound_speaks" target="_blank" rel="noopener noreferrer" className="neon-purple">
                <FaTiktok />
              </a>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className="neon-blue">Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/music">Music</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>
          <Col lg={4} md={12}>
            <h5 className="neon-purple">Contact Us</h5>
            <div className="contact-info">
              <p>
                <FaEnvelope className="me-2" /> 
                <a href="mailto:info@soundspeaks.com">info@soundspeaks.com</a>
              </p>
            </div>
            <div className="newsletter">
              <h6>Subscribe to our newsletter</h6>
              <form>
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Your email" />
                  <button className="btn btn-neon" type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3 copyright">
            &copy; {currentYear} SoundSpeaks. All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 