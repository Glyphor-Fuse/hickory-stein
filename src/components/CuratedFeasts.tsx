
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

const packages = [
  {
    name: "The Pitmaster's Lunch",
    price: "$45",
    guest: "per guest",
    description: "A casual yet curated tasting of our daily smokes.",
    features: ["Half-pound Brisket", "2 sausages", "Choice of 2 sides", "1/2 Liter House Lager", "Reserved Garden Seating"],
    featured: false,
    cta: "Reserve Lunch"
  },
  {
    name: "The Bavarian Feast",
    price: "$85",
    guest: "per guest",
    description: "The full dual-heritage experience for serious appetites.",
    features: ["Full Pound Brisket & Ribs", "Pretzel & Obatzda Starter", "Unlimited Sides", "1 Liter Stein of Choice", "Dedicated Server", "Take-home Glassware"],
    featured: true,
    cta: "Book The Feast"
  },
  {
    name: "The Whole Hog VIP",
    price: "$150",
    guest: "per guest",
    description: "An exclusive culinary journey led by our Head Pitmaster.",
    features: ["Private Pit Tour", "Chef's Cut Tasting Menu", "Premium Schnapps Flight", "Unlimited Beer Pairings", "Private Booth Seating", "Signed Cookbook"],
    featured: false,
    cta: "Inquire VIP"
  }
];

const CuratedFeasts = () => {
  return (
    <section className="py-24 bg-stone-950 text-stone-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Curated Feasts</h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg">
            We don't just serve plates; we serve experiences. Choose your tier for a seamless evening.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <Card 
              key={idx} 
              className={`relative flex flex-col border-stone-800 bg-stone-900/50 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2 ${
                pkg.featured ? "border-orange-500/50 shadow-lg shadow-orange-900/10" : "border-stone-800"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-sm">
                  Most Popular
                </div>
              )}
              <CardHeader className="p-8 text-center border-b border-stone-800/50">
                <h3 className="font-display font-bold text-2xl text-white mb-2">{pkg.name}</h3>
                <div className="text-stone-400 text-sm mb-4 min-h-[40px]">{pkg.description}</div>
                <div className="flex items-baseline justify-center gap-1 text-white">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-stone-500 font-medium text-sm">{pkg.guest}</span>
                </div>
              </CardHeader>
              <CardContent className="p-8 flex-grow">
                <ul className="space-y-4">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start text-sm text-stone-300">
                      <Check className="h-5 w-5 mr-3 text-orange-500 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button 
                  className={`w-full h-12 rounded-none font-semibold tracking-wide ${
                    pkg.featured 
                      ? "bg-white text-stone-950 hover:bg-stone-200" 
                      : "bg-stone-800 text-white hover:bg-stone-700 hover:text-white"
                  }`}
                >
                  {pkg.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedFeasts;
