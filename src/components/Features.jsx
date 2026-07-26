import { features } from '../data/products';

function FeatureIcon({ icon }) {
  if (icon === 'vn-flag') {
    return (
      <span className="feature__icon feature__icon--svg" aria-hidden="true">
        <svg viewBox="0 0 36 36" width="36" height="36" role="img">
          <rect width="36" height="36" rx="6" fill="#DA251D" />
          <polygon
            fill="#FFCD00"
            points="18,7 20.5,14.5 28.5,14.5 22,19.2 24.5,26.5 18,21.8 11.5,26.5 14,19.2 7.5,14.5 15.5,14.5"
          />
        </svg>
      </span>
    );
  }

  return <span className="feature__icon">{icon}</span>;
}

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
              <FeatureIcon icon={f.icon} />
              <h3 className="feature__title">{f.title}</h3>
              <p className="feature__desc">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
