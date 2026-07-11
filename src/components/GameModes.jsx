import { categories } from '../data/products';

export default function GameModes() {
  return (
    <section id="categories" className="section">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Danh mục sản phẩm</span>
          <h2 className="section__title">Chọn loại xe phù hợp với bạn</h2>
          <p className="section__desc">
            Từ xe đua tốc độ, xe tăng vui chơi đến xe chiến đấu hầm hố — mỗi dòng xe đều có nhiều mẫu
            với mức giá khác nhau.
          </p>
        </div>

        <div className="modes-grid">
          {categories.map((cat) => (
            <article key={cat.id} className="mode-card">
              <div className="mode-card__icon">{cat.icon}</div>
              <h3 className="mode-card__title">{cat.title}</h3>
              <p className="mode-card__desc">{cat.description}</p>
              <span className="mode-card__players">{cat.players}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
