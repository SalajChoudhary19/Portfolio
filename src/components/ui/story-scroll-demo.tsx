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
        
        // Split the title roughly by words or spaces to stack them creatively like the demo
        const titleWords = project.title.split(' ');
        
        return (
          <FlowSection 
            key={project.id} 
            aria-label={project.title} 
            style={{ backgroundColor: theme.bg, color: theme.color }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em]">
              {project.title}
            </p>
            <hr className={`my-[2vw] border-none border-t ${theme.border}`} />
            
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] uppercase tracking-tight break-words mt-4">
                {titleWords.map((word, i) => (
                  <span key={i}>
                    {word}
                    {i < titleWords.length - 1 && <br />}
                  </span>
                ))}
              </h2>
            </div>
            
            <hr className={`my-[2vw] border-none border-t ${theme.border}`} />
            
            <div className="mt-auto max-w-[65ch] space-y-4">
              <p className="text-xl md:text-2xl font-semibold opacity-90">
                {project.tagline}
              </p>
              <p className="text-base md:text-lg leading-relaxed opacity-75">
                {project.description}
              </p>
            </div>
            
            <hr className={`my-[2vw] border-none border-t ${theme.border}`} />
            
            {/* Technologies Grid representing the 3-column stats layout in demo */}
            <div className="flex flex-wrap gap-[3vw]">
              {project.features.map((feature, idx) => (
                <div key={idx} className="min-w-[180px] flex-1">
                  <p className="mb-2 text-sm font-bold uppercase tracking-wider">{feature.title}</p>
                  <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75 pr-4">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Action button removed as per user request */}
          </FlowSection>
        );
      })}
    </FlowArt>
  );
}
