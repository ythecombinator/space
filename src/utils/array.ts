export const randomElement = <T>(arr: Array<T>) =>
  arr[Math.floor(Math.random() * arr.length)];

export const shuffleItems = <T>(arr: T[]) => {
  return [...arr].sort(() => Math.random() - 0.5);
};
