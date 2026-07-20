import { useState } from 'react';

const links = [
  { href: '#categories', label: 'Danh Mục' },
  { href: '#shop', label: 'Sản Phẩm' },
  { href: '#how', label: 'Thiết Kế' },
  { href: '#bundles', label: 'Combo' },
  { href: '#contact', label: 'Liên Hệ' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#" className="logo" aria-label="Robovix Studio">
          <span className="logo__mark" aria-hidden="true">
            <span className="logo__name">
              R
              <span className="logo__o">
                <svg viewBox="0 0 32 32" className="logo__gear" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M14.2 2.2h3.6l.5 3.1c.9.2 1.7.6 2.5 1.1l2.7-1.6 2.5 2.5-1.6 2.7c.5.8.9 1.6 1.1 2.5l3.1.5v3.6l-3.1.5c-.2.9-.6 1.7-1.1 2.5l1.6 2.7-2.5 2.5-2.7-1.6c-.8.5-1.6.9-2.5 1.1l-.5 3.1h-3.6l-.5-3.1c-.9-.2-1.7-.6-2.5-1.1l-2.7 1.6-2.5-2.5 1.6-2.7c-.5-.8-.9-1.6-1.1-2.5l-3.1-.5v-3.6l3.1-.5c.2-.9.6-1.7 1.1-2.5L6.4 7.3l2.5-2.5 2.7 1.6c.8-.5 1.6-.9 2.5-1.1l.5-3.1zM16 11a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2.4a2.6 2.6 0 1 1 0 5.2 2.6 2.6 0 0 1 0-5.2z"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
              BOVIX
            </span>
            <span className="logo__sub">STUDIO</span>
          </span>
        </a>

        <nav className={`nav ${open ? 'nav--open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav__link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--primary btn--sm" onClick={() => setOpen(false)}>
            Đăng Ký Sớm
          </a>
        </nav>

        <button
          type="button"
          className={`burger ${open ? 'burger--open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
