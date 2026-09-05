import { services } from '../data/products';
import { useLanguage } from '../i18n/LanguageContext';

export default function Services() {
  const { t, pick, lang } = useLanguage();

  return (
    <section id="services" className="section section--showcase">
      <div className="container">
        <div className="section__header section__header--wide">
          <span className="section__tag">{t('services.tag')}</span>
          <h2 className="section__title">{t('services.title')}</h2>
          <p className="section__desc">{t('services.desc')}</p>
        </div>

        <div className="services-grid">
          {services.map((s) => {
            const includes = s.includes?.[lang] ?? s.includes?.vi ?? [];
            return (
              <article key={s.id} className="service-card">
                <span className="service-card__icon" aria-hidden="true">{s.icon}</span>
                <h3 className="service-card__title">{pick(s.title)}</h3>
                <p className="service-card__desc">{pick(s.description)}</p>
                <ul className="service-card__list">
                  {includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href="#contact" className="btn btn--outline btn--sm">
                  {t('services.contactCta')}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
