import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const socials = [
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.48h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z"
        />
      </svg>
    ),
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    href: 'https://tiktok.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M21 8.2a6.8 6.8 0 0 1-4.1-1.35V15a5.75 5.75 0 1 1-5-5.7v2.92a2.9 2.9 0 1 0 2.05 2.78V2.5h2.85A4.1 4.1 0 0 0 20.1 6.4c.3.12.6.2.9.27V8.2z"
        />
      </svg>
    ),
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M23.5 7.2a3 3 0 0 0-2.1-2.1C19.5 4.6 12 4.6 12 4.6s-7.5 0-9.4.5A3 3 0 0 0 .5 7.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-4.8zM9.75 15.5v-7l6.2 3.5-6.2 3.5z"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <footer id="contact" className="footer">
      <div className="footer__glow" aria-hidden="true" />
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#" className="footer-mark" aria-label="Robovix — Thế giới đồ chơi công nghệ">
              <span className="footer-mark__name" aria-hidden="true">
                ROBO
                <span className="footer-mark__o">
                  <svg viewBox="0 0 40 40" aria-hidden="true">
                    <circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" strokeWidth="6.5" />
                    <g fill="currentColor">
                      <path d="M20 11.2l1.05 2.35 2.55.25-1.9 1.7.55 2.5L20 16.8l-2.25 1.2.55-2.5-1.9-1.7 2.55-.25L20 11.2z" />
                      <path d="M28.8 20l-2.35 1.05-.25 2.55-1.7-1.9-2.5.55L23.2 20l-1.2-2.25 2.5.55 1.7-1.9.25 2.55L28.8 20z" />
                      <path d="M20 28.8l-1.05-2.35-2.55-.25 1.9-1.7-.55-2.5L20 23.2l2.25-1.2-.55 2.5 1.9 1.7-2.55.25L20 28.8z" />
                      <path d="M11.2 20l2.35-1.05.25-2.55 1.7 1.9 2.5-.55L16.8 20l1.2 2.25-2.5-.55-1.7 1.9-.25-2.55L11.2 20z" />
                      <circle cx="20" cy="20" r="5.2" />
                      <circle cx="20" cy="20" r="2.4" fill="#0b1220" />
                    </g>
                  </svg>
                </span>
                VIX
              </span>
              <span className="footer-mark__tag">{t('footer.oem')}</span>
            </a>
            <p className="footer__tagline">{t('footer.tagline')}</p>
            <div className="footer__social" aria-label={t('nav.social')}>
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  className={`footer__social-link footer__social-link--${s.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__nav-cols">
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
                  <a href="mailto:info@robovix.studio">info@robovix.studio</a>
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
          </div>

          <div className="footer__panel">
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
