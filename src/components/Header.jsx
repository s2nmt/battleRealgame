import { useEffect, useRef, useState } from 'react';
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

const languageOptions = [
  {
    id: 'vi',
    short: 'VI',
    icon: (
      <svg className="lang-flag" viewBox="0 0 36 24" aria-hidden="true">
        <rect width="36" height="24" rx="2" fill="#DA251D" />
        <polygon
          fill="#FFCD00"
          points="18,4 19.8,9.8 26,9.8 21.1,13.4 22.9,19.2 18,15.6 13.1,19.2 14.9,13.4 10,9.8 16.2,9.8"
        />
      </svg>
    ),
  },
  {
    id: 'en',
    short: 'EN',
    icon: (
      <svg className="lang-globe" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          d="M5.2 7.5h13.6M5.2 16.5h13.6"
        />
      </svg>
    ),
  },
];

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  const links = [
    { href: '#', label: t('nav.home') },
    { href: '#shop', label: t('nav.shop') },
    { href: '#shop-new', label: t('nav.newProducts') },
    { href: '#collection', label: t('nav.collection') },
    { href: '#how', label: t('nav.about') },
  ];

  const currentLang = languageOptions.find((l) => l.id === lang) || languageOptions[0];

  useEffect(() => {
    function onPointerDown(e) {
      if (!langRef.current?.contains(e.target)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    const q = query.trim();
    window.dispatchEvent(new CustomEvent('robovix:search', { detail: q }));
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  }

  function selectLang(id) {
    setLang(id);
    setLangOpen(false);
  }

  return (
    <header className="header">
      <div className="header__main">
        <div className="container header__main-inner">
          <a href="#" className="logo" aria-label="Robovix — Thế giới đồ chơi công nghệ">
            <img
              src="/logo-wordmark.png"
              alt="Robovix — Thế giới đồ chơi công nghệ"
              className="logo__img"
              width="200"
              height="52"
            />
          </a>

          <form className="header__search" onSubmit={handleSearch} role="search">
            <input
              type="search"
              name="q"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('header.searchPlaceholder')}
              aria-label={t('header.searchAria')}
            />
            <button type="submit" className="header__search-btn">
              {t('header.search')}
            </button>
          </form>

          <div className="header__actions">
            <a
              href="#shop"
              className="header__icon-btn"
              aria-label={t('header.wishlist')}
              title={t('header.wishlistTitle')}
            >
              <span aria-hidden="true">♡</span>
              <span className="header__badge">0</span>
            </a>
            <a
              href="#shop"
              className="header__icon-btn"
              aria-label={t('header.cart')}
              title={t('header.cartTitle')}
            >
              <span aria-hidden="true">🛒</span>
              <span className="header__badge">0</span>
            </a>
          </div>

          <button
            type="button"
            className={`burger ${open ? 'burger--open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label={t('header.menu')}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={`header__nav ${open ? 'header__nav--open' : ''}`}>
        <div className="container header__nav-inner">
          <nav className="nav" aria-label={t('nav.mainMenu')}>
            {links.map((l) => (
              <a
                key={l.href + l.label}
                href={l.href}
                className={`nav__link${l.href === '#' ? ' nav__link--active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="header__meta">
            <div className="header__social" aria-label={t('nav.social')}>
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  className={`header__social-link header__social-link--${s.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <span className="header__meta-sep" aria-hidden="true" />

            <div className="header__lang" ref={langRef}>
              <button
                type="button"
                className={`header__lang-btn${langOpen ? ' header__lang-btn--open' : ''}`}
                aria-label={t('nav.language')}
                aria-expanded={langOpen}
                aria-haspopup="listbox"
                onClick={() => setLangOpen((v) => !v)}
              >
                <span className="header__lang-icon">{currentLang.icon}</span>
                <span className="header__lang-code">{currentLang.short}</span>
                <span className="header__lang-caret" aria-hidden="true">▾</span>
              </button>

              {langOpen && (
                <ul className="header__lang-menu" role="listbox" aria-label={t('nav.languages')}>
                  {languageOptions.map((l) => (
                    <li key={l.id} role="option" aria-selected={l.id === lang}>
                      <button
                        type="button"
                        className={`header__lang-option${l.id === lang ? ' header__lang-option--active' : ''}`}
                        onClick={() => selectLang(l.id)}
                      >
                        <span className="header__lang-icon">{l.icon}</span>
                        <span>{l.id === 'vi' ? t('header.langVi') : t('header.langEn')}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
