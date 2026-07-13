import { categories } from '../data/products';

export default function GameModes() {
  return (
    <section id="categories" className="section">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">3 dòng sản phẩm chính</span>
          <h2 className="section__title">Xe tăng — Xe đua — Điện tử</h2>
          <p className="section__desc">
            Tất cả đều do Battle Real tự thiết kế và sản xuất. Không bán hàng nhập sẵn, không OEM —
            mỗi mẫu là sản phẩm độc quyền của chúng tôi.
          </p>
        </div>

        <div className="modes-grid">
          {categories.map((cat) => (
            <article key={cat.id} className="mode-card">
              <div className="mode-card__icon">{cat.icon}</div>
              <h3 className="mode-card__title">{cat.title}</h3>
              <p className="mode-card__desc">{cat.description}</p>
              <span className="mode-card__players">{cat.tag}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
