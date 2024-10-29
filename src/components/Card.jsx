import { useState, useEffect } from "react";

export default function Card({ onClick, ...card }) {
  const [details, setDetails] = useState([card.imgUrl, card.description]);
  useEffect(() => {
    (async () => {
      if (!details[0] || !details[1]) {
        setDetails(await card.getDetails());
      }
    })();
  }, [card, details]);

  return (
    <button className="game-card" type="button" onClick={onClick}>
      <img src={details[0]} alt="" className="game-card-img" />
      <h3 className="game-card-title">{card.title}</h3>
      <p className="game-card-description">{details[1]}</p>
    </button>
  );
}
