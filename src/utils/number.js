const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloat = (min, max) => {
  return (Math.random() * (min - max) + min).toFixed(1);
};

export { getRandomFloat, getRandomInt };
