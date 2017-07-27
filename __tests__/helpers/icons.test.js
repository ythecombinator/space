/* eslint-env jest */

//	Utilities
import { filter } from 'ramda';
import data from '../../src/data';

//	To Be Tested
import icons, { isAvailable, toAvailableOnes } from '../../src/helpers/icons';

describe('icons', () => {

	it('`icons` object is not empty', () => {
		expect(Object.keys(icons).length).toBeGreaterThan(0);
	});

});

describe('isAvailable()', () => {

	const icons = {
		'instagram': '',
		'twitter': '',
		'linkedin': '',
		'github': ''
	};

	it('returns `true` if available', () => {
		const input = 'twitter';
		const expectedOutput = true;
		expect(isAvailable(input, icons)).toBe(expectedOutput);
	});

	it('returns `false` if not available', () => {
		const input = 'facebook';
		const expectedOutput = false;
		expect(isAvailable(input, icons)).toBe(expectedOutput);
	});

});

describe('isAvailable()', () => {

	it('returns `true` if available', () => {
		const input = 'twitter';
		const expectedOutput = true;
		expect(isAvailable(input, icons)).toBe(expectedOutput);
	});

	it('returns `false` if not available', () => {
		const input = 'facebook';
		const expectedOutput = false;
		expect(isAvailable(input, icons)).toBe(expectedOutput);
	});

});

describe('toAvailableOnes()', () => {

	const input = data.social;
	const expectedOutput =	[{
			"name": "twitter",
			"link": "https://twitter.com/ythecombinator"
		},
		{
			"name": "github",
			"link": "https://github.com/ythecombinator"
		},

		{
			"name": "linkedin",
			"link": "https://linkedin.com/in/ythecombinator"
		},
		{
			"name": "instagram",
			"link": "https://instagram.com/ythecombinator"
		}
	];

  	it('returns an array', () => {
		expect(filter(toAvailableOnes, input)).toBeInstanceOf(Array);
	});

  	it('returns a non-empty array', () => {
		expect(filter(toAvailableOnes, input).length).toBeGreaterThan(0);
	});

	it('returns an array containg only objects whose icons are available', () => {
		expect(filter(toAvailableOnes, input)).toEqual(expectedOutput);
	});

});
