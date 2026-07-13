export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="logo__text">
            Battle<span className="logo__accent">Real</span>
          </span>
          <p>Xe tăng, xe đua & đồ chơi điện tử — 100% tự thiết kế tại Việt Nam</p>
        </div>
        <div className="footer__links">
          <a href="#categories">Danh mục</a>
          <a href="#shop">Sản phẩm</a>
          <a href="#how">Tự thiết kế</a>
          <a href="#contact">Liên hệ</a>
        </div>
        <p className="footer__copy">© 2026 Battle Real. Tự thiết kế — Tự sản xuất — Bảo hành 12 tháng.</p>
      </div>
    </footer>
  );
}
