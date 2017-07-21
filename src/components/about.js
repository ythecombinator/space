//	Utilities
import {getRandomEmoji} from '../helpers/emojis';

const About = () => (
	<p>
		{`${getRandomEmoji('about').data}`}
		{"Hi folks! I'm just another constantly evolving "}
		<s>{"web wizard who doesn't know nothing about sketching; as you can see"}</s>
		{" full-stack developer draft who inhabits this world."}
	</p>
);

export default About;
