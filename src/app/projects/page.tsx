import FlowArtDefaultDemo from "@/components/ui/story-scroll-demo";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function ProjectLandingPage() {
  return (
    <>
      <div className="fixed top-8 left-6 md:left-12 z-50 mix-blend-difference">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium"
        >
          <MoveLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>
      <FlowArtDefaultDemo />
    </>
  );
}
