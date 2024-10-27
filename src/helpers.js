function shuffleArr(array) {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const index = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[index]] = [newArr[index], newArr[i]];
  }
  return newArr;
}

export { shuffleArr };
