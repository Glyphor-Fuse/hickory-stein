
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame, Snowflake } from "lucide-react";
import { motion } from "framer-motion";

const HeroSplit = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-stone-950 flex flex-col md:flex-row">
      {/* Left: FIRE */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-auto group">
        <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/30 transition-all duration-700" />
        <img 
          src="/images/hero-bbq-fire.jpg" 
          alt="Slow smoked brisket over oak fire" 
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute bottom-10 left-6 md:bottom-20 md:left-12 z-20">
          <div className="flex items-center gap-2 text-orange-500 mb-2">
            <Flame className="h-5 w-5" />
            <span className="text-sm font-bold tracking-widest uppercase">Texas Oak Smoked</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase leading-none">
            The Heat
          </h2>
        </div>
      </div>

      {/* Right: ICE */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-auto group">
        <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/30 transition-all duration-700" />
        <img 
          src="/images/hero-beer-stein.jpg" 
          alt="Cold german lager in glass stein" 
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute bottom-10 right-6 md:top-20 md:right-12 z-20 text-right">
          <div className="flex items-center gap-2 text-amber-400 mb-2 justify-end">
            <span className="text-sm font-bold tracking-widest uppercase">Bavarian Poured</span>
            <Snowflake className="h-5 w-5" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase leading-none">
            The Frost
          </h2>
        </div>
      </div>

      {/* Center Absolute Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-full max-w-lg px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-black/60 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-sm shadow-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-2 tracking-tighter">
            HICKORY <span className="text-amber-500">&</span> STEIN
          </h1>
          <p className="text-stone-300 text-lg mb-6 font-light tracking-wide">
            Where 16-hour smoke meets 500-year tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-700 hover:bg-orange-600 text-white border-none rounded-none text-base font-semibold px-8">
              Book a Table
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 hover:text-white rounded-none text-base font-semibold px-8 backdrop-blur-sm">
              View Menu <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSplit;
