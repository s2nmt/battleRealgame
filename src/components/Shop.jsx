import { useEffect, useMemo, useState } from 'react';
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
  filterCategories = categories,
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
                {tag && <span className="section__tag">{tag}</span>}
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

  const storeProducts = useMemo(() => {
    let list = products.filter((p) => p.categoryId !== 'diy');
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

  const diyProducts = products.filter((p) => {
    if (p.categoryId !== 'diy') return false;

    const q = searchQuery.trim().toLowerCase();
    return !q || [p.name, p.category, p.description].some((text) =>
      pick(text).toLowerCase().includes(q),
    );
  });

  return (
    <>
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
      <ProductSection
        id="diy"
        title={t('shop.diyTitle')}
        items={diyProducts}
        searchQuery={searchQuery}
      />
    </>
  );
}
