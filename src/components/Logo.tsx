import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Logo.scss';

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <img src="/images/SoundSpeaks.png" alt="SoundSpeaks Logo" className="logo-img" />
    </div>
  );
};

export default Logo; 