const getRandomItem = <T>(items: T[]) => {
  return items[Math.floor(Math.random() * items.length)];
};

const shuffleItems = <T>(items: T[]) => {
  return items.sort(() => Math.random() - 0.5);
};

export { getRandomItem, shuffleItems };
