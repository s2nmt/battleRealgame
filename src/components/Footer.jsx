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
          <p>Thiết kế, chỉnh sửa và hoàn thiện bởi Robovix Studio — Đang chuẩn bị mở bán</p>
        </div>
        <div className="footer__links">
          <a href="#shop">Sản phẩm</a>
          <a href="#how">Thiết kế</a>
          <a href="#contact">Liên hệ</a>
        </div>
        <p className="footer__copy">© 2026 Robovix Studio. Thiết kế — Chỉnh sửa — Hoàn thiện.</p>
      </div>
    </footer>
  );
}
