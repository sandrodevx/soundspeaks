import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaPlay, FaHeart, FaYoutube, FaFilter } from 'react-icons/fa';
import PlayerModal from '../components/PlayerModal';
import MusicVisualizer from '../components/MusicVisualizer';
import '../styles/Music.scss';

// Real tracks data
const tracks = [
  {
    id: 1,
    title: 'Yemayá',
    artist: 'SoundSpeaks',
    category: 'AfroHouse',
    description: 'Afrohouse Yoruba',
    image: 'https://i.ytimg.com/vi/2qff694gjqs/maxresdefault.jpg',
    duration: '5:42',
    likes: 324,
    featured: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=2qff694gjqs'
  },
  {
    id: 2,
    title: 'ODÙ AFRO SENSUAL',
    artist: 'SoundSpeaks',
    category: 'AfroHouse',
    description: 'Deep Afrohouse',
    image: 'https://i.ytimg.com/vi/XUnYkqg4gZc/maxresdefault.jpg',
    duration: '5:15',
    likes: 267,
    featured: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=XUnYkqg4gZc'
  },
  {
    id: 3,
    title: 'Addimú',
    artist: 'SoundSpeaks',
    category: 'AfroHouse',
    description: 'Afrohouse Santo Ritual',
    image: 'https://i.ytimg.com/vi/abaRySZuAY0/maxresdefault.jpg',
    duration: '6:31',
    likes: 412,
    featured: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=abaRySZuAY0'
  },
  {
    id: 4,
    title: 'ORÍ',
    artist: 'SoundSpeaks',
    category: 'TechHouse',
    description: 'Techno Remix',
    image: 'https://i.ytimg.com/vi/gBJvyydFHYg/maxresdefault.jpg',
    duration: '4:52',
    likes: 198,
    featured: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=gBJvyydFHYg'
  },
  {
    id: 5,
    title: 'TÚ ME CURAS',
    artist: 'SoundSpeaks',
    category: 'AfroHouse',
    description: 'Afro-House Sensual',
    image: 'https://i.ytimg.com/vi/-uAfIbuwOE0/maxresdefault.jpg',
    duration: '5:37',
    likes: 145,
    featured: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=-uAfIbuwOE0'
  },
  {
    id: 6,
    title: 'Prende el Fuego',
    artist: 'SoundSpeaks',
    category: 'AfroHouse',
    description: 'Afrohouse Ritual',
    image: 'https://i.ytimg.com/vi/o5qnzHPvFig/maxresdefault.jpg',
    duration: '4:24',
    likes: 231,
    featured: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=o5qnzHPvFig'
  }
];

// Helper function to extract YouTube video ID from URL
const getYouTubeVideoId = (url: string): string => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : '';
};

// Add video IDs to tracks
const tracksWithVideoId = tracks.map(track => ({
  ...track,
  videoId: getYouTubeVideoId(track.youtubeUrl)
}));

const categories = ['All', 'AfroHouse', 'TechHouse', 'DeepHouse'];

const Music: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<typeof tracksWithVideoId[0] | null>(null);

  const handlePlay = (track: typeof tracksWithVideoId[0]) => {
    setSelectedTrack(track);
    setShowModal(true);
    setCurrentTrack(track.id);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const filteredTracks = tracksWithVideoId.filter(track => 
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
                      src={tracksWithVideoId.find(t => t.id === currentTrack)?.image} 
                      alt={tracksWithVideoId.find(t => t.id === currentTrack)?.title} 
                    />
                    <div className="track-info">
                      <h4>{tracksWithVideoId.find(t => t.id === currentTrack)?.title}</h4>
                      <p>{tracksWithVideoId.find(t => t.id === currentTrack)?.artist}</p>
                      <p className="description">{tracksWithVideoId.find(t => t.id === currentTrack)?.description}</p>
                    </div>
                  </div>
                  <div className="player-visualizer">
                    <MusicVisualizer />
                  </div>
                  <div className="player-controls">
                    <button 
                      className="control-btn" 
                      onClick={() => {
                        const track = tracksWithVideoId.find(t => t.id === currentTrack);
                        if (track) {
                          setSelectedTrack(track);
                          setShowModal(true);
                        }
                      }}
                      aria-label="Play in this page" 
                      title="Play in this page"
                    >
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
                        onClick={() => handlePlay(track)}
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
                    <p className="description">{track.description}</p>
                    <div className="track-meta">
                      <span className="category">{track.category}</span>
                      <span className="duration">{track.duration}</span>
                    </div>
                    <div className="track-actions">
                      <button className="action-btn like-btn" aria-label="Like">
                        <FaHeart /> <span>{track.likes}</span>
                      </button>
                      <a 
                        href={track.youtubeUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn youtube-btn" 
                        aria-label="Watch on YouTube"
                        title="Watch on YouTube"
                      >
                        <FaYoutube />
                      </a>
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

      {/* Player Modal */}
      {selectedTrack && (
        <PlayerModal
          show={showModal}
          onHide={handleCloseModal}
          videoId={selectedTrack.videoId}
          trackTitle={selectedTrack.title}
          trackArtist={selectedTrack.artist}
        />
      )}
    </div>
  );
};

export default Music; 