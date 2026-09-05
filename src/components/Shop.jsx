import { useEffect, useMemo, useState } from 'react';
import { categories, products, storeInfo } from '../data/products';
import { useLanguage } from '../i18n/LanguageContext';
import { formatPrice } from '../utils/formatPrice';

function ProductMedia({ product, name }) {
  if (product.images?.length) {
    return (
      <div
        className={`shop-card__media${product.images[1] ? ' shop-card__media--swap' : ''}`}
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
  const name = pick(product.name);
  const category = pick(product.category);
  const comingSoon = pick(storeInfo.comingSoonLabel) || t('shop.comingSoon');
  const badge = product.badge === 'new' ? t('shop.badgeNew') : pick(product.badge);

  return (
    <article className={`shop-card${showcase ? ' shop-card--showcase' : ''}`}>
      {badge && <span className="shop-card__badge">{badge}</span>}
      <ProductMedia product={product} name={name} />
      <div className="shop-card__body">
        <span className="shop-card__category">{category}</span>
        <h3 className="shop-card__name">{name}</h3>
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
              href="#contact"
              className={`btn ${available ? 'btn--primary' : 'btn--outline'} btn--sm btn--block`}
            >
              {available ? t('shop.addToCart') : t('shop.registerInterest')}
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
      {showcase && <a href="#contact" className="shop-card__link" aria-label={name} />}
    </article>
  );
}

function ProductSection({
  id,
  tag,
  title,
  items,
  showFilters,
  activeCategory,
  onCategoryChange,
  searchQuery,
  showViewAll,
}) {
  const { t, pick } = useLanguage();
  const isNew = id === 'shop-new';

  return (
    <section
      id={id}
      className={`section ${isNew ? 'section--showcase' : 'section--light'}`}
    >
      <div className="container">
        {isNew ? (
          <div className="shop-section-head">
            <h2 className="shop-section-head__title">{title}</h2>
          </div>
        ) : (
          <>
            <div className="shop-store-head">
              <div className="shop-store-head__copy">
                <span className="section__tag">{tag}</span>
                <h2 className="section__title section__title--single">{title}</h2>
                {searchQuery ? (
                  <p className="section__desc">{t('shop.searchResult', { query: searchQuery })}</p>
                ) : null}
              </div>
              {showViewAll && (
                <button type="button" className="btn btn--outline btn--sm shop-store-head__more">
                  {t('shop.viewAll')}
                </button>
              )}
            </div>

            {showFilters && (
              <div className="shop-filters" role="tablist" aria-label={t('shop.categoriesAria')}>
                <button
                  type="button"
                  className={`shop-filter${activeCategory === 'all' ? ' shop-filter--active' : ''}`}
                  onClick={() => onCategoryChange('all')}
                >
                  {t('shop.all')}
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    className={`shop-filter${activeCategory === cat.id ? ' shop-filter--active' : ''}`}
                    onClick={() => onCategoryChange(cat.id)}
                  >
                    {pick(cat.title)}
                  </button>
                ))}
              </div>
            )}
          </>
        )}

        <div className="shop-grid">
          {items.slice(0, 4).map((p) => (
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
  const { t, pick, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    function onSearch(e) {
      setSearchQuery(e.detail || '');
      setActiveCategory('all');
    }
    window.addEventListener('robovix:search', onSearch);
    return () => window.removeEventListener('robovix:search', onSearch);
  }, []);

  const newProducts = useMemo(() => {
    let list = products.filter((p) => p.badge === 'new');
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      list = list.filter((p) => {
        const name = pick(p.name).toLowerCase();
        const category = pick(p.category).toLowerCase();
        const description = pick(p.description).toLowerCase();
        return name.includes(q) || category.includes(q) || description.includes(q);
      });
    }
    return list;
  }, [searchQuery, pick, lang]);

  const storeProducts = useMemo(() => {
    let list = products;
    if (activeCategory !== 'all') {
      list = list.filter((p) => p.categoryId === activeCategory);
    }
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      list = list.filter((p) => {
        const name = pick(p.name).toLowerCase();
        const category = pick(p.category).toLowerCase();
        const description = pick(p.description).toLowerCase();
        return name.includes(q) || category.includes(q) || description.includes(q);
      });
    }
    return list;
  }, [activeCategory, searchQuery, pick, lang]);

  return (
    <>
      <ProductSection
        id="shop-new"
        title={t('shop.newTitle')}
        items={newProducts}
        searchQuery={searchQuery}
      />
      <ProductSection
        id="shop"
        tag={t('shop.storeTag')}
        title={t('shop.storeTitle')}
        items={storeProducts}
        showFilters
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        searchQuery={searchQuery}
        showViewAll
      />
    </>
  );
}
