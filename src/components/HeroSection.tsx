import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 md:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full z-10">
        <div className="mb-8 overflow-hidden">
          <span className="inline-block text-accent font-mono text-sm tracking-widest animate-fade-in">
            // SYSTEM_ARCHITECT :: 2800MHZ
          </span>
        </div>

        <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter mb-8">
          <span className="block overflow-hidden">
            <span className="block animate-slide-up" style={{ animationDelay: '0.1s' }}>
              BUILDING
            </span>
          </span>
          <span className="block overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
            <span className="block animate-slide-up" style={{ animationDelay: '0.2s' }}>
              SYSTEMS &
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="block animate-slide-up text-accent" style={{ animationDelay: '0.3s' }}>
              SIMULATIONS
            </span>
          </span>
        </h1>

        <div className="max-w-2xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-12">
            I bridge the gap between <span className="text-foreground font-bold">Enterprise Architecture</span> and <span className="text-foreground font-bold">Scientific Simulation</span>. 
            Currently architecting AI forensics platforms and biological agents using Python, Rust & Modern Web Technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a 
              href="#projects" 
              className="group flex items-center gap-2 px-6 py-3 bg-foreground text-background font-mono text-sm hover:bg-foreground/90 transition-colors"
            >
              VIEW_OPERATIONS
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a 
              href="https://github.com/2800mhz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border text-foreground font-mono text-sm hover:bg-secondary/50 transition-colors"
            >
              GITHUB_PROFILE
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-4 md:left-8 animate-bounce hidden md:block">
        <span className="font-mono text-xs text-muted-foreground writing-vertical-rl rotate-180">
          SCROLL_TO_EXPLORE
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
