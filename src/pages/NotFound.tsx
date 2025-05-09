import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import '../styles/NotFound.scss';

const NotFound: React.FC = () => {
  return (
    <div className="not-found-page">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8} lg={6}>
            <div className="not-found-content">
              <h1 className="error-code">404</h1>
              <div className="sound-wave">
                <svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
                  <path className="wave" d="M0,10 Q10,0 15,10 T30,10 T45,10 T60,10 T75,10 T90,10 T100,10" />
                </svg>
              </div>
              <h2 className="error-title">Page Not Found</h2>
              <p className="error-message">
                Oops! The page you're looking for doesn't exist or has been moved.
              </p>
              <Link to="/" className="btn btn-neon mt-4">
                <FaHome className="me-2" /> Back to Home
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound; 