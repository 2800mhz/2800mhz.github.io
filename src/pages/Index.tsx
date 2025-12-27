import CustomCursor from '@/components/CustomCursor';
import HeroSection from '@/components/HeroSection';
import ProjectRoll from '@/components/ProjectRoll';
import LabSection from '@/components/LabSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      
      {/* Noise overlay for texture */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      <main>
        <HeroSection />
        <ProjectRoll />
        <LabSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
