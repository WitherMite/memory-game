import Scoreboard from "./Scoreboard.jsx";
import CardTable from "./Card-table.jsx";

export default function MemoryGame() {
  return (
    <main className="memory-game">
      <header className="Title">
        <h1>Memory Game</h1>
        <p>Instructions...</p>
      </header>
      <Scoreboard score={6} topScore={12}></Scoreboard>
      <CardTable></CardTable>
    </main>
  );
}
