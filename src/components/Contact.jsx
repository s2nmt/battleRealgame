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
          <h2 className="section__title">Nhận thông báo khi mở bán</h2>
          <p className="section__desc">
            Sản phẩm đang trong giai đoạn chuẩn bị — chưa có giá. Để lại thông tin để được báo khi chính thức mở bán.
          </p>
          <ul className="contact__perks">
            <li>🔔 Ưu tiên nhận tin khi công bố giá & ngày mở bán</li>
            <li>🎨 Sản phẩm do RoVi thiết kế, độc quyền thương hiệu</li>
            <li>🎁 Ưu đãi early bird dành cho người đăng ký sớm</li>
          </ul>
        </div>

        {submitted ? (
          <div className="contact__success">
            <span className="contact__success-icon">✅</span>
            <h3>Đã nhận đăng ký!</h3>
            <p>Chúng tôi sẽ liên hệ khi sản phẩm sẵn sàng mở bán.</p>
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
              <select name="interest" defaultValue="racing">
                <option value="racing">Xe đua RC</option>
                <option value="tank">Xe tăng RC</option>
                <option value="electronic">Đồ chơi điện tử</option>
                <option value="bundle">Combo dự kiến</option>
                <option value="all">Tất cả sản phẩm</option>
              </select>
            </label>
            <button type="submit" className="btn btn--primary btn--lg btn--block">
              Đăng Ký Nhận Tin
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
