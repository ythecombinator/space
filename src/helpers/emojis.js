//	Utilities
import convert from './object-to-array';
import random from 'unique-random-array';

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

const getRandomEmoji = type => {
	const emojis = {
		'about'() {
			return random(convert(hi))();
		},
		'job'() {
			return random(convert(work))();
		},
		'interests'() {
			return random(convert(heart))();
		},
		'community'() {
			return random(convert(people))();
		},
		'speaking'() {
			return random(convert(speaking))();
		}
	};
	return emojis[type]();
};

export default emojis;
export {getRandomEmoji};
