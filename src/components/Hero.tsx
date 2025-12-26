import { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [scrambledText, setScrambledText] = useState('');
  const targetText = 'CYBERSECURITY ENTHUSIAST • AI DEVELOPER';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let iteration = 0;
    const maxIterations = targetText.length;

    const scramble = () => {
      setScrambledText(
        targetText
          .split('')
          .map((char, index) => {
            if (char === ' ' || char === '•') return char;
            if (index < iteration) return targetText[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      iteration += 0.5;

      if (iteration >= maxIterations) {
        setScrambledText(targetText);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    };

    // Start scramble after a delay
    const timeout = setTimeout(() => {
      intervalRef.current = setInterval(scramble, 30);
    }, 800);

    return () => {
      clearTimeout(timeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center relative px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Giant background letter */}
      <div className="hero-letter font-display">G</div>

      {/* Profile Image - Responsive Integration */}
      <div
        className="absolute right-0 top-0 w-full md:w-[65%] h-full z-0 opacity-30 pointer-events-none transition-all duration-1000 animate-fade-in"
        style={{ animationDelay: '0.9s' }}
      >
        <div className="relative w-full h-full">
          {/* Smooth transition gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10" />

          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="ONANA GREGOIRE LEGRAND"
            className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.8]"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 100%)',
              objectPosition: 'center 20%'
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-3xl text-left">
          {/* Name */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in font-display tracking-tight"
          >
            ONANA GREGOIRE
            <span className="block text-gradient-letter">LEGRAND</span>
          </h1>

          {/* Role with scramble effect */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-base md:text-lg text-muted-foreground font-mono tracking-widest">
              {scrambledText || targetText}
            </p>
          </div>

          {/* CTA Button - Red like original */}
          <button
            onClick={scrollToAbout}
            className="btn-primary hoverable animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            ABOUT ME
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;