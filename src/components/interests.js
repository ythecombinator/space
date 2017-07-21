//	Utilities
import {
	dropLast,
	last
} from 'ramda';
import { getRandomEmoji } from '../helpers/emojis';

const Interests = ({interests}) => (
	<p>
		{`${getRandomEmoji('interests').data}`} My passions include: {dropLast(1, interests).map((interest) => (
			` ${interest}, `
		))}

		{` and ${last(interests)}.`}
	</p>
);

export default Interests;
