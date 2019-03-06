import React, { useState } from 'react';
import '../../styles/tooltip.css';

const ToolTip = ({ message, position, children }) => {
	const [display, setDisplay] = useState(false);
	return (
		<span className='tooltip'
			onMouseLeave={() => setDisplay(false)}
		>
			{display &&
				<div className={`tooltip-bubble tooltip-${position}`}>
					<div className='tooltip-message'>{message}</div>
				</div>
			}
			<span
				className='tooltip-trigger'
				onMouseOver={() => setDisplay(true)}
			>
				{children}
			</span>
		</span>
	);

};

export default ToolTip;