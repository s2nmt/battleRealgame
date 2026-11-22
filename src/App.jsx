import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Shop from './components/Shop';
import Footer from './components/Footer';
import ProductArticle from './components/ProductArticle';
import { products } from './data/products';

export default function App() {
  const productId = new URLSearchParams(window.location.search).get('product');
  const product = products.find((item) => String(item.id) === productId && item.article);

  return (
    <>
      <Header isProductPage={Boolean(product)} />
      <main id="main-content">
        {product ? (
          <ProductArticle product={product} />
        ) : (
          <>
            <Hero />
            <Shop />
            <HowItWorks />
          </>
        )}
      </main>
      <Footer product={product} />
    </>
  );
}
