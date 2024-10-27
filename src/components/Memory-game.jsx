import { useState } from "react";
import Scoreboard from "./Scoreboard.jsx";
import CardTable from "./Card-table.jsx";

export default function MemoryGame({ deckSize }) {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(score);
  const [cards, setCards] = useState(getCards(deckSize));
  const [pickedCardIds, setPickedCardIds] = useState([]);

  function pickCard(id) {
    if (pickedCardIds.includes(id)) {
      // reset game
      score > topScore && setTopScore(score);
      setPickedCardIds([]);
      setScore(0);
      return;
    }
    // continue game
    const newScore = score + 1;
    newScore > topScore && setTopScore(newScore);
    setPickedCardIds([...pickedCardIds, id]);
    setScore(newScore);
  }

  return (
    <main className="memory-game">
      <header className="Title">
        <h1>Memory Game</h1>
        <p>Instructions...</p>
      </header>
      <Scoreboard score={score} topScore={topScore}></Scoreboard>
      <CardTable cards={cards} handleChoice={pickCard}></CardTable>
    </main>
  );
}
// temp
function getCards() {
  return [
    {
      id: 0,
      title: "First card",
      description: "This is the first card",
      imgUrl: "https://picsum.photos/200",
    },
    {
      id: 1,
      title: "Second card",
      description: "This is the second card",
      imgUrl: "https://picsum.photos/201",
    },
    {
      id: 2,
      title: "third card",
      description: "This is the third card",
      imgUrl: "https://picsum.photos/202",
    },
  ];
}
