import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaMapMarkerAlt, FaEnvelope, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';
import '../styles/Contact.scss';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [showAlert, setShowAlert] = useState(false);
  const [validated, setValidated] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    
    // In a real application, this is where you would send the form data to your backend
    console.log('Form data submitted:', formData);
    
    // Show success message
    setShowAlert(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setValidated(false);
    
    // Hide alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  
  return (
    <div className="contact-page">
      <section className="contact-header">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10}>
              <h1>Get in <span className="neon-orange">Touch</span></h1>
              <p className="lead">
                Have a question or want to collaborate? We'd love to hear from you!
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className="contact-form-section section">
        <Container>
          <Row>
            <Col lg={6} className="mb-5 mb-lg-0">
              <div className="contact-info">
                <h2 className="section-title">Contact Information</h2>
                <p className="mb-4">
                  Feel free to reach out to us through any of the channels below.
                  We usually respond within 24-48 hours.
                </p>
                
                <div className="info-item">
                  <div className="icon neon-orange">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="content">
                    <h3>Location</h3>
                    <p>Madrid, Spain</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="icon neon-blue">
                    <FaEnvelope />
                  </div>
                  <div className="content">
                    <h3>Email</h3>
                    <p><a href="mailto:info@soundspeaks.com">info@soundspeaks.com</a></p>
                  </div>
                </div>
                
                <div className="social-links">
                  <h3>Follow Us</h3>
                  <div className="links">
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
                </div>
              </div>
            </Col>
            
            <Col lg={6}>
              <div className="contact-form-container">
                <h2 className="section-title">Send a Message</h2>
                
                {showAlert && (
                  <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                    Your message has been sent successfully! We'll get back to you soon.
                  </Alert>
                )}
                
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="contactName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your name.
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="contactEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid email address.
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="contactSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      as="select"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Business Proposal">Business Proposal</option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="Support">Support</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      Please select a subject.
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  <Form.Group className="mb-4" controlId="contactMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Enter your message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a message.
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  <Button type="submit" className="btn-neon btn-block w-100">
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className="map-section">
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194347.38440885297!2d-3.8196194295345785!3d40.437890755884354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1651145370465!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="SoundSpeaks Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact; 