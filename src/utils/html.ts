const { replace } = '';

const escapeRegex = /[&<>'"]/g;

const charDictionary = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&#39;',
  '"': '&quot;',
};

const escape = (char: keyof typeof charDictionary) => charDictionary[char];

export const escapeHTML = (input: string): string =>
  replace.call(input, escapeRegex, escape);
