import { vehicles } from '../data/products';
import { formatPrice } from '../utils/formatPrice';

export default function Shop() {
  return (
    <section id="shop" className="section">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Tùy chọn</span>
          <h2 className="section__title">Thích? Mua xe mang về</h2>
          <p className="section__desc">
            Không bắt buộc phải mua. Nhưng nếu bạn yêu thích sau khi chơi thử tại sân, có thể đặt mua
            xe để tập ở nhà hoặc mang đến các giải đấu.
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
                  Liên Hệ Mua
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="shop-note">
          💡 Mẹo: Chơi thử miễn phí tại sân trước khi quyết định mua — nhân viên sẽ tư vấn mẫu phù hợp.
        </p>
      </div>
    </section>
  );
}
