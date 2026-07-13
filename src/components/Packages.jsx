import { bundles } from '../data/products';
import { formatPrice } from '../utils/formatPrice';

export default function Packages() {
  return (
    <section id="bundles" className="section section--dark">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Combo tiết kiệm</span>
          <h2 className="section__title">Gói sản phẩm tự thiết kế</h2>
          <p className="section__desc">
            Mua combo xe đua, xe tăng hoặc đồ chơi điện tử — giá tốt hơn mua lẻ, kèm phụ kiện và bảo hành.
          </p>
        </div>

        <div className="packages-grid">
          {bundles.map((pkg) => (
            <article
              key={pkg.id}
              className={`package-card ${pkg.featured ? 'package-card--featured' : ''}`}
            >
              {pkg.badge && <span className="package-card__badge">{pkg.badge}</span>}
              <h3 className="package-card__name">{pkg.name}</h3>
              <div className="package-card__price">
                <span className="package-card__amount">{formatPrice(pkg.price)}</span>
                <span className="package-card__duration">/ {pkg.unit}</span>
              </div>
              <p className="package-card__desc">{pkg.description}</p>
              <ul className="package-card__list">
                {pkg.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${pkg.featured ? 'btn--primary' : 'btn--outline'} btn--block`}>
                Đặt Mua Combo
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
