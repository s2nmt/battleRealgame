export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="logo__text">
            Battle<span className="logo__accent">Real</span>
          </span>
          <p>Chuyên bán xe điều khiển từ xa RC — giao hàng toàn quốc</p>
        </div>
        <div className="footer__links">
          <a href="#how">Cách mua</a>
          <a href="#shop">Sản phẩm</a>
          <a href="#bundles">Combo</a>
          <a href="#contact">Liên hệ</a>
        </div>
        <p className="footer__copy">© 2026 Battle Real. Bán xe RC chính hãng — Bảo hành 12 tháng.</p>
      </div>
    </footer>
  );
}
