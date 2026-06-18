import { arenaInfo } from '../data/products';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="container hero__inner">
        <div className="hero__badge">
          <span className="pulse" />
          {arenaInfo.status} — Sắp khai trương
        </div>

        <h1 className="hero__title">
          Sân chơi game
          <br />
          <span className="hero__highlight">xe thực tế</span>
        </h1>

        <p className="hero__desc">{arenaInfo.description}</p>

        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary btn--lg">
            Đăng Ký Chơi Sớm
          </a>
          <a href="#packages" className="btn btn--outline btn--lg">
            Xem Bảng Giá
          </a>
        </div>

        <div className="hero__stats">
          {arenaInfo.highlights.map((h) => (
            <div key={h.label} className="hero__stat">
              <span className="hero__stat-value">{h.value}</span>
              <span className="hero__stat-label">{h.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__visual" aria-hidden="true">
        <div className="hero__arena">
          <div className="hero__track" />
          <span className="hero__vehicle hero__vehicle--1">🏎️</span>
          <span className="hero__vehicle hero__vehicle--2">🛡️</span>
          <span className="hero__vehicle hero__vehicle--3">🔫</span>
        </div>
      </div>
    </section>
  );
}
