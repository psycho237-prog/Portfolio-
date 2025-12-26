const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Yellow Triangle */}
      <div 
        className="absolute floating-shape"
        style={{ 
          top: '12%', 
          left: '8%',
          animationDelay: '0s',
          animationDuration: '8s'
        }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <polygon 
            points="30,8 55,52 5,52" 
            fill="hsl(var(--shape-yellow))"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Cyan Circle */}
      <div 
        className="absolute floating-shape"
        style={{ 
          top: '65%', 
          right: '12%',
          animationDelay: '2s',
          animationDuration: '7s'
        }}
      >
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <circle 
            cx="25" 
            cy="25" 
            r="20" 
            fill="hsl(var(--shape-cyan))"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Orange Squiggle/Wave */}
      <div 
        className="absolute floating-shape"
        style={{ 
          top: '25%', 
          right: '18%',
          animationDelay: '1s',
          animationDuration: '9s'
        }}
      >
        <svg width="80" height="30" viewBox="0 0 80 30" fill="none">
          <path 
            d="M5 15 Q 15 5, 25 15 T 45 15 T 65 15 T 75 15" 
            stroke="hsl(var(--shape-orange))"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Pink Diamond */}
      <div 
        className="absolute floating-shape"
        style={{ 
          bottom: '25%', 
          left: '15%',
          animationDelay: '3s',
          animationDuration: '10s'
        }}
      >
        <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
          <polygon 
            points="22.5,5 40,22.5 22.5,40 5,22.5" 
            fill="hsl(var(--shape-pink))"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Purple Plus sign */}
      <div 
        className="absolute floating-shape"
        style={{ 
          top: '75%', 
          left: '35%',
          animationDelay: '4s',
          animationDuration: '6s'
        }}
      >
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
          <rect x="14" y="5" width="7" height="25" fill="hsl(var(--shape-purple))" opacity="0.9"/>
          <rect x="5" y="14" width="25" height="7" fill="hsl(var(--shape-purple))" opacity="0.9"/>
        </svg>
      </div>

      {/* Cyan small dots */}
      <div 
        className="absolute floating-shape"
        style={{ 
          top: '40%', 
          left: '5%',
          animationDelay: '2.5s',
          animationDuration: '5s'
        }}
      >
        <div className="w-3 h-3 rounded-full bg-shape-cyan" />
      </div>

      {/* Yellow dot */}
      <div 
        className="absolute floating-shape"
        style={{ 
          top: '20%', 
          right: '6%',
          animationDelay: '1.5s',
          animationDuration: '7s'
        }}
      >
        <div className="w-4 h-4 rounded-full bg-shape-yellow" />
      </div>

      {/* Orange dot */}
      <div 
        className="absolute floating-shape"
        style={{ 
          bottom: '15%', 
          right: '25%',
          animationDelay: '3.5s',
          animationDuration: '8s'
        }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-shape-orange" />
      </div>

      {/* Pink small circle */}
      <div 
        className="absolute floating-shape"
        style={{ 
          top: '50%', 
          right: '35%',
          animationDelay: '0.5s',
          animationDuration: '6s'
        }}
      >
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
          <circle 
            cx="12.5" 
            cy="12.5" 
            r="10" 
            stroke="hsl(var(--shape-pink))"
            strokeWidth="2"
            fill="none"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Yellow outline triangle */}
      <div 
        className="absolute floating-shape"
        style={{ 
          bottom: '35%', 
          right: '8%',
          animationDelay: '2s',
          animationDuration: '9s'
        }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <polygon 
            points="20,5 38,35 2,35" 
            stroke="hsl(var(--shape-yellow))"
            strokeWidth="2"
            fill="none"
            opacity="0.7"
          />
        </svg>
      </div>
    </div>
  );
};

export default FloatingShapes;