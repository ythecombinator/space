//	Utilities
import { getRandomEmoji } from '../helpers/emojis';

const Job = ({job, activity}) => (
	<p>
		{ `${getRandomEmoji('job')} I'm currently working as an ${job.role} at a ${job.description} called ${job.company.name}–if you want even more accurate data on my programming activity, check`}
		<a href={activity.link} target="_blank">
			{` here.`}
		</a>
	</p>
);

export default Job;
