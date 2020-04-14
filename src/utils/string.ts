const replaceSlashes = (input: string) => {
  return input.replace(/\/\/+/g, `/`);
};

export { replaceSlashes };
