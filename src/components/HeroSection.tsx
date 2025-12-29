import { useState, useRef, useEffect } from 'react';

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Mouse hareketine göre metni yamultan efekt
  const distortStyle = isHovered
    ? {
        filter: `url(#liquid-filter)`,
        transform: `translate(${(mousePos.x - 50) * 0.05}px, ${(mousePos.y - 50) * 0.05}px)`, // Hızını biraz azalttım, daha tok dursun
      }
    : {};

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden px-4 md:px-8 bg-background"
    >
      {/* SVG Filter for liquid effect */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="liquid-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015"
              numOctaves="3"
              result="noise"
              seed="1"
            >
              <animate
                attributeName="baseFrequency"
                dur="3s"
                values="0.015;0.025;0.015"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="30"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Main title */}
      <div
        className="relative transition-all duration-100 ease-out z-10"
        style={distortStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-hover
      >
        <h1 className="font-display font-black text-[11vw] md:text-[13vw] leading-[0.85] tracking-tighter text-foreground uppercase select-none">
          {/* Kelime 1: SYSTEMS */}
          <span className="block glitch-text relative" data-text="SYSTEMS">
            SYSTEMS
          </span>
          
          {/* Kelime 2: INTEL (İstihbarat vurgusu) */}
          <span className="block text-stroke text-transparent hover:text-accent transition-colors duration-300">
            / INTEL /
          </span>
          
          {/* Kelime 3: CHAOS (Simülasyon vurgusu) */}
          <span className="block relative">
            CHAOS
            <span className="absolute -right-4 top-0 text-accent text-[3vw] font-mono animate-pulse">
              *
            </span>
          </span>
        </h1>
      </div>

      {/* Subtitle & Status */}
      <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8 z-10">
        <div className="max-w-md space-y-4">
          <p className="font-mono text-sm md:text-base text-muted-foreground">
            <span className="text-accent mr-2">::</span>
            Architecting <span className="text-foreground font-bold">AI Forensics</span> & <span className="text-foreground font-bold">Biological Simulations</span>.
          </p>
          <p className="font-mono text-xs text-muted-foreground/60">
            "Landing Page lies, Payload doesn't."
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="w-12 h-[1px] bg-accent animate-pulse" />
          <span className="font-mono text-xs text-muted-foreground">
            INITIALIZING...
          </span>
        </div>
      </div>

      {/* Decorative Technical Data */}
      <div className="absolute top-8 right-8 font-mono text-[10px] md:text-xs text-muted-foreground/40 hidden md:block text-right">
        <div>SYS.STATUS: ONLINE</div>
        <div>LAT: 37.8716° N</div> {/* Konya Koordinatları ;) */}
        <div>LON: 32.4846° E</div>
        <div>RAM: OPTIMIZED</div>
      </div>

      <div className="absolute bottom-8 left-8 font-mono text-xs text-accent/50">
        2800MHZ // EST. 2025
      </div>
      
      {/* Arka plan için hafif bir grid (Opsiyonel ama havayı değiştirir) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
