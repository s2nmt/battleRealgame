import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Shop from './components/Shop';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Shop />
        <Services />
        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}
