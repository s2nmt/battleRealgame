import { useEffect, useState } from 'react';
import { storeInfo } from '../data/products';
import { useLanguage } from '../i18n/LanguageContext';
import { formatPrice } from '../utils/formatPrice';

export default function ProductArticle({ product }) {
  const { pick, t } = useLanguage();
  const name = pick(product.name);
  const article = pick(product.article);
  const images = product.images ?? [];
  const [imageIndex, setImageIndex] = useState(0);
  const available = product.status === 'available' && product.price != null;
  const isAccessory = product.catalogGroup === 'accessories';
  const backTo = isAccessory ? '#diy' : '#shop';

  useEffect(() => {
    document.title = `${name} | Robovix`;
  }, [name]);

  return (
    <div className="section section--light product-detail">
      <div className="container product-article">
        <a className="product-article__back" href={`./${backTo}`}>
          <span aria-hidden="true">← </span>
          {t(isAccessory ? 'shop.backToAccessories' : 'shop.backToProducts')}
        </a>
        <article>
          <div className="product-article__top">
            {images.length > 0 && (
              <div className="product-article__gallery">
                <div className="product-article__photo">
                  <img src={images[imageIndex]} alt={name} />
                </div>
                {images.length > 1 && (
                  <div className="product-article__thumbnails">
                    {images.map((image, index) => (
                      <button
                        key={image}
                        type="button"
                        aria-label={t('shop.viewPhoto', { number: index + 1 })}
                        aria-pressed={imageIndex === index}
                        onClick={() => setImageIndex(index)}
                      >
                        <img src={image} alt="" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
            <div className="product-article__summary">
              <span className="shop-card__category">{pick(product.category)}</span>
              <h1>{name}</h1>
              <p>{pick(product.description)}</p>
              <div className="product-article__purchase">
                {available ? (
                  <span className="shop-card__price">{formatPrice(product.price)}</span>
                ) : (
                  <span className="shop-card__status">
                    {pick(storeInfo.comingSoonLabel) || t('shop.comingSoon')}
                  </span>
                )}
                <a className="btn btn--primary" href="#contact">
                  {t('shop.registerInterest')}
                </a>
              </div>
            </div>
          </div>
          <section className="product-article__overview">
            <h2>{t('shop.productOverview')}</h2>
            {article.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        </article>
      </div>
    </div>
  );
}
