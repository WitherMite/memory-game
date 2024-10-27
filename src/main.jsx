import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MemoryGame from "./components/Memory-game.jsx";

// get pokemon name/images from api (seems best to get whole pokemon list and keep in local storage); https://pokeapi.co/docs/v2#info

// once no more visible unique cards, get max/some# new ones to replace randomly

// use css to animate shuffles? would need to wait for animation before rerender during a shuffle somehow though...

// MemoryGame(has to contain state/effects since all reactive components will need them and the gamestate is interconnected) >
//   Title + Scoreboard + CardTable >
//     Card

// temp, should get from api
const cardList = [
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
  {
    id: 3,
    title: "Fourth card",
    description: "This is the fourth card",
    imgUrl: "https://picsum.photos/199",
  },
  {
    id: 4,
    title: "Fifth card",
    description: "This is the fifth card",
    imgUrl: "https://picsum.photos/198",
  },
  {
    id: 5,
    title: "Sixth card",
    description: "This is the Sixth card",
    imgUrl: "https://picsum.photos/203",
  },
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MemoryGame cardList={cardList} deckSize={3}></MemoryGame>
  </StrictMode>
);
