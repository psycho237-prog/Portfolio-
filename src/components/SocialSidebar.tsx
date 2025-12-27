import { useEffect, useState } from 'react';
import { Github, Linkedin, Facebook, Youtube } from 'lucide-react';

const SocialSidebar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const socials = [
    {
      icon: Github,
      href: 'https://github.com/psycho237-prog',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/onana-gregoire-legrand-a18529282',
      label: 'LinkedIn'
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/psych0.Greg',
      label: 'Facebook'
    },
    {
      icon: Youtube,
      href: 'https://youtube.com/@psychogreg',
      label: 'YouTube'
    },
  ];

  return (
    <div
      className={`fixed right-4 md:right-8 bottom-8 md:top-1/2 md:-translate-y-1/2 z-50 flex flex-col gap-5 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'
        }`}
    >
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group hoverable"
        >
          <div className="relative p-2 transition-all duration-300 text-muted-foreground hover:text-foreground bg-background/80 backdrop-blur-sm rounded-full md:bg-transparent border border-border/50 md:border-none shadow-lg md:shadow-none">
            <social.icon className="w-4 h-4 md:w-5 md:h-5" />
          </div>
        </a>
      ))}

      {/* Vertical line - hidden on mobile */}
      <div className="w-px h-24 bg-border mx-auto mt-4 hidden md:block" />
    </div>
  );
};

export default SocialSidebar;