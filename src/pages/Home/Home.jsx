import Navbar from '../../components/layout/Navbar';
import Hero from './components/Hero';
import Treatments from './components/Treatments';
import InstagramStories from '../../components/ui/InstagramStories';
import FooterCTA from './components/FooterCTA';
import FloatingContact from '../../components/common/FloatingContact';
import AestheticBackground from '../../components/common/AestheticBackground';
import PromoBanner from '../../components/ui/PromoBanner';
import Footer from '../../components/layout/Footer';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <AestheticBackground /> {/* El nuevo fondo dinámico */}
      <Navbar />
      <PromoBanner /> {/* Banner de promociones */}
      
      <main>
        <Hero />
        <Treatments />
        <InstagramStories />
      </main>

      <FloatingContact />

      <Footer />
    </div>
  );
};

export default Home;
