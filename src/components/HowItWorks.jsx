import { steps } from '../data/products';

function StepIcon({ icon }) {
  if (icon === 'pcb') {
    return (
      <span className="step__icon step__icon--svg" aria-hidden="true">
        <svg viewBox="0 0 48 48" width="36" height="36">
          <rect x="6" y="8" width="36" height="32" rx="3" fill="#1b7a3d" />
          <rect x="10" y="12" width="12" height="8" rx="1" fill="#d4d4d8" />
          <rect x="28" y="14" width="8" height="6" rx="1" fill="#a1a1aa" />
          <rect x="12" y="26" width="10" height="8" rx="1" fill="#fbbf24" />
          <rect x="26" y="28" width="12" height="6" rx="1" fill="#d4d4d8" />
          <path
            fill="none"
            stroke="#86efac"
            strokeWidth="1.6"
            d="M16 20v4h8v4M32 20v8M10 22h-4M38 24h4M24 8v4"
          />
          <circle cx="16" cy="16" r="1.2" fill="#18181b" />
          <circle cx="32" cy="17" r="1.2" fill="#18181b" />
          <circle cx="17" cy="30" r="1.2" fill="#18181b" />
          <circle cx="32" cy="31" r="1.2" fill="#18181b" />
        </svg>
      </span>
    );
  }

  if (icon === 'chip') {
    return (
      <span className="step__icon step__icon--svg" aria-hidden="true">
        <svg viewBox="0 0 48 48" width="36" height="36">
          <rect x="14" y="14" width="20" height="20" rx="2.5" fill="#3f3f46" />
          <rect x="17" y="17" width="14" height="14" rx="1.5" fill="#27272a" />
          <rect x="20" y="20" width="8" height="8" rx="1" fill="#f97316" />
          <g fill="#a1a1aa">
            <rect x="17" y="6" width="3" height="8" rx="0.8" />
            <rect x="22.5" y="6" width="3" height="8" rx="0.8" />
            <rect x="28" y="6" width="3" height="8" rx="0.8" />
            <rect x="17" y="34" width="3" height="8" rx="0.8" />
            <rect x="22.5" y="34" width="3" height="8" rx="0.8" />
            <rect x="28" y="34" width="3" height="8" rx="0.8" />
            <rect x="6" y="17" width="8" height="3" rx="0.8" />
            <rect x="6" y="22.5" width="8" height="3" rx="0.8" />
            <rect x="6" y="28" width="8" height="3" rx="0.8" />
            <rect x="34" y="17" width="8" height="3" rx="0.8" />
            <rect x="34" y="22.5" width="8" height="3" rx="0.8" />
            <rect x="34" y="28" width="8" height="3" rx="0.8" />
          </g>
        </svg>
      </span>
    );
  }

  return <span className="step__icon">{icon}</span>;
}

export default function HowItWorks() {
  return (
    <section id="how" className="section section--light">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Quy trình sản xuất</span>
          <h2 className="section__title">Từ thiết kế đến thành phẩm</h2>
          <p className="section__desc">
            Chúng tôi thiết kế, chỉnh sửa và hoàn thiện từng sản phẩm trước khi đưa ra thị trường.
          </p>
        </div>

        <div className="steps">
          {steps.map((s) => (
            <div key={s.step} className="step">
              <span className="step__num">{s.step}</span>
              <StepIcon icon={s.icon} />
              <h3 className="step__title">{s.title}</h3>
              <p className="step__desc">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
