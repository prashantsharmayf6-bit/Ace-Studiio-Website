import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-16 h-16" }) => {
  return (
    <svg 
      viewBox="0 0 200 220" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="ACE STUDIIO Logo"
    >
      <defs>
        <linearGradient id="logoGradient" x1="100" y1="0" x2="100" y2="220" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7e22ce" /> {/* purple-700 */}
          <stop offset="100%" stopColor="#1e1b4b" /> {/* indigo-950 */}
        </linearGradient>
        <linearGradient id="strokeGradient" x1="0" y1="0" x2="200" y2="220" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#d946ef" /> {/* neon pink */}
          <stop offset="100%" stopColor="#581c87" /> {/* purple */}
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Hexagon Background with rounded corners via stroke */}
      <path 
        d="M100 10 L186.6 60 V160 L100 210 L13.4 160 V60 Z" 
        fill="url(#logoGradient)" 
        stroke="url(#strokeGradient)" 
        strokeWidth="8"
        strokeLinejoin="round"
      />
      
      {/* Inner decorative subtle line */}
      <path 
        d="M100 25 L173 67 V153 L100 195 L27 153 V67 Z" 
        stroke="white" 
        strokeOpacity="0.15" 
        strokeWidth="1.5"
      />

      {/* Main AS Monogram - Outline Style matching the provided image */}
      <text 
        x="100" 
        y="145" 
        textAnchor="middle" 
        fill="none"
        stroke="white"
        strokeWidth="3.5"
        fontSize="95" 
        fontWeight="800" 
        fontFamily="sans-serif"
        style={{ letterSpacing: '-8px' }}
      >
        AS
      </text>
    </svg>
  );
};

export default Logo;