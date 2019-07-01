const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloat = (min: number, max: number) => {
  return (Math.random() * (min - max) + min).toFixed(1);
};

export { getRandomFloat, getRandomInt };
