import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { FaPlay, FaHeart, FaYoutube } from 'react-icons/fa';
import PlayerModal from './PlayerModal';
import '../styles/FeaturedTracks.scss';

// Real tracks data
const featuredTracks = [
  {
    id: 1,
    title: 'Yemayá',
    artist: 'SoundSpeaks',
    description: 'Afrohouse Yoruba',
    image: 'https://i.ytimg.com/vi/2qff694gjqs/maxresdefault.jpg',
    duration: '5:42',
    youtubeUrl: 'https://www.youtube.com/watch?v=2qff694gjqs',
    videoId: '2qff694gjqs'
  },
  {
    id: 2,
    title: 'ODÙ AFRO SENSUAL',
    artist: 'SoundSpeaks',
    description: 'Deep Afrohouse',
    image: 'https://i.ytimg.com/vi/XUnYkqg4gZc/maxresdefault.jpg',
    duration: '5:15',
    youtubeUrl: 'https://www.youtube.com/watch?v=XUnYkqg4gZc',
    videoId: 'XUnYkqg4gZc'
  },
  {
    id: 3,
    title: 'Addimú',
    artist: 'SoundSpeaks',
    description: 'Afrohouse Santo Ritual',
    image: 'https://i.ytimg.com/vi/abaRySZuAY0/maxresdefault.jpg',
    duration: '6:31',
    youtubeUrl: 'https://www.youtube.com/watch?v=abaRySZuAY0',
    videoId: 'abaRySZuAY0'
  }
];

const FeaturedTracks: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<typeof featuredTracks[0] | null>(null);

  const handlePlay = (track: typeof featuredTracks[0]) => {
    setSelectedTrack(track);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Row className="track-list">
        {featuredTracks.map(track => (
          <Col lg={4} md={6} className="mb-4" key={track.id}>
            <Card className="track-card">
              <div className="track-image">
                <Card.Img variant="top" src={track.image} />
                <div className="overlay">
                  <button 
                    className="play-btn" 
                    onClick={() => handlePlay(track)}
                    aria-label={`Play ${track.title}`} 
                    title={`Play ${track.title}`}
                  >
                    <FaPlay />
                  </button>
                </div>
              </div>
              <Card.Body>
                <Card.Title>{track.title}</Card.Title>
                <Card.Text className="artist">{track.artist}</Card.Text>
                <Card.Text className="description">{track.description}</Card.Text>
                <div className="track-info">
                  <span className="duration">{track.duration}</span>
                  <div className="track-actions">
                    <button className="action-btn like-btn" aria-label="Like track" title="Like">
                      <FaHeart />
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
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

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
    </>
  );
};

export default FeaturedTracks; 