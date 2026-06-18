import { useState } from 'react';

const links = [
  { href: '#arena', label: 'Sân Chơi' },
  { href: '#modes', label: 'Chế Độ Chơi' },
  { href: '#packages', label: 'Bảng Giá' },
  { href: '#shop', label: 'Mua Xe' },
  { href: '#contact', label: 'Đăng Ký' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#" className="logo">
          <span className="logo__bolt">⚡</span>
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
            Đặt Lịch Chơi
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
