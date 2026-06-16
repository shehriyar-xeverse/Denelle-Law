/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface ThreeDTiltCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  id?: string;
  key?: any;
}

export default function ThreeDTiltCard({
  children,
  className = '',
  onClick,
  id,
}: ThreeDTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;

    const bounds = cardRef.current.getBoundingClientRect();
    const width = bounds.width;
    const height = bounds.height;
    
    // Relative coordinates between -0.5 and 0.5
    const x = (e.clientX - bounds.left) / width - 0.5;
    const y = (e.clientY - bounds.top) / height - 0.5;

    setCoords({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  // Maximum tilt degrees
  const maxTilt = 8;
  const rotateX = -coords.y * maxTilt;
  const rotateY = coords.x * maxTilt;

  // Outer shadow should shift opposite to tilt
  const shadowX = -coords.x * 12;
  const shadowY = -coords.y * 12;

  const currentStyles = isMobile
    ? {}
    : {
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        boxShadow: isHovered
          ? `${shadowX}px ${shadowY}px 30px rgba(212, 175, 55, 0.15), 0 0 20px rgba(0, 0, 0, 0.8)`
          : '0 4px 20px rgba(0, 0, 0, 0.4)',
        transition: isHovered ? 'none' : 'transform 0.5s ease, box-shadow 0.5s ease',
      };

  return (
    <div
      ref={cardRef}
      id={id}
      className={`glass-premium rounded-none p-6 relative overflow-hidden transition-colors duration-300 ${
        onClick ? 'cursor-pointer hover:border-gold-500/30' : ''
      } ${className}`}
      style={currentStyles}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Background glow orb that follows the cursor inside */}
      {!isMobile && isHovered && (
        <div
          className="absolute pointer-events-none rounded-full blur-2xl opacity-20"
          style={{
            width: '120px',
            height: '140px',
            background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)',
            left: `${(coords.x + 0.5) * 100}%`,
            top: `${(coords.y + 0.5) * 100}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
