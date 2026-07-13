import { bundles, storeInfo } from '../data/products';

export default function Packages() {
  return (
    <section id="bundles" className="section section--dark">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Gói dự kiến</span>
          <h2 className="section__title">Combo sẽ ra mắt cùng sản phẩm</h2>
          <p className="section__desc">
            Các gói combo đang được chuẩn bị — chưa mở bán, chưa có giá. Đăng ký để biết thêm khi ra mắt.
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
                <span className="package-card__amount package-card__amount--soon">
                  {storeInfo.comingSoonLabel}
                </span>
                <span className="package-card__duration">/ {pkg.unit}</span>
              </div>
              <p className="package-card__desc">{pkg.description}</p>
              <ul className="package-card__list">
                {pkg.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${pkg.featured ? 'btn--primary' : 'btn--outline'} btn--block`}>
                Đăng Ký Quan Tâm
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
