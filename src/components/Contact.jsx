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
          <span className="section__tag">Đặt hàng</span>
          <h2 className="section__title">Liên hệ để đặt mua xe RC</h2>
          <p className="section__desc">
            Điền form bên dưới, chúng tôi sẽ gọi lại xác nhận đơn hàng, tư vấn mẫu xe và báo thời gian giao hàng.
          </p>
          <ul className="contact__perks">
            <li>🚚 Giao hàng toàn quốc trong 48h (nội thành)</li>
            <li>🔧 Bảo hành 12 tháng chính hãng</li>
            <li>💬 Tư vấn miễn phí, không mua vẫn được hỗ trợ</li>
          </ul>
        </div>

        {submitted ? (
          <div className="contact__success">
            <span className="contact__success-icon">✅</span>
            <h3>Đã nhận yêu cầu!</h3>
            <p>Chúng tôi sẽ liên hệ trong vòng 24 giờ để xác nhận đơn hàng.</p>
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
                <option value="combat">Xe chiến đấu</option>
                <option value="bundle">Combo / gói tiết kiệm</option>
                <option value="advice">Cần tư vấn chọn xe</option>
              </select>
            </label>
            <button type="submit" className="btn btn--primary btn--lg btn--block">
              Gửi Yêu Cầu
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
