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
        <a href="#" className="logo">
          <span className="logo__bolt">BR</span>
          <span className="logo__text">
            Battle<span className="logo__accent">Real</span>
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
