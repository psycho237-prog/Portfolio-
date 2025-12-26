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
    title: 'Neural Network Visualizer',
    description: 'Interactive visualization of neural network layers and activations. Watch how data flows through a trained model in real-time.',
    category: 'AI/ML',
    tech: ['Python', 'TensorFlow', 'D3.js'],
    link: 'https://github.com/psycho237-prog',
    isInteractive: true
  },
  {
    title: 'Terminal Portfolio',
    description: 'A command-line inspired portfolio interface. Type commands to navigate and explore projects.',
    category: 'UI/UX',
    tech: ['JavaScript', 'CSS', 'Terminal.js'],
    link: 'https://github.com/psycho237-prog',
    isInteractive: true
  },
  {
    title: 'Packet Sniffer',
    description: 'Network packet analyzer for educational purposes. Captures and displays network traffic with protocol breakdown.',
    category: 'Security',
    tech: ['Python', 'Scapy', 'Wireshark'],
    link: 'https://github.com/psycho237-prog'
  },
  {
    title: 'Voice Command CLI',
    description: 'Control your terminal with voice commands. Uses speech recognition to execute bash commands.',
    category: 'Automation',
    tech: ['Python', 'SpeechRecognition', 'Bash'],
    link: 'https://github.com/psycho237-prog'
  },
  {
    title: 'CSS Art Generator',
    description: 'Procedurally generated CSS art pieces using mathematical patterns and gradients.',
    category: 'Creative',
    tech: ['CSS', 'JavaScript', 'Canvas'],
    link: 'https://github.com/psycho237-prog',
    isInteractive: true
  },
  {
    title: 'Password Strength Analyzer',
    description: 'Real-time password strength checker with entropy calculation and crack time estimation.',
    category: 'Security',
    tech: ['JavaScript', 'Crypto', 'Zxcvbn'],
    link: 'https://github.com/psycho237-prog',
    isInteractive: true
  },
  {
    title: 'Markdown Note CLI',
    description: 'Fast terminal-based note-taking with markdown support and fuzzy search.',
    category: 'Productivity',
    tech: ['Go', 'Bubble Tea', 'SQLite'],
    link: 'https://github.com/psycho237-prog'
  },
  {
    title: 'API Rate Limiter',
    description: 'Distributed rate limiting service with Redis backend. Implements token bucket algorithm.',
    category: 'Backend',
    tech: ['Python', 'Redis', 'FastAPI'],
    link: 'https://github.com/psycho237-prog'
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
