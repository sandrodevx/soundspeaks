import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaTiktok, FaHeadphones, FaMusic, FaMicrophone } from 'react-icons/fa';
import HeroSlider from '../components/HeroSlider';
import FeaturedTracks from '../components/FeaturedTracks';
import MusicWaveform from '../components/MusicWaveform';
import '../styles/Home.scss';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <HeroSlider />
        <div className="hero-content">
          <Container>
            <Row className="align-items-center">
              <Col lg={8} className="mx-auto text-center">
                <h1>
                  <span className="neon-orange">Sound</span>
                  <span className="neon-blue">Speaks</span>
                </h1>
                <p className="hero-subtitle">Experience the rhythm of AfroHouse & Tech House</p>
                <div className="hero-buttons">
                  <Link to="/music" className="btn btn-neon me-3">Explore Music</Link>
                  <a 
                    href="https://www.youtube.com/channel/SoundSpeaks" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline-light"
                  >
                    <FaYoutube className="me-2" /> YouTube Channel
                  </a>
                </div>
                <div className="social-icons">
                  <a href="https://www.youtube.com/channel/SoundSpeaks" target="_blank" rel="noopener noreferrer" className="neon-orange">
                    <FaYoutube />
                  </a>
                  <a href="https://www.instagram.com/soundspeaks" target="_blank" rel="noopener noreferrer" className="neon-blue">
                    <FaInstagram />
                  </a>
                  <a href="https://www.tiktok.com/@soundspeaks" target="_blank" rel="noopener noreferrer" className="neon-purple">
                    <FaTiktok />
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <MusicWaveform />

      <section className="features-section section">
        <Container>
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">Dive into the world of electronic music with SoundSpeaks</p>
          
          <Row className="features">
            <Col md={4} className="feature-item">
              <div className="feature-icon neon-orange">
                <FaHeadphones />
              </div>
              <h3>Premium Music</h3>
              <p>Experience high-quality AfroHouse and Tech House tracks that will get you moving.</p>
            </Col>
            <Col md={4} className="feature-item">
              <div className="feature-icon neon-blue">
                <FaMusic />
              </div>
              <h3>Fresh Releases</h3>
              <p>Stay updated with the latest tracks and mixes from the electronic music scene.</p>
            </Col>
            <Col md={4} className="feature-item">
              <div className="feature-icon neon-purple">
                <FaMicrophone />
              </div>
              <h3>Exclusive Content</h3>
              <p>Get access to exclusive mixes, behind-the-scenes content, and artist collaborations.</p>
            </Col>
          </Row>
          
          <div className="text-center mt-5">
            <Link to="/about" className="btn btn-neon">Learn More</Link>
          </div>
        </Container>
      </section>

      <section className="music-section section">
        <Container>
          <h2 className="section-title">Featured Tracks</h2>
          <p className="section-subtitle">Check out our latest and most popular tracks</p>
          
          <FeaturedTracks />
          
          <div className="text-center mt-4">
            <Link to="/music" className="btn btn-neon">View All Tracks</Link>
          </div>
        </Container>
      </section>

      <section className="cta-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} className="text-center">
              <h2>Ready to Experience the Sound?</h2>
              <p>Join our community and stay updated with the latest music and events.</p>
              <form className="cta-form">
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Your email address" />
                  <Button type="submit" className="btn btn-neon">Subscribe</Button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home; 