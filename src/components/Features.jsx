import { features } from '../data/products';

export default function Features() {
  return (
    <section className="section section--accent">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Tại sao Robovix Studio</span>
          <h2 className="section__title">Sản phẩm tự thiết kế — Không giống ai</h2>
        </div>
        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature">
              <span className="feature__icon">{f.icon}</span>
              <h3 className="feature__title">{f.title}</h3>
              <p className="feature__desc">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
