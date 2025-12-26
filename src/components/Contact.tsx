import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-display">
          Get In Touch
        </h2>
        
        <p className="text-muted-foreground text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
          Have a project in mind? Looking for a collaborator on cybersecurity research or AI development? 
          I'm always open to discussing new opportunities.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-16">
          <div className="flex items-center gap-4 text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-lg">Yaoundé, Cameroon</span>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <Mail className="w-5 h-5 text-primary" />
            <span className="font-mono text-lg">psycho237.dev@gmail.com</span>
          </div>
        </div>

        <a
          href="mailto:psycho237.dev@gmail.com"
          className="btn-primary hoverable inline-flex"
        >
          <Send className="w-5 h-5" />
          SEND MESSAGE
        </a>
      </div>
    </section>
  );
};

export default Contact;