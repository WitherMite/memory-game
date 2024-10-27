import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MemoryGame from "./components/Memory-game.jsx";

// get pokemon name/images from api (seems best to get whole pokemon list and keep in local storage); https://pokeapi.co/docs/v2#info

// use css to animate shuffles? would need to wait for animation before rerender during a shuffle somehow though...

import { cardList } from "./helpers.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MemoryGame cardList={cardList} deckSize={3}></MemoryGame>
  </StrictMode>
);
