export default function LogoSVG({ width = 120, height = 60, className = "" }) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 120 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* S&S text */}
      <text 
        x="60" 
        y="25" 
        fontSize="24" 
        fontWeight="bold" 
        textAnchor="middle"
        fill="url(#gradient)"
      >
        S&S
      </text>
      
      {/* Line */}
      <line 
        x1="20" 
        y1="32" 
        x2="100" 
        y2="32" 
        stroke="currentColor" 
        strokeWidth="1"
      />
      
      {/* DISTRIBUTION text */}
      <text 
        x="60" 
        y="45" 
        fontSize="8" 
        fontWeight="600" 
        letterSpacing="2"
        textAnchor="middle"
        fill="currentColor"
      >
        DISTRIBUTION
      </text>
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff6b35" />
          <stop offset="100%" stopColor="#004e89" />
        </linearGradient>
      </defs>
    </svg>
  )
}
