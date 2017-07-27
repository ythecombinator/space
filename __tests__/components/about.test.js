/* eslint-env jest */

import { shallow } from 'enzyme';

import About from '../../src/components/about';

describe('<About /> Component', () => {

  	it('paragraph contains bio intro', () => {
    	const wrapper = shallow(<About />);
		const expectedOutput = "Hi folks! I'm just another constantly evolving web wizard who doesn't know nothing about sketching; as you can see full-stack developer draft who inhabits this world.";

		expect(wrapper.find('p').text()).toEqual(expect.stringContaining(expectedOutput));
	});

});
