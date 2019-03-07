import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../../styles/tooltip.css';

const ToolTip = ({ message, children }) => {
	const [display, setDisplay] = useState(false);
	return (
		<span className='tooltip'
			onMouseLeave={() => setDisplay(false)}
		>
			{display &&
				<div className={'tooltip-bubble'}>
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

ToolTip.propTypes = {
	message: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
	children: PropTypes.element.isRequired
};

export default ToolTip;