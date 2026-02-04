import HeroSplit from "@/components/HeroSplit";
import PairingEngine from "@/components/PairingEngine";
import CuratedFeasts from "@/components/CuratedFeasts";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-stone-950 text-white font-sans selection:bg-orange-500 selection:text-white">
      <HeroSplit />
      <PairingEngine />
      <CuratedFeasts />
      <SocialProof />
      <Footer />
    </main>
  );
};

export default Index;