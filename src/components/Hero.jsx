import { useEffect, useState } from 'react';
import { products, storeInfo } from '../data/products';

const ROTATE_MS = 6000;

export default function Hero() {
  const featured = products.slice(0, 2);
  const [index, setIndex] = useState(0);
  const current = featured[index] ?? featured[0];
  const image = current.heroImage || current.images?.[0];

  useEffect(() => {
    if (featured.length < 2) return undefined;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % featured.length);
    }, ROTATE_MS);
    return () => clearInterval(timer);
  }, [featured.length, index]);

  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="container hero__inner">
        <div className="hero__copy" key={`${current.id}-copy`}>
          <div className="hero__badge">
            <span className="pulse" />
            {storeInfo.tagline}
          </div>

          <span className="hero__category">{current.category}</span>

          <h1 className="hero__title">{current.name}</h1>

          <p className="hero__desc">{current.description}</p>

          <div className="hero__actions">
            <a href="#shop" className="btn btn--primary btn--lg">
              Xem Sản Phẩm
            </a>
            <a href="#contact" className="btn btn--outline btn--lg">
              Đăng Ký Quan Tâm
            </a>
          </div>
        </div>

        {image && (
          <div className="hero__visual" key={`${current.id}-img`}>
            <img
              src={image}
              alt={current.name}
              className="hero__mascot"
              width="640"
              height="480"
            />
          </div>
        )}

        {featured.length > 1 && (
          <div className="hero__dots" role="tablist" aria-label="Sản phẩm nổi bật">
            {featured.map((p, i) => (
              <button
                key={p.id}
                type="button"
                className={`hero__dot${i === index ? ' hero__dot--active' : ''}`}
                aria-label={p.name}
                aria-selected={i === index}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
