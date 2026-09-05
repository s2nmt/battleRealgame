import { brandPoints } from '../data/products';
import { useLanguage } from '../i18n/LanguageContext';

function BrandIcon({ icon }) {
  if (icon === 'vn-flag') {
    return (
      <span className="brand-card__icon brand-card__icon--svg" aria-hidden="true">
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

  if (icon === 'pcb') {
    return (
      <span className="brand-card__icon brand-card__icon--svg" aria-hidden="true">
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
        </svg>
      </span>
    );
  }

  if (icon === 'chip') {
    return (
      <span className="brand-card__icon brand-card__icon--svg" aria-hidden="true">
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

  return <span className="brand-card__icon">{icon}</span>;
}

export default function HowItWorks() {
  const { t, pick } = useLanguage();

  return (
    <section id="how" className="section section--surface">
      <div className="container about-split">
        <div className="about-split__copy">
          <span className="section__tag">{t('about.tag')}</span>
          <h2 className="section__title">{t('about.title')}</h2>
          <p className="section__desc">{t('about.desc')}</p>
        </div>

        <div className="brand-grid">
          {brandPoints.map((point) => {
            const title = pick(point.title);
            return (
              <article key={title} className="brand-card">
                <BrandIcon icon={point.icon} />
                <div className="brand-card__body">
                  <h3 className="brand-card__title">{title}</h3>
                  <p className="brand-card__desc">{pick(point.description)}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
