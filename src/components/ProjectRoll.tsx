import { useState } from 'react';

interface Project {
  id: string;
  name: string;
  year: string;
  category: string;
  description: string;
  image?: string;
  codeSnippet?: string;
}

const projects: Project[] = [
  {
    id: 'wings-winds',
    name: 'Wings & Winds',
    year: '2024',
    category: 'GAME DEV',
    description: 'An atmospheric flight simulation exploring procedural weather systems',
    image: 'https://images.unsplash.com/photo-1534996858221-380b92700493?w=1200&h=800&fit=crop',
  },
  {
    id: 'rl-cell',
    name: 'RL-Cell',
    year: '2024',
    category: 'AI / ML',
    description: 'Reinforcement learning cellular automata experiments',
    codeSnippet: `class RLCell:
    def __init__(self, state):
        self.state = state
        self.q_table = {}
    
    def update(self, neighbors):
        reward = self.calculate_reward()
        self.learn(reward)
        return self.next_state()`,
  },
  {
    id: 'void-engine',
    name: 'Void Engine',
    year: '2023',
    category: 'GRAPHICS',
    description: 'Custom WebGL rendering engine with real-time ray marching',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=800&fit=crop',
  },
  {
    id: 'neural-drift',
    name: 'Neural Drift',
    year: '2023',
    category: 'GENERATIVE',
    description: 'Audio-reactive visual system powered by neural networks',
    codeSnippet: `fn drift(input: &AudioBuffer) -> Frame {
    let spectrum = fft(input);
    let activation = network.forward(spectrum);
    render_particles(activation)
}`,
  },
];

const ProjectRoll = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [flashProject, setFlashProject] = useState<string | null>(null);

  const handleHover = (projectId: string) => {
    setFlashProject(projectId);
    setTimeout(() => setFlashProject(null), 150);
    setHoveredProject(projectId);
  };

  const currentProject = projects.find((p) => p.id === hoveredProject);

  return (
    <section className="min-h-screen py-24 px-4 md:px-8 relative">
      {/* Section header */}
      <div className="mb-16 flex items-center gap-4">
        <span className="text-accent font-mono text-sm">01</span>
        <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wider">
          Selected Works
        </h2>
        <span className="flex-1 h-[1px] bg-border" />
      </div>

      {/* Background flash effect */}
      {flashProject && currentProject?.image && (
        <div
          className="fixed inset-0 z-0 flash-overlay pointer-events-none"
          style={{
            backgroundImage: `url(${currentProject.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3,
          }}
        />
      )}

      {/* Code snippet overlay */}
      {hoveredProject && currentProject?.codeSnippet && (
        <div className="fixed top-1/2 right-8 -translate-y-1/2 w-[400px] pointer-events-none z-10 hidden lg:block">
          <div className="bg-card border border-border p-6 font-mono text-sm terminal-bg scanline">
            <div className="flex items-center gap-2 mb-4 text-muted-foreground">
              <span className="w-3 h-3 rounded-full bg-destructive" />
              <span className="w-3 h-3 rounded-full bg-accent/50" />
              <span className="w-3 h-3 rounded-full bg-accent" />
              <span className="ml-2">{currentProject.name}.py</span>
            </div>
            <pre className="text-accent whitespace-pre-wrap leading-relaxed">
              {currentProject.codeSnippet}
            </pre>
          </div>
        </div>
      )}

      {/* Image preview overlay */}
      {hoveredProject && currentProject?.image && !currentProject?.codeSnippet && (
        <div className="fixed top-1/2 right-8 -translate-y-1/2 w-[400px] pointer-events-none z-10 hidden lg:block">
          <div className="border border-accent overflow-hidden">
            <img
              src={currentProject.image}
              alt={currentProject.name}
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      )}

      {/* Project list */}
      <div className="relative z-20">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group border-t border-border py-8 md:py-12 transition-colors duration-300 hover:bg-secondary/30"
            onMouseEnter={() => handleHover(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            data-hover
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              {/* Index */}
              <span className="font-mono text-xs text-muted-foreground w-8">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Project name */}
              <h3 className="font-display font-black text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter flex-1 transition-all duration-300 group-hover:text-accent group-hover:translate-x-4">
                {project.name}
              </h3>

              {/* Meta */}
              <div className="flex items-center gap-6 font-mono text-xs text-muted-foreground">
                <span className="px-2 py-1 border border-border">
                  {project.category}
                </span>
                <span>{project.year}</span>
              </div>
            </div>

            {/* Description - visible on hover */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                hoveredProject === project.id
                  ? 'max-h-20 opacity-100 mt-4'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <p className="font-mono text-sm text-muted-foreground pl-8 md:pl-16 max-w-xl">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectRoll;
