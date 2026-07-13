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
          <h2 className="section__title">Liên hệ đặt mua sản phẩm tự thiết kế</h2>
          <p className="section__desc">
            Điền form bên dưới — chúng tôi sẽ gọi lại tư vấn mẫu xe tăng, xe đua hoặc đồ chơi điện tử phù hợp.
          </p>
          <ul className="contact__perks">
            <li>🎨 100% sản phẩm tự thiết kế, độc quyền Battle Real</li>
            <li>🚚 Giao hàng toàn quốc trong 48h (nội thành)</li>
            <li>🔧 Bảo hành 12 tháng, hỗ trợ kỹ thuật miễn phí</li>
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
                <option value="racing">Xe đua RC (tự thiết kế)</option>
                <option value="tank">Xe tăng RC (tự thiết kế)</option>
                <option value="electronic">Đồ chơi điện tử</option>
                <option value="bundle">Combo / gói tiết kiệm</option>
                <option value="bulk">Đặt số lượng lớn</option>
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
