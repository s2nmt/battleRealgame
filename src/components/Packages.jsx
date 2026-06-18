import { playPackages } from '../data/products';
import { formatPrice } from '../utils/formatPrice';

export default function Packages() {
  return (
    <section id="packages" className="section section--dark">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Bảng giá chơi tại sân</span>
          <h2 className="section__title">Đến chơi — không cần mua xe</h2>
          <p className="section__desc">
            Tất cả xe và thiết bị có sẵn tại sân. Bạn chỉ cần đến, chọn gói và bắt đầu chiến đấu.
          </p>
        </div>

        <div className="packages-grid">
          {playPackages.map((pkg) => (
            <article
              key={pkg.id}
              className={`package-card ${pkg.featured ? 'package-card--featured' : ''}`}
            >
              {pkg.badge && <span className="package-card__badge">{pkg.badge}</span>}
              <h3 className="package-card__name">{pkg.name}</h3>
              <div className="package-card__price">
                <span className="package-card__amount">{formatPrice(pkg.price)}</span>
                <span className="package-card__duration">/ {pkg.duration}</span>
              </div>
              <p className="package-card__desc">{pkg.description}</p>
              <ul className="package-card__list">
                {pkg.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${pkg.featured ? 'btn--primary' : 'btn--outline'} btn--block`}>
                Đặt Lịch
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
