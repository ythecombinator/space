export const randomElement = <T>(arr: Array<T>) =>
  arr[Math.floor(Math.random() * arr.length)];
