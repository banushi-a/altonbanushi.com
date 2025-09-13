import React, { useMemo } from 'react';

interface MeshBackgroundProps {
  className?: string;
}

const MeshBackground: React.FC<MeshBackgroundProps> = React.memo(({ className = '' }) => {
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

    </div>
  );
});

MeshBackground.displayName = 'MeshBackground';

export default MeshBackground;