//	Utilities
import { colors } from '../helpers/constants';

//	Components
import Signature from '../components/signature';
import SocialLinks from '../components/social-links';
import Communities from '../components/communities';
import Interests from '../components/interests';
import About from '../components/about';
import Job from '../components/job';
import Hero from '../components/hero';

const Content = ({social, communities, interests, currentJob, activity, alias}) => (

    <div className="content">

		<Hero
			name="me"
			source="../static/ythecombinator.svg"
			color= {colors.hero}
			strokeWidth = {5}
			duration = {700}
			animation = {{
				type: "async",
				pathTiming: "EASE_IN",
				animTiming: "EASE_OUT_BOUNCE"
			}}
		/>

		<About />

		<Job job = {currentJob} activity = {activity}/>

		<Interests interests = {interests} />

		<Communities events = {communities} />

		<SocialLinks socialNetworks = {social} />

		<Signature name = {alias} />

		<style jsx global>{`

			@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,700');

			html, body {
				margin: 0;
				padding: 0;
			}

			body {
				cursor: default;
				font-family: source sans pro, sans-serif;
				font-weight: 300;
				background: ${colors.background};
				color: ${colors.text.regular};
				font-size: 19px;
				line-height: 1.6;
			}

			a {
				color: ${colors.links.regular.text};
				text-decoration: none;
				border-bottom: solid 1px ${colors.links.regular.border};
				transition: color 250ms linear;
			}

			a:hover {
				color: ${colors.links.highlighted.text};
				border-bottom: solid 1px ${colors.links.highlighted.border};
				transition: color 500ms linear;
			}

			ul, ol, p {
				margin: 1.5em 0;
			}

			strong {
				color: ${colors.text.highlighted};
				font-weight: bold;
			}

			body, .content, ul, ol, p {
				transition: all 250ms ease;
			}

			@media (max-width: 768px) {

				body {
					font-size: 16px;
					line-height: 1.6;
				}

				ul, ol, p {
					margin: 1.35em 0;
				}
			}

			@media (max-width: 468px) {

				body {
					font-size: 15px;
					line-height: 1.6;
					color: #222;
				}

				a {
					color: #111;
				}

				ul, ol, p {
					margin: 1.25em 0;
				}

			}

		`}</style>

    </div>
);

export default Content;
