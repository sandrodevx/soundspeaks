import React, { useEffect, useRef } from 'react';
import '../styles/MusicVisualizer.scss';

const MusicVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    // Animation variables
    const barCount = 100;
    const barWidth = rect.width / barCount;
    const frequencyData = new Uint8Array(barCount);
    
    // Fill with random data to simulate audio visualization
    const updateFrequencyData = () => {
      for (let i = 0; i < barCount; i++) {
        // Create a wave-like pattern with some randomness
        const sinValue = Math.sin(i * 0.1 + Date.now() * 0.001) * 0.5 + 0.5;
        const amplitude = 50 + Math.random() * 20;
        frequencyData[i] = sinValue * amplitude;
      }
    };
    
    // Animation function
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      // Update data
      updateFrequencyData();
      
      // Draw bars
      ctx.fillStyle = '#ff7300'; // Orange neon
      ctx.shadowColor = '#ff7300';
      ctx.shadowBlur = 10;
      
      for (let i = 0; i < barCount; i++) {
        const barHeight = frequencyData[i];
        const x = i * barWidth;
        const y = (rect.height - barHeight) / 2;
        
        // Draw the visualization bar
        ctx.fillRect(x, y, barWidth - 1, barHeight);
      }
      
      requestAnimationFrame(animate);
    };
    
    // Start animation
    const animationId = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <div className="visualizer-container">
      <canvas ref={canvasRef} className="visualizer-canvas"></canvas>
    </div>
  );
};

export default MusicVisualizer; 