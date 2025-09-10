import React from 'react';
import useMousePosition from '../hooks/useMousePosition';

interface MeshBackgroundProps {
  className?: string;
}

const MeshBackground: React.FC<MeshBackgroundProps> = ({ className = '' }) => {
  const mousePosition = useMousePosition();
  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
          linear-gradient(rgba(168, 85, 247, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(168, 85, 247, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px, 40px 40px, 80px 80px, 80px 80px',
        backgroundPosition: '0 0, 0 0, 0 0, 0 0',
        animation: 'meshFloat 8s ease-in-out infinite',
      }}
    >
      {/* Enhanced static glow areas with more pronounced colors */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.35) 0%, transparent 45%),
            radial-gradient(circle at 75% 35%, rgba(59, 130, 246, 0.3) 0%, transparent 40%),
            radial-gradient(circle at 45% 75%, rgba(236, 72, 153, 0.25) 0%, transparent 35%),
            radial-gradient(circle at 85% 85%, rgba(168, 85, 247, 0.2) 0%, transparent 30%),
            radial-gradient(circle at 10% 60%, rgba(59, 130, 246, 0.15) 0%, transparent 25%),
            radial-gradient(circle at 90% 20%, rgba(236, 72, 153, 0.18) 0%, transparent 30%)
          `,
          animation: 'meshGlow 10s ease-in-out infinite',
        }}
      />
      
      {/* Additional mesh layers for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(236, 72, 153, 0.08) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(236, 72, 153, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'meshFloat 15s ease-in-out infinite reverse',
        }}
      />
      
      {/* Animated pulse overlay for more dynamic feel */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 90%, rgba(59, 130, 246, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 90% 10%, rgba(236, 72, 153, 0.12) 0%, transparent 50%)
          `,
          animation: 'meshPulse 15s ease-in-out infinite',
        }}
      />

      {/* Mouse hover effect - brightens and distorts mesh lines */}
      {mousePosition.x !== null && mousePosition.y !== null && (
        <div 
          className="absolute inset-0 pointer-events-none transition-all duration-300"
          style={{
            // Create distorted mesh lines with higher opacity
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.9) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.9) 1px, transparent 1px),
              linear-gradient(rgba(168, 85, 247, 0.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.7) 1px, transparent 1px),
              linear-gradient(45deg, rgba(236, 72, 153, 0.5) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(236, 72, 153, 0.5) 1px, transparent 1px)
            `,
            // Add slight size variations for distortion effect
            backgroundSize: `
              ${38 + Math.sin(mousePosition.x * 0.01) * 4}px ${40 + Math.cos(mousePosition.y * 0.01) * 4}px,
              ${38 + Math.cos(mousePosition.x * 0.01) * 4}px ${40 + Math.sin(mousePosition.y * 0.01) * 4}px,
              ${78 + Math.sin(mousePosition.x * 0.005) * 6}px ${82 + Math.cos(mousePosition.y * 0.005) * 6}px,
              ${78 + Math.cos(mousePosition.x * 0.005) * 6}px ${82 + Math.sin(mousePosition.y * 0.005) * 6}px,
              ${58 + Math.sin(mousePosition.x * 0.008) * 5}px ${62 + Math.cos(mousePosition.y * 0.008) * 5}px,
              ${58 + Math.cos(mousePosition.x * 0.008) * 5}px ${62 + Math.sin(mousePosition.y * 0.008) * 5}px
            `,
            // Add slight position offset for wave-like distortion
            backgroundPosition: `
              ${Math.sin(mousePosition.x * 0.02) * 2}px ${Math.cos(mousePosition.y * 0.02) * 2}px,
              ${Math.cos(mousePosition.x * 0.02) * 2}px ${Math.sin(mousePosition.y * 0.02) * 2}px,
              ${Math.sin(mousePosition.x * 0.01) * 3}px ${Math.cos(mousePosition.y * 0.01) * 3}px,
              ${Math.cos(mousePosition.x * 0.01) * 3}px ${Math.sin(mousePosition.y * 0.01) * 3}px,
              ${Math.sin(mousePosition.x * 0.015) * 2.5}px ${Math.cos(mousePosition.y * 0.015) * 2.5}px,
              ${Math.cos(mousePosition.x * 0.015) * 2.5}px ${Math.sin(mousePosition.y * 0.015) * 2.5}px
            `,
            // Larger, softer gradient mask with smooth falloff
            maskImage: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, 
              black 0%, 
              rgba(0,0,0,0.9) 20%, 
              rgba(0,0,0,0.6) 40%, 
              rgba(0,0,0,0.3) 60%, 
              rgba(0,0,0,0.1) 80%, 
              transparent 100%)`,
            WebkitMaskImage: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, 
              black 0%, 
              rgba(0,0,0,0.9) 20%, 
              rgba(0,0,0,0.6) 40%, 
              rgba(0,0,0,0.3) 60%, 
              rgba(0,0,0,0.1) 80%, 
              transparent 100%)`,
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
          }}
        />
      )}
    </div>
  );
};

export default MeshBackground;