import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MemoryGame from "./components/Memory-game.jsx";
import PokeApiInterface from "./Pokeapi-interface.js";

// use css to animate shuffles? would need to wait for animation before rerender during a shuffle somehow though...

// should have wrote api calls to be in components, the separate interface was a bad idea.

const pokemon = new PokeApiInterface();
await pokemon.init(); // could handle errors, but realistically entire page is broken anyway if cant get card list
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MemoryGame cardList={pokemon.cardList} deckSize={12}></MemoryGame>
  </StrictMode>
);
