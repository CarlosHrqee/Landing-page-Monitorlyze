
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Channels from "../components/Channels";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Navbar />
      <Hero />
      <Channels />
      <Features />
      <Stats />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
