import Card from "./Card.jsx";
import { shuffleArr } from "../helpers.js";

export default function CardTable({ cards, handleChoice }) {
  const deck = shuffleArr(cards);
  return (
    <div className="card-table">
      {deck.map((card) => (
        <Card
          key={card.id}
          {...card}
          onClick={() => handleChoice(card.id)}
        ></Card>
      ))}
    </div>
  );
}
