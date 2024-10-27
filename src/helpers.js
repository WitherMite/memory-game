function shuffleArr(array) {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const index = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[index]] = [newArr[index], newArr[i]];
  }
  return newArr;
}

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

export { cardList, shuffleArr };
