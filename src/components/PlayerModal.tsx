import React from 'react';
import { Modal } from 'react-bootstrap';
import YouTubePlayer from './YouTubePlayer';

interface PlayerModalProps {
  show: boolean;
  onHide: () => void;
  videoId: string;
  trackTitle: string;
  trackArtist: string;
}

const PlayerModal: React.FC<PlayerModalProps> = ({ 
  show, 
  onHide, 
  videoId, 
  trackTitle, 
  trackArtist 
}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="lg"
      className="modal-player"
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {trackTitle} - {trackArtist}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <YouTubePlayer videoId={videoId} autoplay={true} />
      </Modal.Body>
    </Modal>
  );
};

export default PlayerModal; 