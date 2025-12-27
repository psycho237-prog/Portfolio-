import { useEffect } from 'react';
import { ArrowLeft, Beaker, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import CustomCursor from '@/components/CustomCursor';
import FloatingShapes from '@/components/FloatingShapes';
import ExperimentCard from '@/components/ExperimentCard';
import SocialSidebar from '@/components/SocialSidebar';
import Footer from '@/components/Footer';

const experiments = [
  {
    title: 'MERRY-XMAS',
    description: '3D Christmas tree implementation with interactive hand gesture controls via webcam. A festive experiment in real-time computer vision and 3D rendering.',
    category: 'AI/ML',
    tech: ['Python', 'Three.js', 'Computer Vision'],
    link: 'https://github.com/psycho237-prog/MERRY-XMAS',
    isInteractive: true
  },
  {
    title: 'dark_wxlf',
    description: 'Advanced bug bounty automation tool featuring passive OSINT, active reconnaissance, and automated vulnerability testing for XSS and SQLi.',
    category: 'Security',
    tech: ['Bash', 'Security', 'Automation'],
    link: 'https://github.com/psycho237-prog/dark_wxlf',
    isInteractive: false
  },
  {
    title: 'XyberShield',
    description: 'A comprehensive web platform dedicated to reporting cybersecurity incidents and providing community education on digital threats.',
    category: 'Security',
    tech: ['React', 'TypeScript', 'Node.js'],
    link: 'https://github.com/psycho237-prog/XyberShield',
    isInteractive: true
  },
  {
    title: 'CARE-FOR-HER',
    description: 'Digital platform for the detection and prevention of online gender-based violence (GBV) using real-time monitoring and support resources.',
    category: 'Security',
    tech: ['JavaScript', 'VBG Prevention', 'Monitoring'],
    link: 'https://github.com/psycho237-prog/CARE-FOR-HER',
    isInteractive: true
  },
  {
    title: 'OVL-MD-V2',
    description: 'A highly performant and multifunctional multi-device WhatsApp bot built for automation and interactive messaging.',
    category: 'Automation',
    tech: ['Node.js', 'WhatsApp API', 'Automation'],
    link: 'https://github.com/psycho237-prog/OVL-MD-V2',
    isInteractive: true
  },
  {
    title: 'Get_forest_pulse',
    description: 'Environmental monitoring tool that visualizes deforestation and fire dynamics using satellite data, including automated timelapse generation.',
    category: 'Automation',
    tech: ['Python', 'Satellite Data', 'Data Science'],
    link: 'https://github.com/psycho237-prog/Get_forest_pulse',
    isInteractive: false
  },
  {
    title: 'Keylogger',
    description: 'Educational security implementation of a keylogger to demonstrate system monitoring and data capture techniques.',
    category: 'Security',
    tech: ['Python', 'Security', 'Systems'],
    link: 'https://github.com/psycho237-prog/keylogger',
    isInteractive: false
  },
  {
    title: 'GenKit RAG',
    description: 'Implementation of Retrieval-Augmented Generation (RAG) using Firebase GenKit for building intelligent AI-driven applications.',
    category: 'AI/ML',
    tech: ['TypeScript', 'Firebase', 'GenKit'],
    link: 'https://github.com/psycho237-prog/codelab-ai-genkit-rag',
    isInteractive: false
  }
];

const categories = ['All', 'AI/ML', 'Security', 'UI/UX', 'Automation', 'Creative', 'Productivity', 'Backend'];

const Experiments = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <FloatingShapes />
      <SocialSidebar />
      
      <main className="pt-24 pb-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Back link */}
          <Link 
            to="/" 
            className="hoverable inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-12 link-hover"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO HOME
          </Link>

          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <Beaker className="w-8 h-8 text-primary" />
              <span className="text-primary font-mono text-sm tracking-widest">// EXPERIMENTS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
              Code <span className="text-gradient">Playground</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              A collection of smaller projects, experiments, and code snippets. 
              These are explorations in various technologies - some practical, some just for fun.
            </p>
            <div className="w-20 h-1 bg-primary mt-8" />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat, index) => (
              <button
                key={cat}
                className={`hoverable px-4 py-2 text-xs font-mono tracking-wider border transition-all duration-300 ${
                  index === 0 
                    ? 'border-primary bg-primary text-primary-foreground' 
                    : 'border-border text-muted-foreground hover:border-primary hover:text-primary'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-card border border-border p-4 text-center">
              <span className="text-3xl font-bold text-primary font-mono">{experiments.length}</span>
              <p className="text-xs text-muted-foreground font-mono mt-1">EXPERIMENTS</p>
            </div>
            <div className="bg-card border border-border p-4 text-center">
              <span className="text-3xl font-bold text-primary font-mono">
                {experiments.filter(e => e.isInteractive).length}
              </span>
              <p className="text-xs text-muted-foreground font-mono mt-1">INTERACTIVE</p>
            </div>
            <div className="bg-card border border-border p-4 text-center">
              <span className="text-3xl font-bold text-primary font-mono">5+</span>
              <p className="text-xs text-muted-foreground font-mono mt-1">LANGUAGES</p>
            </div>
            <div className="bg-card border border-border p-4 text-center">
              <span className="text-3xl font-bold text-primary font-mono">∞</span>
              <p className="text-xs text-muted-foreground font-mono mt-1">CURIOSITY</p>
            </div>
          </div>

          {/* Experiments grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {experiments.map((experiment, index) => (
              <ExperimentCard
                key={experiment.title}
                {...experiment}
                index={index}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 text-muted-foreground mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm">MORE COMING SOON</span>
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <p className="text-muted-foreground max-w-md mx-auto">
              Always experimenting with new ideas. Follow me on GitHub to see what's next.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Experiments;
