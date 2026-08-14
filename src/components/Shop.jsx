import { products, storeInfo } from '../data/products';

function ProductMedia({ product }) {
  if (product.images?.length) {
    return (
      <div
        className={`shop-card__media${product.images[1] ? ' shop-card__media--swap' : ''}`}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="shop-card__img shop-card__img--primary"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt=""
            className="shop-card__img shop-card__img--secondary"
          />
        )}
      </div>
    );
  }

  return <div className="shop-card__icon">{product.icon}</div>;
}

export default function Shop() {
  return (
    <section id="shop" className="section section--light">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Sản phẩm Robovix Studio</span>
          <h2 className="section__title section__title--single">Sản phẩm công nghệ, thiết bị IoT</h2>
          <p className="section__desc">
            Đây là các mẫu đang chuẩn bị ra mắt — chưa có giá chính thức. Đăng ký để nhận thông báo khi mở bán.
          </p>
        </div>

        <div className="shop-grid">
          {products.map((p) => (
            <article key={p.id} className="shop-card">
              {p.badge && <span className="shop-card__badge">{p.badge}</span>}
              <ProductMedia product={p} />
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
      </div>
    </section>
  );
}
