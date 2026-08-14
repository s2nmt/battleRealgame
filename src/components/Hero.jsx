import { products, storeInfo } from '../data/products';

export default function Hero() {
  const featured = products[0];
  const image = featured.heroImage || featured.images?.[0];

  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <div className="hero__badge">
            <span className="pulse" />
            {featured.badge} · {storeInfo.comingSoonLabel}
          </div>

          <span className="hero__category">{featured.category}</span>

          <h1 className="hero__title">{featured.name}</h1>

          <p className="hero__desc">{featured.description}</p>

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
          <div className="hero__visual">
            <img
              src={image}
              alt={featured.name}
              className="hero__mascot"
              width="640"
              height="480"
            />
          </div>
        )}
      </div>
    </section>
  );
}
