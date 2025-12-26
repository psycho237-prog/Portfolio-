import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Emma-AI',
    description: 'A smart desktop assistant for Linux featuring a futuristic 3D avatar GUI. Powered by ChatGPT for natural conversations, voice commands, and intelligent task automation.',
    tech: ['Python', 'ChatGPT', 'Speech Recognition', 'Linux', '3D Avatar'],
    github: 'https://github.com/psycho237-prog/Emma-ai',
    stars: 12,
    forks: 5
  },
  {
    title: 'Quizbox-AI',
    description: 'Real-time question detection system using IP cameras with advanced OCR. Leverages Mistral 7B LLM for intelligent answer generation and processing.',
    tech: ['Python', 'OCR', 'Mistral 7B', 'Computer Vision', 'AI'],
    github: 'https://github.com/psycho237-prog/Quizbox-AI',
    stars: 8,
    forks: 3
  },
  {
    title: 'Psychobot',
    description: 'An intelligent automation bot built with JavaScript. Features high engagement with extensive community contributions and a modular architecture.',
    tech: ['JavaScript', 'Automation', 'Bot Framework'],
    github: 'https://github.com/psycho237-prog/Psychobot',
    stars: 34,
    forks: 258
  },
  {
    title: 'LoginPhish',
    description: 'An educational Flask-based project demonstrating user input logging techniques. Created for cybersecurity awareness and penetration testing training.',
    tech: ['Python', 'Flask', 'Security', 'Education'],
    github: 'https://github.com/psycho237-prog/loginphish',
    stars: 5,
    forks: 2
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display">
            Case Studies
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Selected projects showcasing my work in AI, cybersecurity, and automation
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;