/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Track mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Apply smooth springs so the halo trails beautifully
  const springSettings = { stiffness: 120, damping: 25, mass: 0.6 };
  const glowX = useSpring(mouseX, springSettings);
  const glowY = useSpring(mouseY, springSettings);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 100); // offset half of width (200px / 2)
      mouseY.set(e.clientY - 100); // offset half of height (200px / 2)
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Only apply on non-touch screens
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (!isTouch) {
      window.addEventListener('mousemove', handleMouseMove);
      document.body.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-40 rounded-full mix-blend-screen opacity-15 blur-[80px]"
      style={{
        left: glowX,
        top: glowY,
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, #c5a880 0%, rgba(197, 168, 128, 0.4) 40%, transparent 100%)',
      }}
    />
  );
}
