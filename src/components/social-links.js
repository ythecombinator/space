//	Components
import SocialLink from '../components/social-link';

const SocialLinks = ({socialNetworks}) => (

	<div className="social-links-list">

		{ socialNetworks.map((socialNetwork) =>
			(<SocialLink key= {`${socialNetwork.name}`} socialNetwork = {socialNetwork}/>)
		)}

		<style jsx global>{`

			.social-links-list {
				margin-top: 60px;
				margin-left: -13px;
			}

			.social-links-list a {
				border: 0;
				margin-right: 20px;
				display: inline-block;
				width: 48px;
				height: 48px;
				line-height: 48px;
				font-size: 32px;
				text-align: center;
			}

			.social-links-list a:hover {
				border: 0;
			}

			.social-links-list i {
				color: #aaa;
				transition: transform 250ms ease, color 250ms linear;
				transform: scale(0.7);
			}

			.social-links-list a:hover i {
				color: #3d8;
				transition: transform 100ms ease;
				transform: scale(1);
			}

			.social-links-list, .social-links-list a, ol, p, ul {
				transition: all 250ms ease;
			}

			@media (max-width: 768px) {
				.social-links-list {
					text-align: center;
					margin-top: 40px;
				}
				.social-links-list a {
					margin-right: 0;
				}
			}

			@media (max-width: 468px) {
				.social-links-list {
					text-align: center;
					margin-top: 20px;
				}
				.social-links-list a {
					margin-right: 0;
				}
			}

		`}</style>

	</div>
);

export default SocialLinks;
