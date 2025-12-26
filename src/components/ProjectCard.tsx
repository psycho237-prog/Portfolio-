import { ExternalLink, Star, GitFork } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  stars?: number;
  forks?: number;
  index: number;
}

const ProjectCard = ({ title, description, tech, github, stars, forks, index }: ProjectCardProps) => {
  return (
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="group hoverable block"
    >
      <article 
        className="p-8 md:p-10 bg-card border border-border rounded-lg transition-all duration-500 hover:border-primary/30 hover:bg-card/80"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex-1">
            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold font-display mb-4 group-hover:text-primary transition-colors">
              {title}
            </h3>
            
            {/* Description */}
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-2xl">
              {description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-3">
              {tech.map((t) => (
                <span 
                  key={t} 
                  className="px-4 py-2 bg-secondary text-sm text-muted-foreground rounded-full font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Stats & Link */}
          <div className="flex md:flex-col items-center gap-6 text-muted-foreground">
            {stars !== undefined && (
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span className="text-sm font-mono">{stars}</span>
              </div>
            )}
            {forks !== undefined && (
              <div className="flex items-center gap-2">
                <GitFork className="w-4 h-4" />
                <span className="text-sm font-mono">{forks}</span>
              </div>
            )}
            <ExternalLink className="w-5 h-5 group-hover:text-primary transition-colors" />
          </div>
        </div>
      </article>
    </a>
  );
};

export default ProjectCard;