import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MemoryGame from "./components/Memory-game.jsx";

// get pokemon name/images from api (seems best to get whole pokemon list and keep in local storage); https://pokeapi.co/docs/v2#info

// once no more visible unique cards, get max/some# new ones to replace randomly

// use css to animate shuffles? would need to wait for animation before rerender during a shuffle somehow though...

// MemoryGame(has to contain state/effects since all reactive components will need them and the gamestate is interconnected) >
//   Title + Scoreboard + CardTable >
//     Card

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MemoryGame></MemoryGame>
  </StrictMode>
);
