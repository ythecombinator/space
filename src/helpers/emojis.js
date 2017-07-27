//	Utilities
import convert from './object-to-array';
import random from 'unique-random-array';
import { map } from 'ramda';

const emojis = {
	hi: {
		personRaisingHand:'🙋',
		raisedHand:'✋',
		victoryHand:'✌️'
	},
	work:{
		microscope: '🔬',
		technologist:'👨‍💻',
		laptop: '💻',
	},
	heart: {
		red: '❤️',
		green: '💚',
		blue: '💙',
		yellow: '💛',
		purple: '💜',
		black: '🖤',
		beating: '💓',
		growing: '💗',
		revolving: '💞',
		withRibbon: '💝',
		sparkling: '💖',
		withArrow: '💘',
		two: '💕',
		exclamation: '❣️'
	},
	people: {
		busts: '👥'
	},
	speaking: {
		speakingHead: '🗣️',
		leftSpeechBubble:'🗨️',
		rightAngerBubble:'🗯️',
		speechBalloon:'💬',
 		loudspeaker: '📢'
	}
};

const {hi, work, heart, people, speaking} = emojis;

const toEmojiRepresentation = arr =>
	map(elem => elem.data, arr);

const getRandomEmoji = type => {
	const emojis = {
		'about'() {
			return random(toEmojiRepresentation(convert(hi)))();
		},
		'job'() {
			return random(toEmojiRepresentation(convert(work)))();
		},
		'interests'() {
			return random(toEmojiRepresentation(convert(heart)))();
		},
		'community'() {
			return random(toEmojiRepresentation(convert(people)))();
		},
		'speaking'() {
			return random(toEmojiRepresentation(convert(speaking)))();
		}
	};
	return emojis[type]();
};

export default emojis;
export {getRandomEmoji};
