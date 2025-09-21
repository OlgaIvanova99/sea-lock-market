const LogoSvg = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 64 64" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Container base */}
      <rect 
        x="8" 
        y="20" 
        width="48" 
        height="32" 
        rx="2" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="hsl(var(--ocean-deep))"
      />
      
      {/* Container doors */}
      <line x1="32" y1="20" x2="32" y2="52" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="28" cy="36" r="2" fill="currentColor" />
      <circle cx="36" cy="36" r="2" fill="currentColor" />
      
      {/* Digital lock pattern overlay */}
      <g className="encrypted-pulse">
        {/* Lock icon */}
        <rect x="26" y="12" width="12" height="8" rx="6" stroke="hsl(var(--encrypted-green))" strokeWidth="1.5" fill="none" />
        <rect x="28" y="16" width="8" height="6" rx="1" fill="hsl(var(--encrypted-green))" />
        
        {/* Circuit patterns */}
        <path 
          d="M12 24 L20 24 M44 24 L52 24 M12 36 L16 36 M48 36 L52 36 M12 48 L20 48 M44 48 L52 48" 
          stroke="hsl(var(--encrypted-green))" 
          strokeWidth="1" 
          strokeDasharray="2,2"
        />
        
        {/* Digital corners */}
        <path d="M8 20 L10 20 L10 22" stroke="hsl(var(--encrypted-green))" strokeWidth="1.5" fill="none" />
        <path d="M54 20 L56 20 L56 22" stroke="hsl(var(--encrypted-green))" strokeWidth="1.5" fill="none" />
        <path d="M8 50 L10 50 L10 52" stroke="hsl(var(--encrypted-green))" strokeWidth="1.5" fill="none" />
        <path d="M54 50 L56 50 L56 52" stroke="hsl(var(--encrypted-green))" strokeWidth="1.5" fill="none" />
      </g>
    </svg>
  );
};

export default LogoSvg;