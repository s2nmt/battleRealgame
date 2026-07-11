import { vehicles } from '../data/products';
import { formatPrice } from '../utils/formatPrice';

export default function Shop() {
  return (
    <section id="shop" className="section">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Sản phẩm</span>
          <h2 className="section__title">Xe RC đang bán</h2>
          <p className="section__desc">
            Tất cả sản phẩm đều mới 100%, bảo hành 12 tháng. Liên hệ để đặt hàng hoặc hỏi tồn kho.
          </p>
        </div>

        <div className="shop-grid">
          {vehicles.map((v) => (
            <article key={v.id} className="shop-card">
              <div className="shop-card__icon">{v.icon}</div>
              <span className="shop-card__category">{v.category}</span>
              <h3 className="shop-card__name">{v.name}</h3>
              <p className="shop-card__desc">{v.description}</p>
              <div className="shop-card__footer">
                <span className="shop-card__price">{formatPrice(v.price)}</span>
                <a href="#contact" className="btn btn--outline btn--sm">
                  Đặt Mua
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="shop-note">
          💡 Chưa chắc chọn mẫu nào? Liên hệ tư vấn miễn phí — chúng tôi giúp bạn chọn xe phù hợp ngân sách.
        </p>
      </div>
    </section>
  );
}
