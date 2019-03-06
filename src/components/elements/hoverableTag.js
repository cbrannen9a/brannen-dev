import React from 'react';
import { Tag } from 'rbx';
import BlockContent from '@sanity/block-content-to-react';
import ToolTip from './toolTip';

const HoverableTag = ({ title, description }) => (
	<div style={{ margin: '4px' }}>
		<ToolTip
			direction={'bottom'}
			message={<BlockContent blocks={description} />}>
			<Tag>
				{title}
			</Tag>
		</ToolTip>
	</div>
);

export default HoverableTag;