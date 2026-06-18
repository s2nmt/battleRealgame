import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section section--dark">
      <div className="container contact">
        <div className="contact__info">
          <span className="section__tag">Đăng ký sớm</span>
          <h2 className="section__title">Sân chơi đang xây dựng — Đăng ký để được ưu tiên</h2>
          <p className="section__desc">
            Để lại thông tin để nhận thông báo khai trương, ưu đãi early bird và đặt lịch chơi sớm nhất.
          </p>
          <ul className="contact__perks">
            <li>🎁 Giảm 30% gói chơi đầu tiên</li>
            <li>🎯 Ưu tiên slot giờ vàng khai trương</li>
            <li>🏆 Mời tham gia giải đấu khai mạc</li>
          </ul>
        </div>

        {submitted ? (
          <div className="contact__success">
            <span className="contact__success-icon">✅</span>
            <h3>Đã nhận đăng ký!</h3>
            <p>Chúng tôi sẽ liên hệ khi sân chơi sẵn sàng khai trương.</p>
          </div>
        ) : (
          <form className="contact__form" onSubmit={handleSubmit}>
            <label>
              Họ và tên
              <input type="text" name="name" required placeholder="Nguyễn Văn A" />
            </label>
            <label>
              Số điện thoại
              <input type="tel" name="phone" required placeholder="0901 234 567" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="email@example.com" />
            </label>
            <label>
              Bạn quan tâm
              <select name="interest" defaultValue="play">
                <option value="play">Đến chơi tại sân</option>
                <option value="party">Đặt tiệc / team building</option>
                <option value="buy">Mua xe mang về</option>
                <option value="all">Tất cả</option>
              </select>
            </label>
            <button type="submit" className="btn btn--primary btn--lg btn--block">
              Đăng Ký Ngay
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
