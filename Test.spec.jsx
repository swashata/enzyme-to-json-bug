import React from 'react';
import {mount} from 'enzyme';

import Button from './Button';
import ButtonGroup from './ButtonGroup';

describe('This test will not pass', () => {
	const spy = jest.fn();
	const wrapper = mount(
		<ButtonGroup>
			<Button onClick={spy} />
			<Button onClick={spy} />
			<Button onClick={spy} />
			<Button onClick={spy} />
		</ButtonGroup>
	);

	test('does something on click', () => {
		// Comment this out, i.e do not simulate click
		// and this will pass
		wrapper.find('button').at(0).simulate('click');
		expect(spy).toHaveBeenCalledTimes(1);
	});

	test('matches snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
