import { useState } from "react";
import Scoreboard from "./Scoreboard.jsx";
import CardTable from "./Card-table.jsx";
import { shuffleArr } from "../helpers.js";

export default function MemoryGame({ deckSize, cardList }) {
  const [pickedCardIds, setPickedCardIds] = useState([]);
  const [cards, setCards] = useState(getCards());
  const [topScore, setTopScore] = useState(0);
  const [score, setScore] = useState(0);
  const remainingCards = cards.filter(
    (card) => !pickedCardIds.includes(card.id)
  );

  function getCards(pickId, getNew) {
    const newCards = shuffleArr(cardList);
    if (!getNew) return newCards.slice(0, deckSize);
    // ensure at least one card is new
    const uniqueCardIndex = newCards.findIndex(
      (card) => !pickedCardIds.includes(card.id) && pickId !== card.id
    );
    if (uniqueCardIndex === -1) return [];
    const [uniqueCard] = newCards.splice(uniqueCardIndex, 1);
    return [...newCards.slice(0, deckSize - 1), uniqueCard];
  }

  function resetGame() {
    score > topScore && setTopScore(score);
    setCards(getCards());
    setPickedCardIds([]);
    setScore(0);
  }

  function nextRound(pickId) {
    const newScore = score + 1;
    newScore > topScore && setTopScore(newScore);
    if (remainingCards.length <= 1) {
      const newCards = getCards(pickId, true);
      if (newCards.length === 0) return resetGame();
      setCards(newCards);
    }
    setScore(newScore);
  }

  function pickCard(id) {
    if (pickedCardIds.includes(id)) {
      resetGame();
    } else {
      setPickedCardIds([...pickedCardIds, id]);
      nextRound(id);
    }
  }

  return (
    <main className="memory-game">
      <header className="Title">
        <h1>Memory Game</h1>
        <p>
          Pick a card. If you haven&apos;t chose that card before, gain a point.
          Max score: {cardList.length}
        </p>
      </header>
      <Scoreboard score={score} topScore={topScore}></Scoreboard>
      <CardTable cards={cards} handleChoice={pickCard}></CardTable>
    </main>
  );
}
