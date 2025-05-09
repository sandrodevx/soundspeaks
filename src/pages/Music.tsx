import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaPlay, FaHeart, FaShareAlt, FaFilter } from 'react-icons/fa';
import MusicVisualizer from '../components/MusicVisualizer';
import '../styles/Music.scss';

// Mock data for tracks
const tracks = [
  {
    id: 1,
    title: 'Afro Sunset',
    artist: 'SoundSpeaks',
    category: 'AfroHouse',
    image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd847f1b?auto=format&fit=crop&w=500&q=80',
    duration: '5:24',
    likes: 324,
    featured: true
  },
  {
    id: 2,
    title: 'Tech Vibes',
    artist: 'SoundSpeaks ft. DJ Flow',
    category: 'TechHouse',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80',
    duration: '4:18',
    likes: 267,
    featured: true
  },
  {
    id: 3,
    title: 'House Nation',
    artist: 'SoundSpeaks',
    category: 'DeepHouse',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80',
    duration: '6:05',
    likes: 412,
    featured: false
  },
  {
    id: 4,
    title: 'Rhythm & Soul',
    artist: 'SoundSpeaks',
    category: 'AfroHouse',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80',
    duration: '4:52',
    likes: 198,
    featured: false
  },
  {
    id: 5,
    title: 'Electric Dreams',
    artist: 'SoundSpeaks ft. ElectroVibe',
    category: 'TechHouse',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=500&q=80',
    duration: '5:37',
    likes: 145,
    featured: false
  },
  {
    id: 6,
    title: 'Night Groove',
    artist: 'SoundSpeaks',
    category: 'DeepHouse',
    image: 'https://images.unsplash.com/photo-1499364615650-ec38552f4f34?auto=format&fit=crop&w=500&q=80',
    duration: '4:24',
    likes: 231,
    featured: false
  }
];

const categories = ['All', 'AfroHouse', 'TechHouse', 'DeepHouse'];

const Music: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);

  const handlePlay = (id: number) => {
    setCurrentTrack(id);
  };

  const filteredTracks = tracks.filter(track => 
    filter === 'All' ? true : track.category === filter
  );

  const sortedTracks = [...filteredTracks].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return b.id - a.id;
      case 'oldest':
        return a.id - b.id;
      case 'popular':
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

  return (
    <div className="music-page">
      <section className="music-header">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10}>
              <h1>Our <span className="neon-orange">Music</span></h1>
              <p className="lead">
                Discover our latest tracks and mixes in AfroHouse and Tech House.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {currentTrack && (
        <section className="music-player">
          <Container>
            <Row>
              <Col>
                <div className="player-container">
                  <div className="player-info">
                    <img 
                      src={tracks.find(t => t.id === currentTrack)?.image} 
                      alt={tracks.find(t => t.id === currentTrack)?.title} 
                    />
                    <div className="track-info">
                      <h4>{tracks.find(t => t.id === currentTrack)?.title}</h4>
                      <p>{tracks.find(t => t.id === currentTrack)?.artist}</p>
                    </div>
                  </div>
                  <div className="player-visualizer">
                    <MusicVisualizer />
                  </div>
                  <div className="player-controls">
                    <button className="control-btn" aria-label="Play/Pause" title="Play/Pause">
                      <FaPlay />
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}

      <section className="music-catalog section">
        <Container>
          <Row className="filter-row">
            <Col md={6} className="filter-buttons">
              <div className="d-flex align-items-center">
                <span className="me-3"><FaFilter /> Filter:</span>
                {categories.map(category => (
                  <Button 
                    key={category}
                    variant={filter === category ? 'primary' : 'outline-light'} 
                    className="me-2 mb-2"
                    onClick={() => setFilter(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </Col>
            <Col md={6} className="sort-options">
              <Form.Group className="ms-auto" style={{ maxWidth: '200px' }}>
                <Form.Select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="form-control-dark"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="popular">Most Popular</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="tracks-container">
            {sortedTracks.map(track => (
              <Col lg={4} md={6} className="mb-4" key={track.id}>
                <div className="track-card">
                  <div className="track-image">
                    <img src={track.image} alt={track.title} />
                    <div className="overlay">
                      <button 
                        className="play-btn"
                        onClick={() => handlePlay(track.id)}
                        aria-label={`Play ${track.title}`}
                      >
                        <FaPlay />
                      </button>
                    </div>
                    {track.featured && (
                      <span className="featured-badge">Featured</span>
                    )}
                  </div>
                  <div className="track-content">
                    <h3>{track.title}</h3>
                    <p className="artist">{track.artist}</p>
                    <div className="track-meta">
                      <span className="category">{track.category}</span>
                      <span className="duration">{track.duration}</span>
                    </div>
                    <div className="track-actions">
                      <button className="action-btn like-btn" aria-label="Like">
                        <FaHeart /> <span>{track.likes}</span>
                      </button>
                      <button className="action-btn share-btn" aria-label="Share">
                        <FaShareAlt />
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          <Row className="mt-5">
            <Col className="text-center">
              <Button variant="outline-light" size="lg">Load More</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Music; 