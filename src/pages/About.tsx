import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHeadphones, FaMusic, FaMicrophone } from 'react-icons/fa';
import '../styles/About.scss';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10}>
              <h1 className="mb-4">About <span className="text-gradient">SoundSpeaks</span></h1>
              <p className="lead">
                Your gateway to the best in AfroHouse, Tech House and electronic music.
                We are passionate about sharing amazing sounds that speak to your soul.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about-story section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="about-image">
                <img 
                  src="/images/SoundSpeaks.png" 
                  alt="SoundSpeaks Logo" 
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col lg={6}>
              <h2 className="section-title">Our Story</h2>
              <p>
                SoundSpeaks was born from a deep passion for electronic music and the desire to create a platform that showcases the vibrant sounds of AfroHouse and Tech House.
              </p>
              <p>
                What started as a small channel has grown into a community of music lovers who appreciate the unique blend of electronic beats and cultural influences.
              </p>
              <p>
                Our mission is to provide a platform for both established and emerging artists, bringing their sounds to a global audience. We believe in the power of music to connect people across cultures and borders.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about-mission section bg-dark">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="section-title">Our Mission</h2>
              <p className="section-subtitle">
                We aim to spread the love for electronic music and create a community around the sounds we love.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-4 mb-md-0">
              <div className="mission-card">
                <div className="icon-box neon-orange">
                  <FaHeadphones />
                </div>
                <h3>Discover</h3>
                <p>Uncovering the best tracks and artists in the electronic music scene and bringing them to our audience.</p>
              </div>
            </Col>
            <Col md={4} className="mb-4 mb-md-0">
              <div className="mission-card">
                <div className="icon-box neon-blue">
                  <FaMusic />
                </div>
                <h3>Share</h3>
                <p>Creating a platform where music can be shared, discovered, and celebrated by a global audience.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="mission-card">
                <div className="icon-box neon-purple">
                  <FaMicrophone />
                </div>
                <h3>Connect</h3>
                <p>Building a community of music lovers and creators who share our passion for electronic sounds.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about-team section">
        <Container>
          <h2 className="section-title text-center mb-5">The Team</h2>
          <Row className="justify-content-center">
            <Col md={6} className="mb-4">
              <div className="team-member">
                <div className="member-image">
                  <img 
                    src="/images/perfil-sandro.jpg" 
                    alt="Sandro Gomez" 
                    className="img-fluid rounded-circle"
                  />
                </div>
                <h3 className="neon-orange">Sandro Gomez</h3>
                <p className="member-role">Founder & Music Producer</p>
                <p className="member-bio">
                  A passionate musician with experience in the electronic music scene.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About; 