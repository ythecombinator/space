export const randomElement = <T>(arr: Array<T>) =>
  arr[Math.floor(Math.random() * arr.length)];

export const shuffleItems = <T>(arr: T[]) => {
  return [...arr].sort(() => Math.random() - 0.5);
};

export const reversedIndexOf = (length: number, index: number) => {
  if (index === -1) {
    return -1;
  }

  return length - index;
};

export const isEmpty = <T>(arr: T[]) => {
  if (!Array.isArray(arr)) {
    return false;
  }

  if (arr.length == 0) {
    return true;
  }

  return false;
};
