import FlowArt, { FlowSection } from './story-scroll';
import { projects } from '@/lib/projects-data';
import Link from 'next/link';

const themes = [
  { bg: '#000000', color: '#ffffff', border: 'border-white/10', buttonBg: 'bg-white text-black hover:bg-white/80 border border-white/10' },
  { bg: '#0A0A0A', color: '#ffffff', border: 'border-white/10', buttonBg: 'bg-[#111111] text-white hover:bg-[#222222] border border-white/10' },
  { bg: '#111111', color: '#ffffff', border: 'border-white/10', buttonBg: 'bg-black text-white hover:bg-[#222] border border-white/10' },
  { bg: '#1A1A1A', color: '#ffffff', border: 'border-white/10', buttonBg: 'bg-white text-black hover:bg-white/80 border border-white/10' },
  { bg: '#222222', color: '#ffffff', border: 'border-white/10', buttonBg: 'bg-black text-white hover:bg-[#111] border border-white/10' },
];

export default function FlowArtDefaultDemo() {
  return (
    <FlowArt aria-label="Projects Flow Art">
      {projects.map((project, index) => {
        const theme = themes[index % themes.length];
        
        
        
        return (
          <FlowSection 
            key={project.id} 
            aria-label={project.title} 
            style={{ backgroundColor: theme.bg, color: theme.color }}
          >

            
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] uppercase tracking-tight break-words mt-2 max-w-[25ch] md:max-w-[35ch]">
                {project.title}
              </h2>
            </div>
            
            <hr className={`my-4 lg:my-[2vh] border-none border-t ${theme.border}`} />
            
            <div className="my-auto max-w-full md:max-w-[85ch] space-y-4">
              <p className="text-xl md:text-2xl font-semibold opacity-90">
                {project.tagline}
              </p>
              <p className="text-base md:text-lg leading-relaxed opacity-75">
                {project.description}
              </p>
            </div>
            
            <hr className={`my-4 lg:my-[2vh] border-none border-t ${theme.border}`} />
            
            
            <div className="flex flex-wrap gap-4 md:gap-[2vw]">
              {project.features.map((feature, idx) => (
                <div key={idx} className="min-w-[180px] flex-1">
                  <p className="mb-2 text-sm font-bold uppercase tracking-wider">{feature.title}</p>
                  <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75 pr-4">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>


          </FlowSection>
        );
      })}
    </FlowArt>
  );
}
