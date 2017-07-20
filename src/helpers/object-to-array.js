//	Utilities
import {
	compose,
	map,
	zipObj,
	toPairs
} from 'ramda';

const objectToArray = compose(map(zipObj(['id', 'data'])), toPairs);

export default objectToArray;
