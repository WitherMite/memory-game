import { useState, useEffect } from "react";

export default function Card({ onClick, ...card }) {
  const [details, setDetails] = useState([card.imgUrl, card.description]);
  useEffect(() => {
    if (details[0] === null || !details[1]) {
      card
        .getDetails()
        .then((r) => {
          if (badResponse(r)) throw 0;
          setDetails(r);
        })
        .catch(() => {
          setDetails(["", "Could not get card details"]);
        });
    }
  }, [card, details]);

  return (
    <button className="game-card" type="button" onClick={onClick}>
      <img src={details[0]} alt="" className="game-card-img" />
      <h3 className="game-card-title">{card.title}</h3>
      <p className="game-card-description">{details[1]}</p>
    </button>
  );
}

function badResponse(response) {
  return !(
    Array.isArray(response) &&
    response[0] &&
    response[1] &&
    typeof response[0] === "string" &&
    typeof response[1] === "string"
  );
}
