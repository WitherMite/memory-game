export default function Scoreboard({ score, topScore }) {
  return (
    <div className="scoreboard">
      <p className="current-score">
        <b>Current Score:</b> {score}
      </p>
      <p className="best-score">
        <b>Best Score:</b> {topScore}
      </p>
    </div>
  );
}
