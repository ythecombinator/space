import fs from 'fs';
import path from 'path';

const pipe =
  <T>(...fns: Array<(arg: T) => T>) =>
  (value: T) =>
    fns.reduce((acc, fn) => fn(acc), value);

const flattenArray = <T>(input: Array<T | T[]>): T[] =>
  input.reduce(
    (acc, item) => [...acc, ...(Array.isArray(item) ? item : [item])],
    []
  );

const map =
  <T, U>(fn: (x: T) => U) =>
  (input: T[]): U[] =>
    input.map(fn);

const walkDir = (fullPath: string) => {
  return fs.statSync(fullPath).isFile()
    ? fullPath
    : getAllFilesRecursively(fullPath);
};

const pathJoinPrefix = (prefix: string) => (extraPath: string) =>
  path.join(prefix, extraPath);

export const getAllFilesRecursively = (folder: string): string[] =>
  pipe(
    fs.readdirSync,
    map(pipe(pathJoinPrefix(folder), walkDir)),
    flattenArray
  )(folder);
