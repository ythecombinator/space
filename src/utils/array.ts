const shuffleItems = <T>(items: T[]) => {
  return items.sort(() => Math.random() - 0.5);
};

export { shuffleItems };
