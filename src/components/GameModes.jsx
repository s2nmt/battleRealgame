import { gameModes } from '../data/products';

export default function GameModes() {
  return (
    <section id="modes" className="section">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Chế độ chơi</span>
          <h2 className="section__title">Đấu thật trên sân — không phải trên màn hình</h2>
          <p className="section__desc">
            Mỗi trận đấu là cuộc chiến thực sự giữa những chiếc xe điều khiển từ xa. Bạn ngồi tại khu
            cabin, điều khiển xe thật và cạnh tranh với người chơi khác.
          </p>
        </div>

        <div className="modes-grid">
          {gameModes.map((mode) => (
            <article key={mode.id} className="mode-card">
              <div className="mode-card__icon">{mode.icon}</div>
              <h3 className="mode-card__title">{mode.title}</h3>
              <p className="mode-card__desc">{mode.description}</p>
              <span className="mode-card__players">{mode.players}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
