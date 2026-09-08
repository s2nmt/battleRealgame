import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Collection from './components/Collection';
import Shop from './components/Shop';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Shop />
        <Collection />
        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}
