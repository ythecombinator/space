//	Utilities
import {
	last,
	find,
	propEq,
	filter
} from 'ramda';
import {toAvailableOnes} from '../helpers/icons';

//	Data Source
import data from '../data';

//	Layouts
import Page from '../layouts/page';

//	Components
import Title from '../components/title';
import Content from '../components/content';
import { PureComponent } from 'react';

const {
	alias,
	interests,
	experiences,
	bio,
	communities,
	social
} = data;
const activityDataSource = find(propEq('name', 'wakatime'))(data.social);
const socialLinks = filter(toAvailableOnes, social);

const index = class extends PureComponent {

	componentDidMount() {
		if ("serviceWorker" in navigator) {
			navigator.serviceWorker.register("/sw.js")
				.then(() => {
					console.info('Hey there 🙋! Content is now available offline!');
				})
				.catch(err => {
					console.warn(err);
				});
		}
	}

	render() {
		return (
			<Page data = {data} >
				<Title name = {alias} />
				<Content
					alias = {alias}
					social = {socialLinks}
					communities = {communities}
					interests = {interests}
					description = {bio}
					currentJob = {last(experiences)}
					activity = {activityDataSource}
				/>
			</Page>
		);
	}
};

export default index;
