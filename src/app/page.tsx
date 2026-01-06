import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/hero';
import { AboutSection } from '@/components/about';
import { FeaturesGrid } from '@/components/features';
import { WhyAegis } from '@/components/why';
import { PhilosophySection } from '@/components/philosophy';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500/25 selection:text-white overflow-x-hidden">
      {/* Background Gradients - Fintech Blue/Gold */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Top Left Glow - Deep Blue */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#0A2540]/20 rounded-full blur-[120px] animate-glow-pulse" />

        {/* Bottom Right Glow - Subtle Gold */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '1s' }} />

        {/* Center Accent - Navy Blue */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#1E3A5F]/10 rounded-full blur-[150px]" />

        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-[0.015]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <FeaturesGrid />
        <WhyAegis />
        <PhilosophySection />
        <Footer />
      </div>
    </div>
  );
}
