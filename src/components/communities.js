//	Utilities
import {
	find,
	propEq
} from 'ramda';
import { getRandomEmoji } from '../helpers/emojis';

//	Data Source
import { social } from '../data';

const Communities = ({events}) => (
	<div>
		<p>

			{`${getRandomEmoji('community')} I also try to be as active as possible at local communities like `}

			{events.map((event) => (
				<a key= {`${event.name}`} href={event.link} target="_blank">
					{` ${event.name}, `}
				</a>
			))}

			{"and many others!"}
		</p>

		<p>
			{ `${getRandomEmoji('speaking')} In addition to attending and organizing meetups and conferences, I really like to bring cool things to where I'm invited to speak! If you want  to see some of my lectures, `}

			<a href={find(propEq('name', 'speakerdeck'))(social).link} target="_blank">
				{" here "}
			</a>

			{"they are."}
		</p>

	</div>
);

export default Communities;
