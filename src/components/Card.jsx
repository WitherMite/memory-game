export default function Card({ imgUrl, title, description }) {
  return (
    <div className="game-card">
      <img src={imgUrl} alt="" className="game-card-img" />
      <h3 className="game-card-title">{title}</h3>
      <p className="game-card-description">{description}</p>
    </div>
  );
}
