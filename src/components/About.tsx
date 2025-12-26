import { Terminal, Shield, Brain, Code } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Shield, label: 'Cybersecurity', desc: 'Penetration testing & security research' },
    { icon: Brain, label: 'AI/ML', desc: 'Building intelligent systems & automation' },
    { icon: Code, label: 'Development', desc: 'Python, JavaScript, Flask & more' },
    { icon: Terminal, label: 'Linux', desc: 'System administration & scripting' },
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text content */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-display">
              About Me
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a <span className="text-foreground font-medium">cybersecurity enthusiast</span> and 
                tech-savvy student at the <span className="text-foreground font-medium">University of Yaoundé 1</span>, 
                passionate about penetration testing, AI development, and building innovative solutions.
              </p>
              <p>
                My work spans from creating intelligent desktop assistants with 3D avatars to 
                developing real-time AI systems for question detection. I believe in pushing 
                the boundaries of what's possible with technology.
              </p>
              <p>
                When I'm not coding, you can find me exploring new security vulnerabilities, 
                contributing to open-source projects, or sharing knowledge with the community.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="https://about.me/onanagregoirelegrand"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary hoverable"
              >
                MORE ABOUT ME
              </a>
            </div>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.label}
                className="group p-8 bg-background border border-border rounded-lg transition-all duration-300 hover:border-primary/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <skill.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold font-display text-lg mb-2">{skill.label}</h3>
                <p className="text-sm text-muted-foreground">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;