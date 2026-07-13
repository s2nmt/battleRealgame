import { products } from '../data/products';
import { formatPrice } from '../utils/formatPrice';

export default function Shop() {
  return (
    <section id="shop" className="section">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Sản phẩm tự thiết kế</span>
          <h2 className="section__title">Mẫu xe & đồ chơi điện tử</h2>
          <p className="section__desc">
            Mỗi sản phẩm mang thương hiệu Battle Real — thiết kế riêng, không có trên thị trường.
            Liên hệ để đặt hàng hoặc hỏi tồn kho.
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
                <span className="shop-card__price">{formatPrice(p.price)}</span>
                <a href="#contact" className="btn btn--outline btn--sm">
                  Đặt Mua
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="shop-note">
          🎨 Tất cả sản phẩm 100% tự thiết kế — cần tư vấn chọn mẫu hoặc đặt hàng số lượng lớn? Liên hệ ngay.
        </p>
      </div>
    </section>
  );
}
