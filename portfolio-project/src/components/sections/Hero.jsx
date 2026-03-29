import { ChevronDown, ArrowRight, Terminal, Cpu } from "lucide-react";
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { PERSONAL_INFO, STATS } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from '../backgrounds/RadialGradientBackground'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background bg-grain">
      <RadialGradientBackground variant='hero' />

      {/* Decorative Technical Grid Overlay */}
      <div className="absolute inset-0 bg-mesh opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column - Content */}
          <div className="lg:col-span-7 text-left order-2 lg:order-1">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-3 px-3 py-1.5 mb-6 md:mb-8 bg-primary/5 border border-primary/20 rounded-lg backdrop-blur-md">
                <Cpu className="w-3 h-3 text-primary animate-pulse" />
                <span className="text-[9px] md:text-xs font-mono font-bold text-primary uppercase tracking-[0.2em]">
                  {PERSONAL_INFO.title} // {PERSONAL_INFO.location}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-6 md:mb-8 heading-tight tracking-tighter">
                Crafting <span className="text-gradient-lime">Digital</span> <br className="hidden md:block" />
                Architecture.
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-base md:text-xl text-text-muted max-w-2xl mb-10 md:mb-12 leading-relaxed font-sans">
                {PERSONAL_INFO.tagline}. Specializing in high-performance MERN stack applications that bridge the gap between design and engineering.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6 mb-12 md:mb-16">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group relative px-8 py-4 bg-primary text-black font-bold rounded-xl overflow-hidden transition-all hover:scale-[1.02] active:scale-95 text-center"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Initialize Project <ArrowRight className="w-4 h-4" />
                  </span>
                </button>

                <button
                  onClick={() => scrollToSection('projects')}
                  className="flex items-center justify-center gap-2 py-4 sm:py-0 text-white/60 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest"
                >
                  <Terminal className="w-4 h-4 text-primary" />
                  View_Archive
                </button>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 border-t border-white/5">
                {STATS.map((stat, index) => (
                  <div key={index} className="group">
                    <div className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {stat.value}
                    </div>
                    <p className="text-[9px] uppercase tracking-tighter text-text-muted font-mono mt-1">
                      {stat.label.replace(' ', '_')}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Developer Image Container */}
          {/* order-1 on mobile moves the image above the text for a better flow */}
          <div className="lg:col-span-5 relative order-1 lg:order-2 px-4 md:px-0">
            <FadeIn delay={200}>
              <div className="relative group max-w-[300px] md:max-w-md mx-auto lg:max-w-none">
                {/* Neon Glow Backlight */}
                <div className="absolute -inset-4 bg-primary/10 blur-3xl opacity-50 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700" />

                {/* Main Image Frame */}
                <div className="relative p-1 rounded-3xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors duration-500 shadow-2xl">
                  <div className="relative aspect-[4/5] rounded-[22px] overflow-hidden">
                    <img
                      src="/images/Divine.JPG"
                      alt="Afolabi Divine"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    />
                    {/* Shadow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Tech Floating Island - Desktop Only for cleanliness */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:block">
                    <FadeIn delay={600}>
                      <div className="flex items-center gap-5 glass-panel px-6 py-4 rounded-2xl border-primary/20">
                        {[SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiMongodb].map((Icon, i) => (
                          <Icon key={i} className="w-5 h-5 text-primary/60 hover:text-primary hover:scale-125 transition-all duration-300 cursor-crosshair" />
                        ))}
                      </div>
                    </FadeIn>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on small mobile screens to save space */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 group flex flex-col items-center gap-2 hidden sm:flex"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/20 group-hover:text-primary transition-colors">Scroll</span>
        <ChevronDown className="w-5 h-5 text-primary animate-bounce" />
      </button>
    </section>
  )
}

export default Hero;