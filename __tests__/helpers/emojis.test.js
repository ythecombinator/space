/* eslint-env jest */

//	Utilities
import random from 'unique-random-array';
import emojiTree from 'emoji-tree';
import { find, propEq } from 'ramda';
import convert from '../../src/helpers/object-to-array';

//	To Be Tested
import emojis, { getRandomEmoji, toEmojiRepresentation } from '../../src/helpers/emojis';

describe('toEmojiRepresentation()', () => {

	const { hi } = emojis;

  	it('returns an array', () => {
		expect(toEmojiRepresentation(convert(hi))).toBeInstanceOf(Array);
	});

  	it('returns a non-empty array', () => {
		expect(toEmojiRepresentation(convert(hi)).length).toBeGreaterThan(0);
	});

});

describe('emojis', () => {

	const { hi, work, heart, people, speaking } = emojis;

  	it('none of them are empty', () => {

		it('`hi` emojis object is not empty', () => {
			expect(Object.keys(hi).length).toBeGreaterThan(0);
		});

		it('`work` emojis object is not empty', () => {
			expect(Object.keys(work).length).toBeGreaterThan(0);
		});

		it('`heart` emojis object is not empty', () => {
			expect(Object.keys(heart).length).toBeGreaterThan(0);
		});

		it('`people` emojis object is not empty', () => {
			expect(Object.keys(people).length).toBeGreaterThan(0);
		});

		it('`speaking` emojis object is not empty', () => {
			expect(Object.keys(speaking).length).toBeGreaterThan(0);
		});
	});
});

describe('getRandomEmoji()', () => {

	const hasEmojiIn = string =>
		Boolean(find(propEq('type', 'emoji'))(emojiTree(string)));

  	it('returns a valid string', () => {

		const types = ['about', 'job', 'interests', 'community', 'speaking'];
		const input = random(types)();

		expect(typeof getRandomEmoji(input)).toBe('string');
	});

  	it('returns a valid emoji string', () => {

		const types = ['about', 'job', 'interests', 'community', 'speaking'];
		const input = random(types)();

		expect(hasEmojiIn(getRandomEmoji(input))).toBe(true);
	});

});
