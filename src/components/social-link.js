//	Components
import Icon from './social-icon';

const SocialLink = ({socialNetwork}) => (
    <a href={socialNetwork.link} target="_blank" rel="noopener">
        <Icon identifier={socialNetwork.name} />
    </a>
);

export default SocialLink;
