import { features } from '../data/products';

export default function Features() {
  return (
    <section className="section section--accent">
      <div className="container">
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
