import { storeInfo } from '../data/products';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="container hero__inner">
        <div className="hero__badge">
          <span className="pulse" />
          {storeInfo.status}
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line">{storeInfo.headline}</span>
          <span className="hero__title-line hero__highlight">{storeInfo.headlineAccent}</span>
        </h1>

        <p className="hero__desc">{storeInfo.description}</p>

        <div className="hero__actions">
          <a href="#shop" className="btn btn--primary btn--lg">
            Xem Sản Phẩm Sắp Ra Mắt
          </a>
          <a href="#contact" className="btn btn--outline btn--lg">
            Đăng Ký Nhận Tin
          </a>
        </div>

        <div className="hero__stats">
          {storeInfo.highlights.map((h) => (
            <div key={h.label} className="hero__stat">
              <span className="hero__stat-value">{h.value}</span>
              <span className="hero__stat-label">{h.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__visual" aria-hidden="true">
        <img
          src="/logo.png"
          alt=""
          className="hero__mascot"
          width="360"
          height="360"
        />
      </div>
    </section>
  );
}
