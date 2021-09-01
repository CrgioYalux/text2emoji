import './CopyToClipboardBT.css';
import { copyToClipboard } from '../utils/clipboard';
import { useState, useEffect, useRef } from 'react';
export const CopyToClipboardBt = ({ text }) => {
	const [tooltipText, setTooltipText] = useState('Copy to clipboard');
	const tooltip = useRef(null);
	useEffect(() => {
		if (tooltipText === 'Copied!') {
			tooltip.current.style.display = 'grid';
			tooltip.current.style.animation = 'nowyouseeme 1s ease-out';
			setTimeout(() => {
				tooltip.current.style.display = 'none';
				tooltip.current.style.animation = '';
				setTooltipText('Copy to clipboard');
			}, 800);
		}
	});
	if (!text) return '';
	return (
		<div className="clipboard-container">
			<button
				className="clipboard-button clipboard-button-desk"
				onClick={() => {
					copyToClipboard(text);
					setTooltipText('Copied!');
				}}
			>
				<i className="clipboard-icon far fa-copy"></i>
			</button>
			<div className="tooltip" ref={tooltip}>
				{tooltipText}
			</div>
		</div>
	);
};
