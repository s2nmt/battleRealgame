export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img
            src="/logo-wordmark.png"
            alt="Robovix Studio"
            className="footer__logo"
            width="200"
            height="60"
          />
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
