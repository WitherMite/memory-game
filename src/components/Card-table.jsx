import Card from "./Card.jsx";

export default function CardTable({ cards, handleChoice }) {
  const deck = shuffleDeck(cards);
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

// deck size cannot be greater than 20 when using math.random to reach all permutations https://wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#Pseudorandom_generators
function shuffleDeck(deck) {
  const newDeck = [...deck];
  for (let i = newDeck.length - 1; i > 0; i--) {
    const index = Math.floor(Math.random() * (i + 1));
    [newDeck[i], newDeck[index]] = [newDeck[index], newDeck[i]];
  }
  return newDeck;
}
