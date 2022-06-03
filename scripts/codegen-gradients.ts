import fetch from 'node-fetch';
import { exec } from 'node:child_process';
import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { promisify } from 'node:util';

/*~
 * TYPES
 */

type Color = {
  name: string;
  colors: Array<string>;
};

/*~
 * CONSTANTS
 */

const SRC_URL =
  'https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json';

const DEST_PATH = resolve('./src/styles/gradients.ts');

const settings = { method: 'Get' };

/*~
 * UTILS
 */

const run = promisify(exec);

/*~
 * CORE
 */

const codegenGradients = async () => {
  try {
    const res = await fetch(SRC_URL, settings);
    const rawColorsData = (await res.json()) as Color[];

    const colorsData = rawColorsData
      .filter((colorInfo) => colorInfo.colors.length === 2)
      .slice(0, 50)
      .map((colorInfo) => colorInfo.colors);

    const fileContents = `
    export const gradients = ${JSON.stringify(colorsData)};
    export default gradients;`;

    await writeFile(DEST_PATH, fileContents);
    await run(`prettier --write ${DEST_PATH}`);
  } catch (err) {
    console.log(err);
  }
};

codegenGradients();
