import { useState } from 'react';

interface LabItem {
  name: string;
  type: 'dir' | 'file' | 'link';
  description: string;
  url?: string;
  date: string;
  size?: string;
}

const labItems: LabItem[] = [
  {
    name: 'deltav.py',
    type: 'file',
    description: 'Orbital mechanics simulation toolkit',
    url: 'https://github.com',
    date: '2024-03-15',
    size: '42.3 KB',
  },
  {
    name: 'tradebot/',
    type: 'dir',
    description: 'Algorithmic trading experiments',
    url: 'https://github.com',
    date: '2024-02-28',
  },
  {
    name: 'shader-lab/',
    type: 'dir',
    description: 'GLSL fragment shader collection',
    url: 'https://github.com',
    date: '2024-01-10',
  },
  {
    name: 'noise-gen.rs',
    type: 'file',
    description: 'Procedural noise generation in Rust',
    url: 'https://github.com',
    date: '2023-12-05',
    size: '18.7 KB',
  },
  {
    name: 'automata/',
    type: 'dir',
    description: 'Cellular automata visualizations',
    url: 'https://github.com',
    date: '2023-11-20',
  },
  {
    name: 'README.md',
    type: 'link',
    description: 'Documentation and notes',
    date: '2024-03-20',
    size: '4.2 KB',
  },
];

const LabSection = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const getIcon = (type: string) => {
    switch (type) {
      case 'dir':
        return '📁';
      case 'file':
        return '📄';
      case 'link':
        return '🔗';
      default:
        return '•';
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'dir':
        return 'text-accent';
      case 'file':
        return 'text-foreground';
      case 'link':
        return 'text-muted-foreground';
      default:
        return 'text-foreground';
    }
  };

  return (
    <section className="min-h-screen py-24 px-4 md:px-8">
      {/* Section header */}
      <div className="mb-16 flex items-center gap-4">
        <span className="text-accent font-mono text-sm">02</span>
        <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wider">
          The Lab
        </h2>
        <span className="flex-1 h-[1px] bg-border" />
      </div>

      {/* Terminal window */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-card border border-border">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
            <span className="w-3 h-3 rounded-full bg-destructive" />
            <span className="w-3 h-3 rounded-full bg-accent/50" />
            <span className="w-3 h-3 rounded-full bg-accent" />
            <span className="ml-4 font-mono text-xs text-muted-foreground">
              ~/experiments
            </span>
          </div>

          {/* Terminal content */}
          <div className="p-6 font-mono text-sm terminal-bg scanline relative">
            {/* Command line */}
            <div className="mb-6 text-muted-foreground">
              <span className="text-accent">$</span> ls -la --color
            </div>

            {/* File listing header */}
            <div className="grid grid-cols-[auto_1fr_auto_auto] gap-x-8 gap-y-2 text-xs text-muted-foreground mb-4 pb-2 border-b border-border">
              <span>TYPE</span>
              <span>NAME</span>
              <span className="hidden md:block">SIZE</span>
              <span className="hidden md:block">DATE</span>
            </div>

            {/* File listing */}
            <div className="space-y-1">
              {labItems.map((item) => (
                <div
                  key={item.name}
                  className={`grid grid-cols-[auto_1fr_auto_auto] gap-x-8 gap-y-2 py-2 transition-colors duration-200 hover:bg-accent/10 cursor-pointer group ${
                    selectedItem === item.name ? 'bg-accent/20' : ''
                  }`}
                  onClick={() =>
                    setSelectedItem(selectedItem === item.name ? null : item.name)
                  }
                  data-hover
                >
                  <span className="text-lg">{getIcon(item.type)}</span>
                  <span
                    className={`${getColor(item.type)} group-hover:text-accent transition-colors`}
                  >
                    {item.name}
                  </span>
                  <span className="text-muted-foreground hidden md:block">
                    {item.size || '--'}
                  </span>
                  <span className="text-muted-foreground hidden md:block">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>

            {/* Selected item details */}
            {selectedItem && (
              <div className="mt-6 pt-4 border-t border-border">
                <div className="text-muted-foreground mb-2">
                  <span className="text-accent">$</span> cat {selectedItem} | head
                </div>
                <p className="text-foreground pl-4 border-l-2 border-accent">
                  {labItems.find((i) => i.name === selectedItem)?.description}
                </p>
                {labItems.find((i) => i.name === selectedItem)?.url && (
                  <a
                    href={labItems.find((i) => i.name === selectedItem)?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-accent hover:underline"
                    data-hover
                  >
                    <span>[</span>
                    <span>VIEW ON GITHUB</span>
                    <span>]</span>
                  </a>
                )}
              </div>
            )}

            {/* Cursor */}
            <div className="mt-6">
              <span className="text-accent">$</span>
              <span className="cursor-blink ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabSection;
