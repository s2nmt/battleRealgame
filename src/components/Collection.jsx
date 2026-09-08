import { collections } from '../data/products';
import { useLanguage } from '../i18n/LanguageContext';

export default function Collection() {
  const { t, pick } = useLanguage();

  return (
    <section id="collection" className="section section--showcase">
      <div className="container collection__wrap">
        <div className="shop-section-head">
          <h2 className="shop-section-head__title">{t('collection.title')}</h2>
        </div>

        <div className="collection-grid">
          {collections.map((item) => (
            <a key={item.id} href={item.href} className="collection-card">
              <div className="collection-card__media">
                <img src={item.image} alt="" className="collection-card__img" />
              </div>
              <div className="collection-card__body">
                <h3 className="collection-card__title">{pick(item.title)}</h3>
                <p className="collection-card__desc">{pick(item.description)}</p>
                <span className="collection-card__cta">{t('collection.view')}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
