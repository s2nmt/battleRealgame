import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#" className="footer-mark" aria-label="Robovix — Robotics & IoT Solutions">
              <span className="footer-mark__name" aria-hidden="true">
                ROBO
                <span className="footer-mark__o">
                  <svg viewBox="0 0 40 40" aria-hidden="true">
                    {/* Thick letter-O ring */}
                    <circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" strokeWidth="6.5" />
                    {/* Gear in the counter, like original wordmark */}
                    <g fill="currentColor">
                      <path d="M20 11.2l1.05 2.35 2.55.25-1.9 1.7.55 2.5L20 16.8l-2.25 1.2.55-2.5-1.9-1.7 2.55-.25L20 11.2z" />
                      <path d="M28.8 20l-2.35 1.05-.25 2.55-1.7-1.9-2.5.55L23.2 20l-1.2-2.25 2.5.55 1.7-1.9.25 2.55L28.8 20z" />
                      <path d="M20 28.8l-1.05-2.35-2.55-.25 1.9-1.7-.55-2.5L20 23.2l2.25-1.2-.55 2.5 1.9 1.7-2.55.25L20 28.8z" />
                      <path d="M11.2 20l2.35-1.05.25-2.55 1.7 1.9 2.5-.55L16.8 20l1.2 2.25-2.5-.55-1.7 1.9-.25-2.55L11.2 20z" />
                      <circle cx="20" cy="20" r="5.2" />
                      <circle cx="20" cy="20" r="2.4" fill="#111827" />
                    </g>
                  </svg>
                </span>
                VIX
              </span>
              <span className="footer-mark__tag">Robotics & IoT Solutions</span>
            </a>
            <p className="footer__blurb">{t('footer.blurb')}</p>
            <p className="footer__tagline">{t('footer.tagline')}</p>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">{t('footer.explore')}</h3>
            <div className="footer__links">
              <a href="#shop">{t('footer.shop')}</a>
              <a href="#shop-new">{t('footer.newProducts')}</a>
              <a href="#collection">{t('footer.collection')}</a>
              <a href="#how">{t('footer.about')}</a>
            </div>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">{t('footer.contactHeading')}</h3>
            <ul className="footer__info">
              <li>
                <span className="footer__label">{t('footer.email')}</span>
                <a href="mailto:hello@robovix.studio">info@robovix.studio</a>
              </li>
              <li>
                <span className="footer__label">{t('footer.phone')}</span>
                <a href="tel:+84901234567">(+84) 901 234 567</a>
              </li>
              <li>
                <span className="footer__label">{t('footer.address')}</span>
                <span>{t('footer.addressValue')}</span>
              </li>
              <li>
                <span className="footer__label">{t('footer.hours')}</span>
                <span>{t('footer.hoursValue')}</span>
              </li>
            </ul>
          </div>

          <div className="footer__col footer__col--form">
            <h3 className="footer__heading">{t('footer.formHeading')}</h3>
            <p className="footer__form-desc">{t('footer.formDesc')}</p>

            {submitted ? (
              <div className="footer__success">
                <strong>{t('contact.successTitle')}</strong>
                <p>{t('contact.successDesc')}</p>
              </div>
            ) : (
              <form className="footer__form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t('contact.namePlaceholder')}
                  aria-label={t('contact.name')}
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder={t('contact.phonePlaceholder')}
                  aria-label={t('contact.phone')}
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t('contact.emailPlaceholder')}
                  aria-label={t('contact.email')}
                />
                <select name="interest" defaultValue="products" aria-label={t('contact.interest')}>
                  <option value="products">{t('contact.interestProducts')}</option>
                  <option value="oem-odm">{t('contact.interestOem')}</option>
                  <option value="outsource-hardware">{t('contact.interestHardware')}</option>
                  <option value="outsource-software">{t('contact.interestSoftware')}</option>
                  <option value="all">{t('contact.interestAll')}</option>
                </select>
                <button type="submit" className="btn btn--primary btn--sm btn--block">
                  {t('contact.submit')}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">{t('footer.copy')}</p>
        </div>
      </div>
    </footer>
  );
}
