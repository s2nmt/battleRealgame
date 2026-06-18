export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="logo__text">
            Battle<span className="logo__accent">Real</span>
          </span>
          <p>Sân chơi game xe điều khiển từ xa thực tế</p>
        </div>
        <div className="footer__links">
          <a href="#arena">Sân chơi</a>
          <a href="#packages">Bảng giá</a>
          <a href="#shop">Mua xe</a>
          <a href="#contact">Liên hệ</a>
        </div>
        <p className="footer__copy">© 2026 Battle Real Game. Đang xây dựng — Sắp khai trương.</p>
      </div>
    </footer>
  );
}
