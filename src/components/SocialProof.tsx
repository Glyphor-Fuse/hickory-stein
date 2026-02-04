
import { Star } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="py-20 bg-stone-100 text-stone-900 border-y border-stone-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">The Grapevine Standard</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">Word on the Street</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote: "The brisket actually melts. I didn't think it was possible outside of Lockhart, but they've done it.",
              author: "Texas Monthly",
              role: "Food Editor"
            },
            {
              quote: "Finally, a place where the beer list is as serious as the smoke ring. The Dunkel pairing is non-negotiable.",
              author: "Craft Beer Austin",
              role: "Senior Critic"
            },
            {
              quote: "It's loud, it's dark, it smells like heaven. This is exactly how a Friday night should feel.",
              author: "James Beard Foundation",
              role: "Nomination Committee"
            }
          ].map((review, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6">
              <div className="flex gap-1 text-orange-500 mb-4">
                {[1,2,3,4,5].map(s => <Star key={s} fill="currentColor" className="h-4 w-4" />)}
              </div>
              <blockquote className="font-display text-xl md:text-2xl leading-relaxed mb-6 text-stone-800">
                "{review.quote}"
              </blockquote>
              <div className="mt-auto">
                <cite className="font-bold not-italic block uppercase tracking-wider text-sm">{review.author}</cite>
                <span className="text-stone-500 text-xs uppercase tracking-widest">{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
