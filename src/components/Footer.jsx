export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="logo">
            <img src="/favicon.svg" alt="" className="logo__icon" width="36" height="36" />
            <span className="logo__text">
              Robovix <span className="logo__accent">Studio</span>
            </span>
          </span>
          <p>Xe tăng, xe đua & đồ chơi điện tử do chúng tôi thiết kế — Đang chuẩn bị mở bán</p>
        </div>
        <div className="footer__links">
          <a href="#categories">Danh mục</a>
          <a href="#shop">Sản phẩm</a>
          <a href="#how">Thiết kế</a>
          <a href="#contact">Liên hệ</a>
        </div>
        <p className="footer__copy">© 2026 Robovix Studio. Chúng tôi thiết kế — Đang chuẩn bị mở bán.</p>
      </div>
    </footer>
  );
}
