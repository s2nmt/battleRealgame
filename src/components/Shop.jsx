import { products, storeInfo } from '../data/products';

export default function Shop() {
  return (
    <section id="shop" className="section">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Sản phẩm RoVi</span>
          <h2 className="section__title">Mẫu xe & đồ chơi điện tử</h2>
          <p className="section__desc">
            Đây là các mẫu đang chuẩn bị ra mắt — chưa có giá chính thức. Đăng ký để nhận thông báo khi mở bán.
          </p>
        </div>

        <div className="shop-grid">
          {products.map((p) => (
            <article key={p.id} className="shop-card">
              {p.badge && <span className="shop-card__badge">{p.badge}</span>}
              <div className="shop-card__icon">{p.icon}</div>
              <span className="shop-card__category">{p.category}</span>
              <h3 className="shop-card__name">{p.name}</h3>
              <p className="shop-card__desc">{p.description}</p>
              <div className="shop-card__footer">
                <span className="shop-card__status">{storeInfo.comingSoonLabel}</span>
                <a href="#contact" className="btn btn--outline btn--sm">
                  Đăng Ký Quan Tâm
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="shop-note">
          🔔 Giá và thời gian giao hàng sẽ được công bố khi chính thức mở bán — đăng ký sớm để được ưu tiên.
        </p>
      </div>
    </section>
  );
}
