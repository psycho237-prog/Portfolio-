import { Github, Linkedin, Facebook, Youtube } from 'lucide-react';

const SocialSidebar = () => {
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
      href: 'https://www.facebook.com/psych.greg', 
      label: 'Facebook' 
    },
    { 
      icon: Youtube, 
      href: 'https://youtube.com/@psychogreg', 
      label: 'YouTube' 
    },
  ];

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-5">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group hoverable"
        >
          <div className="relative p-2 transition-all duration-300 text-muted-foreground hover:text-foreground">
            <social.icon className="w-5 h-5" />
          </div>
        </a>
      ))}
      
      {/* Vertical line */}
      <div className="w-px h-24 bg-border mx-auto mt-4" />
    </div>
  );
};

export default SocialSidebar;