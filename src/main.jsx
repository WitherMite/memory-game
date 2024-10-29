import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MemoryGame from "./components/Memory-game.jsx";
import PokeApiInterface from "./Pokeapi-interface.js";

// use css to animate shuffles? would need to wait for animation before rerender during a shuffle somehow though...

const pokemon = new PokeApiInterface();
await pokemon.init();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MemoryGame cardList={pokemon.cardList} deckSize={12}></MemoryGame>
  </StrictMode>
);
