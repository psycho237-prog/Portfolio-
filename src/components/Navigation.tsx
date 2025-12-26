import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Case Studies', href: '#projects', isSection: true },
    { label: 'Experiments', href: '/experiments', isSection: false },
    { label: 'Contact', href: '#contact', isSection: true },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.isSection && isHomePage) {
      const element = document.querySelector(item.href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/"
          className="hoverable text-xl font-bold font-display"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          GL<span className="text-primary">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            item.isSection ? (
              isHomePage ? (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="hoverable text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={`/${item.href}`}
                  className="hoverable text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              )
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className={`hoverable text-sm font-medium tracking-wide transition-colors ${
                  location.pathname === item.href ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            )
          ))}

          {/* Theme toggle placeholder */}
          <button className="hoverable p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Moon className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden hoverable p-2"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-6">
            {navItems.map((item) => (
              item.isSection ? (
                isHomePage ? (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className="text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={`/${item.href}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-left text-lg font-medium transition-colors ${
                    location.pathname === item.href ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;