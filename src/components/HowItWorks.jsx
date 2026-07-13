import { steps } from '../data/products';

export default function HowItWorks() {
  return (
    <section id="how" className="section section--light">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Quy trình sản xuất</span>
          <h2 className="section__title">Từ ý tưởng đến thành phẩm</h2>
          <p className="section__desc">
            Không mua thiết kế có sẵn — mọi sản phẩm do chúng tôi thiết kế và phát triển từ đầu.
          </p>
        </div>

        <div className="steps">
          {steps.map((s) => (
            <div key={s.step} className="step">
              <span className="step__num">{s.step}</span>
              <span className="step__icon">{s.icon}</span>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__desc">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
