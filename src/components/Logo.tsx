import React from 'react';
import '../styles/Logo.scss';

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <img src="/images/SoundSpeaks.png" alt="SoundSpeaks Logo" className="logo-img" />
      <span className="logo-text">SoundSpeaks</span>
    </div>
  );
};

export default Logo; 