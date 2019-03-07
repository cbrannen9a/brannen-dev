import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'rbx';
import BlockContent from '../blockContent/blockContent';
import ToolTip from '../toolTip/toolTip';

const HoverableTag = ({ title, description }) => (
	<div style={{ marginRight: '4px' }}>
		<ToolTip
			message={<BlockContent blocks={description} />}>
			<Tag>
				{title}
			</Tag>
		</ToolTip>
	</div>
);

HoverableTag.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.array.isRequired
};

export default HoverableTag;