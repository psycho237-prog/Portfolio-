const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Grégoire Legrand. All rights reserved.
        </p>
        <p className="text-muted-foreground text-sm">
          Designed & Built with <span className="text-primary">♥</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;