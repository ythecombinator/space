/* eslint-env jest */

//	To Be Tested
import objectToArray from '../../src/helpers/object-to-array';

describe('objectToArray()', () => {

	const input = {
		'prop1': 'val1',
		'prop2': 'val2',
		'prop3': 'val3'
	};

	const expectedOutput = [
		{ id: 'prop1', data: 'val1' },
        { id: 'prop2', data: 'val2' },
		{ id: 'prop3', data: 'val3' }
	];

  	it('returns an array', () => {
		expect(objectToArray(input)).toBeInstanceOf(Array);
	});

  	it('returns a non-empty array', () => {
		expect(objectToArray(input).length).toBeGreaterThan(0);
	});

  	it('returns expected result', () => {
		expect(objectToArray(input)).toEqual(expectedOutput);
	});

});
