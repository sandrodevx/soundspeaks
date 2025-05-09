import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { FaPlay, FaHeart, FaShareAlt } from 'react-icons/fa';
import '../styles/FeaturedTracks.scss';

// Mock data for featured tracks
const featuredTracks = [
  {
    id: 1,
    title: 'Afro Sunset',
    artist: 'SoundSpeaks',
    image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd847f1b?auto=format&fit=crop&w=500&q=80',
    duration: '5:24'
  },
  {
    id: 2,
    title: 'Tech Vibes',
    artist: 'SoundSpeaks ft. DJ Flow',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80',
    duration: '4:18'
  },
  {
    id: 3,
    title: 'House Nation',
    artist: 'SoundSpeaks',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80',
    duration: '6:05'
  }
];

const FeaturedTracks: React.FC = () => {
  return (
    <Row className="track-list">
      {featuredTracks.map(track => (
        <Col lg={4} md={6} className="mb-4" key={track.id}>
          <Card className="track-card">
            <div className="track-image">
              <Card.Img variant="top" src={track.image} />
              <div className="overlay">
                <button className="play-btn" aria-label={`Play ${track.title}`} title={`Play ${track.title}`}>
                  <FaPlay />
                </button>
              </div>
            </div>
            <Card.Body>
              <Card.Title>{track.title}</Card.Title>
              <Card.Text className="artist">{track.artist}</Card.Text>
              <div className="track-info">
                <span className="duration">{track.duration}</span>
                <div className="track-actions">
                  <button className="action-btn like-btn" aria-label="Like track" title="Like">
                    <FaHeart />
                  </button>
                  <button className="action-btn share-btn" aria-label="Share track" title="Share">
                    <FaShareAlt />
                  </button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default FeaturedTracks; 