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

  const distortStyle = isHovered
    ? {
        filter: `url(#liquid-filter)`,
        transform: `translate(${(mousePos.x - 50) * 0.1}px, ${(mousePos.y - 50) * 0.1}px)`,
      }
    : {};

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden px-4 md:px-8"
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
        className="relative transition-all duration-100 ease-out"
        style={distortStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-hover
      >
        <h1 className="font-display font-black text-[12vw] md:text-[15vw] leading-[0.85] tracking-tighter text-foreground uppercase">
          <span className="block glitch-text" data-text="CODE">
            CODE
          </span>
          <span className="block text-stroke">
            / ART /
          </span>
          <span className="block relative">
            CHAOS
            <span className="absolute -right-4 top-0 text-accent text-[3vw] font-mono">
              *
            </span>
          </span>
        </h1>
      </div>

      {/* Subtitle */}
      <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <p className="font-mono text-sm md:text-base text-muted-foreground max-w-md">
          <span className="text-accent">&gt;</span> Creative developer crafting
          digital experiences at the intersection of code and chaos.
        </p>

        <div className="flex items-center gap-4">
          <span className="w-12 h-[1px] bg-accent" />
          <span className="font-mono text-xs text-muted-foreground">
            SCROLL TO EXPLORE
          </span>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-8 right-8 font-mono text-xs text-muted-foreground hidden md:block">
        <div>LAT: 40.7128°</div>
        <div>LON: -74.0060°</div>
      </div>

      <div className="absolute bottom-8 left-8 font-mono text-xs text-accent">
        © 2024
      </div>
    </section>
  );
};

export default HeroSection;
