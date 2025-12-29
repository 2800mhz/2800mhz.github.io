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
    id: 'imperial-archive',
    name: 'Imperial AI Archive',
    year: '2025',
    category: 'AI FORENSICS / INTEL',
    description: '"Landing Page lies, Payload doesn\'t." An intelligence platform auditing AI startups by analyzing network traffic to reveal their true underlying models.',
    image: 'https://images.unsplash.com/photo-1558494949-efc535b5c47c?w=1200&h=800&fit=crop',
    codeSnippet: `class WrapperDetector:
    def analyze_payload(self, target_url):
        # "Landing Page lies, Payload doesn't."
        traffic = self.interceptor.capture(target_url)
        
        if "openai.com/v1/chat" in traffic.destination:
            return {
                "verdict": "WRAPPER_DETECTED",
                "real_source": "gpt-4-turbo",
                "markup_rate": "2500%"
            }`,
  },
  {
    id: 'aicinedb',
    name: 'AiCineDB Platform',
    year: '2024',
    category: 'FULL STACK / DATA',
    description: 'High-performance film analysis infrastructure built with FastAPI and Supabase. Features complex Pydantic validation pipelines and async data processing.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&h=800&fit=crop',
    codeSnippet: `class FilmSchema(BaseModel):
    title: str
    metadata: Dict[str, Any]
    
    @validator('metadata')
    def validate_cinematography(cls, v):
        # Complex data validation pipeline
        if 'aspect_ratio' not in v:
            raise ValueError("Missing technical specs")
        return v

@app.post("/v1/analyze", response_model=AnalysisResult)
async def ingest_film(film: FilmSchema, db: AsyncSession):
    # Async database transaction with Supabase
    return await service.process_metadata(film)`,
  },
  {
    id: 'rl-cell',
    name: 'Bio-RL Sim',
    year: '2024',
    category: 'AI / RESEARCH',
    description: 'Biological cell survival simulation using Multi-Agent Reinforcement Learning (PPO) in a custom Gym environment.',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1200&h=800&fit=crop',
    codeSnippet: `class NucleusAI(gym.Env):
    def step(self, action):
        # 0: DNA Repair, 1: Gene Expr
        if action[0] == 1:
            self.dna_integrity += 10
        
        # Survival Reward Function
        reward = (self.dna_integrity + self.rna_synthesis)
        reward -= (self.stress_level * 5)
        
        return obs, reward, done, {}`,
  },
  {
    id: 'delta-v',
    name: 'Orbital Mechanics',
    year: '2024',
    category: 'PHYSICS / SIM',
    description: 'Rocket stage separation and delta-v calculator with atmospheric drag modeling.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop',
    codeSnippet: `def simulate_rocket(stages, dt=0.1):
    while altitude >= 0:
        thrust = stage.thrust
        
        # Tsiolkovsky Rocket Equation
        accel = (thrust - drag) / mass - g0
        delta_v += (thrust/mass - g0) * dt
        
        velocity += accel * dt
        altitude += velocity * dt`,
  },
];

const ProjectRoll = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const handleHover = (projectId: string) => {
    setHoveredProject(projectId);
  };

  const currentProject = projects.find((p) => p.id === hoveredProject);

  return (
    <section className="min-h-screen py-24 px-4 md:px-8 relative">
      <div className="mb-16 flex items-center gap-4">
        <span className="text-accent font-mono text-sm">01</span>
        <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wider">
          Selected Works
        </h2>
        <span className="flex-1 h-[1px] bg-border" />
      </div>

      {hoveredProject && currentProject?.image && (
        <div
          className="fixed inset-0 z-0 flash-overlay pointer-events-none transition-opacity duration-500"
          style={{
            backgroundImage: `url(${currentProject.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3,
          }}
        />
      )}

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
              <span className="font-mono text-xs text-muted-foreground w-8">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display font-black text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter flex-1 transition-all duration-300 group-hover:text-accent group-hover:translate-x-4">
                {project.name}
              </h3>
              <div className="flex items-center gap-6 font-mono text-xs text-muted-foreground">
                <span className="px-2 py-1 border border-border">
                  {project.category}
                </span>
                <span>{project.year}</span>
              </div>
            </div>
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
