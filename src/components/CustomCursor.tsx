import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], .hoverable')) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleHoverStart);
    document.addEventListener('mouseout', handleHoverEnd);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleHoverStart);
      document.removeEventListener('mouseout', handleHoverEnd);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: position.x - 4,
          top: position.y - 4,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div 
          className={`rounded-full bg-foreground transition-all duration-200 ${
            isHovering ? 'w-3 h-3' : 'w-2 h-2'
          }`}
        />
      </div>
      
      {/* Cursor ring */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          transition: 'transform 0.15s ease-out, width 0.2s, height 0.2s',
        }}
      >
        <div 
          className={`rounded-full border border-primary/60 transition-all duration-200 ${
            isHovering ? 'w-16 h-16 -ml-4 -mt-4 border-primary' : 'w-10 h-10'
          }`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
