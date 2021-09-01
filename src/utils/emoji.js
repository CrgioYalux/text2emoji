import { emojis } from '../data/emojis';
import { getRandomInt } from './random';

export const matchEmoji = (word) => {
	let emojiCode;
	const matches = emojis.filter(
		(e) => e.name?.slice(0, 1).toLowerCase() === word.slice(0, 1).toLowerCase(),
	);
	if (matches.length === 0) {
		return '';
	} else {
		let emoji;
		if (matches.length > 1) {
			let index = getRandomInt(0, matches.length);
			emoji = matches[index];
		} else if (matches.length === 1) {
			emoji = matches[0];
		}
		emojiCode = emoji.code;
		if (emojiCode.length === 1) {
			return emoji.name;
		}
	}
	return String.fromCodePoint(emojiCode.replace('U+', '0x'));
};

export const textToEmoji = (text) => {
	return [...text]
		.map((letter) => (letter !== ' ' ? matchEmoji(letter) : ' '))
		.join('')
		.toString();
};
