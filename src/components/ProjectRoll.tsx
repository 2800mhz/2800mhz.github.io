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
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&h=800&fit=crop', // Sinematik/Veri görseli
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
