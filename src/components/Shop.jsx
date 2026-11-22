import { useState } from 'react';
import { categories, products, storeInfo } from '../data/products';
import { useLanguage } from '../i18n/LanguageContext';
import { formatPrice } from '../utils/formatPrice';

function ProductMedia({ product, name }) {
  if (product.images?.length) {
    return (
      <div
        className={`shop-card__media${product.images[1] ? ' shop-card__media--swap' : ''}${product.categoryId === 'autonomous' ? ' shop-card__media--compact' : ''}${product.categoryId === 'diy' ? ' shop-card__media--board' : ''}`}
      >
        <img
          src={product.images[0]}
          alt={name}
          className="shop-card__img shop-card__img--primary"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt=""
            className="shop-card__img shop-card__img--secondary"
          />
        )}
      </div>
    );
  }

  return <div className="shop-card__icon">{product.icon}</div>;
}

function ProductCard({ product, variant = 'store' }) {
  const { t, pick } = useLanguage();
  const available = product.status === 'available' && product.price != null;
  const showcase = variant === 'showcase';
  const isAccessory = product.catalogGroup === 'accessories';
  const name = pick(product.name);
  const title = isAccessory ? (product.model ?? name) : name;
  const category = pick(product.category);
  const comingSoon = pick(storeInfo.comingSoonLabel) || t('shop.comingSoon');
  const badge = product.badge === 'new' ? t('shop.badgeNew') : pick(product.badge);
  const articleUrl = product.article ? `?product=${product.id}` : null;

  return (
    <article className={`shop-card${showcase ? ' shop-card--showcase' : ''}`}>
      {badge && <span className="shop-card__badge">{badge}</span>}
      {articleUrl && !showcase ? (
        <a href={articleUrl} className="shop-card__media-link" aria-label={name}>
          <ProductMedia product={product} name={name} />
        </a>
      ) : (
        <ProductMedia product={product} name={name} />
      )}
      <div className="shop-card__body">
        <span className="shop-card__category">{category}</span>
        <h3 className="shop-card__name">
          {articleUrl && !showcase ? <a href={articleUrl}>{title}</a> : title}
        </h3>
        {isAccessory && <p className="shop-card__summary">{pick(product.description)}</p>}
        {!showcase && (
          <>
            <div className="shop-card__price-row">
              {available ? (
                <span className="shop-card__price">{formatPrice(product.price)}</span>
              ) : (
                <span className="shop-card__status">{comingSoon}</span>
              )}
            </div>
            <a
              href={articleUrl ?? '#contact'}
              className={`btn ${available ? 'btn--primary' : 'btn--outline'} btn--sm btn--block`}
            >
              {articleUrl
                ? t('hero.viewShop')
                : t(available ? 'shop.addToCart' : 'shop.registerInterest')}
            </a>
          </>
        )}
        {showcase && (
          <div className="shop-card__price-row">
            {available ? (
              <span className="shop-card__price">{formatPrice(product.price)}</span>
            ) : (
              <span className="shop-card__status">{comingSoon}</span>
            )}
          </div>
        )}
      </div>
      {showcase && <a href={articleUrl ?? '#contact'} className="shop-card__link" aria-label={name} />}
    </article>
  );
}

function ProductSection({
  id,
  title,
  description,
  items,
  showFilters,
  filterCategories = categories,
  activeCategory,
  onCategoryChange,
}) {
  const { t, pick } = useLanguage();
  const isNew = id === 'shop-new';

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`section ${isNew ? 'section--showcase' : 'section--light'}`}
    >
      <div className="container">
        {isNew ? (
          <div className="shop-section-head">
            <h2 id={`${id}-title`} className="shop-section-head__title">{title}</h2>
          </div>
        ) : (
          <>
            <div className="shop-store-head">
              <div className="shop-store-head__copy">
                <h2 id={`${id}-title`} className="section__title section__title--single">{title}</h2>
                <p className="section__desc">{description}</p>
              </div>
            </div>

            {showFilters && (
              <div className="shop-filters" role="group" aria-label={`${title}: ${t('shop.categoriesAria')}`}>
                <button
                  type="button"
                  className={`shop-filter${activeCategory === 'all' ? ' shop-filter--active' : ''}`}
                  onClick={() => onCategoryChange('all')}
                  aria-pressed={activeCategory === 'all'}
                >
                  {t('shop.all')}
                </button>
                {filterCategories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    className={`shop-filter${activeCategory === cat.id ? ' shop-filter--active' : ''}`}
                    onClick={() => onCategoryChange(cat.id)}
                    aria-pressed={activeCategory === cat.id}
                  >
                    {cat.icon === 'board' ? (
                      <span className="shop-filter__icon shop-filter__icon--board" aria-hidden="true" />
                    ) : cat.image ? (
                      <img src={cat.image} alt="" className="shop-filter__icon" />
                    ) : (
                      <span className="shop-filter__icon shop-filter__icon--symbol" aria-hidden="true">{cat.icon}</span>
                    )}
                    {pick(cat.title)}
                  </button>
                ))}
              </div>
            )}
          </>
        )}

        <div className="shop-grid">
          {(isNew ? items.slice(0, 4) : items).map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              variant={isNew ? 'showcase' : 'store'}
            />
          ))}
        </div>

        {items.length === 0 && (
          <p className="shop-empty">{t('shop.empty')}</p>
        )}
      </div>
    </section>
  );
}

export default function Shop() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const storeProducts = products
    .filter((product) => product.catalogGroup !== 'accessories' &&
      (activeCategory === 'all' || product.categoryId === activeCategory))
    .sort((first, second) => Number(Boolean(second.heroImage)) - Number(Boolean(first.heroImage)));
  const accessories = products.filter((product) => product.catalogGroup === 'accessories');

  return (
    <>
      <ProductSection
        id="shop"
        title={t('shop.storeTitle')}
        description={t('shop.storeDesc')}
        items={storeProducts}
        showFilters
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <ProductSection
        id="diy"
        title={t('shop.accessoriesTitle')}
        description={t('shop.accessoriesDesc')}
        items={accessories}
      />
    </>
  );
}
