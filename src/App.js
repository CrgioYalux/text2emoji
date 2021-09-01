import './App.css';
import { useState, useEffect } from 'react';
import { textToEmoji } from './utils/emoji';
import { CopyToClipboardBt } from './components/CopyToClipboardBT';

const App = () => {
	const [inputText, setInputText] = useState('');
	const [textInEmoji, setTextInEmoji] = useState('');
	useEffect(() => {
		setTextInEmoji(textToEmoji(inputText));
	}, [inputText]);
	return (
		<div className="App">
			<div className="emoji-container" id="emoji-container">
				<p>{textInEmoji}</p>
				<CopyToClipboardBt text={textInEmoji} />
			</div>
			<textarea
				className="text-input"
				value={inputText}
				placeholder="Mucho texto"
				autoFocus
				onChange={(e) => {
					setInputText(e.target.value);
				}}
			/>
		</div>
	);
};

export default App;
