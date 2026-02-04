
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Utensils, Star, ArrowRight, CircleCheck } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const pairings = [
  {
    id: "brisket",
    label: "Prime Brisket",
    description: "16-hour oak smoked, pepper crusted.",
    beer: "Dunkelweizen",
    beerDesc: "The roasted malt notes complement the bark of the brisket perfectly.",
    img: "/images/pairing-brisket.jpg",
    beerImg: "/images/pairing-dunkel.jpg",
    color: "from-orange-900 to-stone-900"
  },
  {
    id: "sausage",
    label: "Jalapeño Cheddar",
    description: "House-ground pork with sharp cheddar kick.",
    beer: "Hefeweizen",
    beerDesc: "Bright banana and clove esters cut through the rich cheese and spice.",
    img: "/images/pairing-sausage.jpg",
    beerImg: "/images/pairing-hefe.jpg",
    color: "from-amber-900 to-stone-900"
  },
  {
    id: "ribs",
    label: "St. Louis Ribs",
    description: "Dry rubbed with a sweet & spicy glaze.",
    beer: "Märzen / Oktoberfest",
    beerDesc: "Caramel malt sweetness bridges the gap between the pork glaze and the smoke.",
    img: "/images/pairing-ribs.jpg",
    beerImg: "/images/pairing-marzen.jpg",
    color: "from-red-900 to-stone-900"
  }
];

const PairingEngine = () => {
  const [selected, setSelected] = useState(pairings[0]);

  return (
    <section className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">Interactive Menu</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-3 mb-4">Smoke & Suds</h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg">
            Select your protein to discover the perfect German brew to wash it down.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {pairings.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelected(item)}
                className={`group flex items-center p-4 text-left transition-all duration-300 border-l-4 ${
                  selected.id === item.id 
                    ? "bg-white/5 border-orange-500" 
                    : "bg-transparent border-stone-800 hover:bg-white/5 hover:border-stone-600"
                }`}
              >
                <div className="bg-stone-800 p-3 rounded-sm mr-4 group-hover:bg-stone-700 transition-colors">
                  <Utensils className={`h-6 w-6 ${selected.id === item.id ? "text-orange-500" : "text-stone-400"}`} />
                </div>
                <div>
                  <h3 className={`font-display font-bold text-xl ${selected.id === item.id ? "text-white" : "text-stone-400"}`}>
                    {item.label}
                  </h3>
                  <p className="text-sm text-stone-500 truncate max-w-[200px]">
                    {item.description}
                  </p>
                </div>
                {selected.id === item.id && (
                  <ArrowRight className="ml-auto text-orange-500 h-5 w-5 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Display Engine */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="bg-stone-950 border-stone-800 overflow-hidden shadow-2xl">
                  <div className={`h-2 w-full bg-gradient-to-r ${selected.color}`} />
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2">
                      {/* Visuals */}
                      <div className="relative h-64 md:h-auto">
                        <div className="absolute inset-0 flex">
                          <img src={selected.img} alt={selected.label} className="w-1/2 h-full object-cover" />
                          <img src={selected.beerImg} alt={selected.beer} className="w-1/2 h-full object-cover" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-6">
                          <div className="flex items-center gap-4 text-white font-display font-bold text-2xl tracking-tight">
                            <span>{selected.label}</span>
                            <span className="text-orange-500">+</span>
                            <span>{selected.beer}</span>
                          </div>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="p-8 flex flex-col justify-center bg-stone-900/50">
                        <div className="mb-6">
                          <div className="flex items-center gap-2 text-amber-500 mb-2">
                            <Star className="h-5 w-5" />
                            <span className="text-sm font-bold uppercase tracking-wider">The Perfect Pour</span>
                          </div>
                          <h3 className="text-3xl font-display font-bold text-white mb-4">{selected.beer}</h3>
                          <p className="text-stone-400 leading-relaxed mb-6">
                            {selected.beerDesc}
                          </p>
                          <ul className="space-y-2 mb-8">
                            <li className="flex items-center text-stone-300 text-sm">
                              <CircleCheck className="h-4 w-4 mr-2 text-orange-500" />
                              Flavor Profile Matched
                            </li>
                            <li className="flex items-center text-stone-300 text-sm">
                              <CircleCheck className="h-4 w-4 mr-2 text-orange-500" />
                              Served at 38°F
                            </li>
                          </ul>
                        </div>
                        <Button className="w-full bg-orange-600 hover:bg-orange-500 text-white rounded-none">
                          Book This Pairing
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PairingEngine;
