import React, { useEffect, useRef } from 'react';
import '../styles/MusicWaveform.scss';

const MusicWaveform: React.FC = () => {
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
    let bars: number[] = [];
    const barCount = 70;
    const barGap = 3;
    const barWidth = (rect.width / barCount) - barGap;
    
    // Generate initial bar heights
    for (let i = 0; i < barCount; i++) {
      bars.push(Math.random() * 50 + 10);
    }

    // Animation function
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      // Update bar heights with smooth transitions
      bars = bars.map(height => {
        const targetHeight = Math.random() * 50 + 10;
        return height + (targetHeight - height) * 0.05;
      });
      
      // Draw bars
      bars.forEach((height, index) => {
        const x = index * (barWidth + barGap);
        const y = (rect.height - height) / 2;
        
        // Create gradient for each bar
        const gradient = ctx.createLinearGradient(0, y, 0, y + height);
        gradient.addColorStop(0, '#00acff');  // Blue neon
        gradient.addColorStop(1, '#b100ff');  // Purple neon
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, height, 2);
        ctx.fill();
      });
      
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
    <div className="waveform-container">
      <canvas ref={canvasRef} className="waveform-canvas"></canvas>
    </div>
  );
};

export default MusicWaveform; 