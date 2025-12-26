import { ExternalLink, Code, Zap, Eye } from 'lucide-react';

interface ExperimentCardProps {
  title: string;
  description: string;
  category: string;
  tech: string[];
  link?: string;
  index: number;
  isInteractive?: boolean;
}

const ExperimentCard = ({ title, description, category, tech, link, index, isInteractive }: ExperimentCardProps) => {
  return (
    <div 
      className="group relative bg-card border border-border p-6 transition-all duration-500 hover:border-primary/50 hover:glow-box animate-slide-up overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Category badge */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        {isInteractive && (
          <span className="flex items-center gap-1 px-2 py-1 text-xs font-mono bg-primary/20 text-primary border border-primary/30">
            <Zap className="w-3 h-3" />
            LIVE
          </span>
        )}
        <span className="px-2 py-1 text-xs font-mono bg-secondary text-muted-foreground">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-4">
        <div className="flex items-center gap-3 mb-3">
          <Code className="w-5 h-5 text-primary" />
          <h3 className="text-xl font-bold font-display group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
        
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span 
              key={t} 
              className="px-2 py-0.5 text-xs font-mono border border-border text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Link */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hoverable inline-flex items-center gap-2 text-xs font-mono text-primary link-hover"
          >
            <Eye className="w-3 h-3" />
            VIEW EXPERIMENT
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>

      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default ExperimentCard;
