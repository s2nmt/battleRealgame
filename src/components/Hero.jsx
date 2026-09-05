import { useEffect, useState } from 'react';
import { products } from '../data/products';
import { useLanguage } from '../i18n/LanguageContext';

const ROTATE_MS = 6000;

export default function Hero() {
  const { t, pick } = useLanguage();
  const featured = products.slice(0, 2);
  const [index, setIndex] = useState(0);
  const current = featured[index] ?? featured[0];
  const image = current.heroImage || current.images?.[0];
  const name = pick(current.name);
  const category = pick(current.category);
  const description = pick(current.description);

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
          <span className="hero__category">{category}</span>

          <h1 className="hero__title">{name}</h1>

          <p className="hero__desc">{description}</p>

          <div className="hero__actions">
            <a href="#shop" className="btn btn--primary btn--lg">
              {t('hero.viewShop')}
            </a>
          </div>
        </div>

        {image && (
          <div className="hero__visual" key={`${current.id}-img`}>
            <img
              src={image}
              alt={name}
              className="hero__mascot"
              width="640"
              height="480"
            />
          </div>
        )}

        {featured.length > 1 && (
          <div className="hero__dots" role="tablist" aria-label={t('hero.featuredAria')}>
            {featured.map((p, i) => (
              <button
                key={p.id}
                type="button"
                className={`hero__dot${i === index ? ' hero__dot--active' : ''}`}
                aria-label={pick(p.name)}
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
