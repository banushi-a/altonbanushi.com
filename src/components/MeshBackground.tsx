import React, { useMemo, useCallback } from 'react';
import useMousePosition from '../hooks/useMousePosition';

interface MeshBackgroundProps {
  className?: string;
}

const MeshBackground: React.FC<MeshBackgroundProps> = React.memo(({ className = '' }) => {
  const mousePosition = useMousePosition();

  // Throttle mouse position updates to reduce calculations
  const throttledMousePos = useMemo(() => {
    if (!mousePosition.x || !mousePosition.y) return { x: null, y: null };
    // Round to nearest 10px to reduce unique calculations
    return {
      x: Math.round(mousePosition.x / 10) * 10,
      y: Math.round(mousePosition.y / 10) * 10
    };
  }, [Math.round((mousePosition.x || 0) / 10), Math.round((mousePosition.y || 0) / 10)]);

  // Pre-calculate distortion values to avoid repeated math operations
  const distortionValues = useMemo(() => {
    if (!throttledMousePos.x || !throttledMousePos.y) return null;
    
    const x = throttledMousePos.x;
    const y = throttledMousePos.y;
    
    return {
      size1: `${38 + Math.sin(x * 0.01) * 4}px ${40 + Math.cos(y * 0.01) * 4}px`,
      size2: `${38 + Math.cos(x * 0.01) * 4}px ${40 + Math.sin(y * 0.01) * 4}px`,
      size3: `${78 + Math.sin(x * 0.005) * 6}px ${82 + Math.cos(y * 0.005) * 6}px`,
      size4: `${78 + Math.cos(x * 0.005) * 6}px ${82 + Math.sin(y * 0.005) * 6}px`,
      size5: `${58 + Math.sin(x * 0.008) * 5}px ${62 + Math.cos(y * 0.008) * 5}px`,
      size6: `${58 + Math.cos(x * 0.008) * 5}px ${62 + Math.sin(y * 0.008) * 5}px`,
      
      pos1: `${Math.sin(x * 0.02) * 2}px ${Math.cos(y * 0.02) * 2}px`,
      pos2: `${Math.cos(x * 0.02) * 2}px ${Math.sin(y * 0.02) * 2}px`,
      pos3: `${Math.sin(x * 0.01) * 3}px ${Math.cos(y * 0.01) * 3}px`,
      pos4: `${Math.cos(x * 0.01) * 3}px ${Math.sin(y * 0.01) * 3}px`,
      pos5: `${Math.sin(x * 0.015) * 2.5}px ${Math.cos(y * 0.015) * 2.5}px`,
      pos6: `${Math.cos(x * 0.015) * 2.5}px ${Math.sin(y * 0.015) * 2.5}px`,
      
      maskImage: `radial-gradient(circle 250px at ${x}px ${y}px, black 0%, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 80%, transparent 100%)`
    };
  }, [throttledMousePos.x, throttledMousePos.y]);
  // Memoize static background styles to prevent recalculation
  const staticBackgroundStyle = useMemo(() => ({
    backgroundImage: `
      linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
      linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
      linear-gradient(rgba(168, 85, 247, 0.15) 1px, transparent 1px),
      linear-gradient(90deg, rgba(168, 85, 247, 0.15) 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px, 40px 40px, 80px 80px, 80px 80px',
    backgroundPosition: '0 0, 0 0, 0 0, 0 0',
    animation: 'meshFloat 8s ease-in-out infinite',
    // GPU acceleration hints
    transform: 'translateZ(0)',
    willChange: 'transform',
  }), []);

  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={staticBackgroundStyle}
    >
      {/* Enhanced static glow areas - memoized for performance */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={useMemo(() => ({
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.35) 0%, transparent 45%),
            radial-gradient(circle at 75% 35%, rgba(59, 130, 246, 0.3) 0%, transparent 40%),
            radial-gradient(circle at 45% 75%, rgba(236, 72, 153, 0.25) 0%, transparent 35%),
            radial-gradient(circle at 85% 85%, rgba(168, 85, 247, 0.2) 0%, transparent 30%),
            radial-gradient(circle at 10% 60%, rgba(59, 130, 246, 0.15) 0%, transparent 25%),
            radial-gradient(circle at 90% 20%, rgba(236, 72, 153, 0.18) 0%, transparent 30%)
          `,
          animation: 'meshGlow 10s ease-in-out infinite',
          transform: 'translateZ(0)',
          willChange: 'transform, opacity',
        }), [])}
      />
      
      {/* Additional mesh layers - memoized */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={useMemo(() => ({
          backgroundImage: `
            linear-gradient(45deg, rgba(236, 72, 153, 0.08) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(236, 72, 153, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'meshFloat 15s ease-in-out infinite reverse',
          transform: 'translateZ(0)',
          willChange: 'transform',
        }), [])}
      />
      
      {/* Animated pulse overlay - memoized */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-60"
        style={useMemo(() => ({
          backgroundImage: `
            radial-gradient(circle at 10% 90%, rgba(59, 130, 246, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 90% 10%, rgba(236, 72, 153, 0.12) 0%, transparent 50%)
          `,
          animation: 'meshPulse 15s ease-in-out infinite',
          transform: 'translateZ(0)',
          willChange: 'transform, opacity',
        }), [])}
      />

      {/* Mouse hover effect - brightens and distorts mesh lines */}
      {distortionValues && (
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            // Simplified distorted mesh for better performance
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.9) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.9) 1px, transparent 1px),
              linear-gradient(rgba(168, 85, 247, 0.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.7) 1px, transparent 1px)
            `,
            // Use pre-calculated size variations (reduced to 4 layers)
            backgroundSize: `${distortionValues.size1}, ${distortionValues.size2}, ${distortionValues.size3}, ${distortionValues.size4}`,
            // Use pre-calculated position offsets (reduced to 4 layers)
            backgroundPosition: `${distortionValues.pos1}, ${distortionValues.pos2}, ${distortionValues.pos3}, ${distortionValues.pos4}`,
            // Use pre-calculated mask
            maskImage: distortionValues.maskImage,
            WebkitMaskImage: distortionValues.maskImage,
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            // GPU acceleration
            transform: 'translateZ(0)',
            willChange: 'auto',
            // Optimize compositing
            isolation: 'isolate'
          }}
        />
      )}
    </div>
  );
});

MeshBackground.displayName = 'MeshBackground';

export default MeshBackground;