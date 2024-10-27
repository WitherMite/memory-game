export default function Card({ imgUrl, title, description, onClick }) {
  return (
    <button className="game-card" type="button" onClick={onClick}>
      <img src={imgUrl} alt="" className="game-card-img" />
      <h3 className="game-card-title">{title}</h3>
      <p className="game-card-description">{description}</p>
    </button>
  );
}
