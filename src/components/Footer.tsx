const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-4 md:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Large text */}
        <div className="mb-16">
          <h2 className="font-display font-black text-[8vw] md:text-[6vw] uppercase tracking-tighter leading-none text-stroke-accent">
            LET'S CREATE
          </h2>
          <h2 className="font-display font-black text-[8vw] md:text-[6vw] uppercase tracking-tighter leading-none">
            SOMETHING WILD
          </h2>
        </div>

        {/* Links and info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact */}
          <div>
            <h3 className="font-mono text-xs text-muted-foreground mb-4 uppercase">
              Contact
            </h3>
            <a
              href="mailto:hello@example.dev"
              className="font-display text-xl hover:text-accent transition-colors block mb-2"
              data-hover
            >
              hello@example.dev
            </a>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-mono text-xs text-muted-foreground mb-4 uppercase">
              Social
            </h3>
            <div className="flex flex-col gap-2">
              {['GitHub', 'Twitter/X', 'LinkedIn', 'Are.na'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-mono text-sm hover:text-accent transition-colors inline-flex items-center gap-2 group"
                  data-hover
                >
                  <span className="w-0 group-hover:w-4 h-[1px] bg-accent transition-all duration-300" />
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Status */}
          <div>
            <h3 className="font-mono text-xs text-muted-foreground mb-4 uppercase">
              Status
            </h3>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              <span className="font-mono text-sm">Available for projects</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-mono text-xs text-muted-foreground">
            © {currentYear} — All rights reserved
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            Built with chaos & caffeine
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
