import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import GameModes from './components/GameModes';
import Features from './components/Features';
import Packages from './components/Packages';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <GameModes />
        <Features />
        <Packages />
        <Shop />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
