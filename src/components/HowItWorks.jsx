import { steps } from '../data/products';

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Cách mua hàng</span>
          <h2 className="section__title">3 bước để sở hữu xe RC</h2>
        </div>

        <div className="steps">
          {steps.map((s) => (
            <div key={s.step} className="step">
              <span className="step__num">{s.step}</span>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__desc">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
