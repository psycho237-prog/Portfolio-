import { useEffect } from 'react';
import CustomCursor from '@/components/CustomCursor';
import FloatingShapes from '@/components/FloatingShapes';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SocialSidebar from '@/components/SocialSidebar';

const Index = () => {
  useEffect(() => {
    // Add dark class to html for dark theme
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <FloatingShapes />
      <Navigation />
      <SocialSidebar />
      
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
