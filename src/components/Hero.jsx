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
          Xe tăng, xe đua
          <span className="hero__highlight"> & đồ chơi điện tử</span>
        </h1>

        <p className="hero__desc">{storeInfo.description}</p>

        <div className="hero__actions">
          <a href="#shop" className="btn btn--primary btn--lg">
            Xem Sản Phẩm
          </a>
          <a href="#how" className="btn btn--outline btn--lg">
            Quy Trình Thiết Kế
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
        <div className="hero__showcase">
          <div className="showcase-card showcase-card--1">🏎️</div>
          <div className="showcase-card showcase-card--2">🛡️</div>
          <div className="showcase-card showcase-card--3">⚡</div>
        </div>
      </div>
    </section>
  );
}
