import React from 'react';

const Button = props => (
	<button
		onClick={props.onClick}
		className={`button ${props.grouped ? 'is-grouped' : null}`}
	>
		Just a button
	</button>
);

export default Button;
