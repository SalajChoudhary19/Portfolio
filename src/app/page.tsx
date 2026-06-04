import { Hero } from "@/components/ui/animated-hero";
import { PortfolioHeroBackground } from "@/components/backgrounds/PortfolioHeroBackground";
import { ProjectTile } from "@/components/projects/ProjectTile";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <PortfolioHeroBackground>
        <Hero />
      </PortfolioHeroBackground>
    </main>
  );
}
