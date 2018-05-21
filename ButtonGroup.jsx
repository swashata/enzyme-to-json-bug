import React from 'react';

const ButtonGroup = props => (
	<div className="button-group">
		{
			React.Children.map(props.children, child =>
				React.cloneElement(child, {
					grouped: true
				})
			)
		}
	</div>
);

export default ButtonGroup;
