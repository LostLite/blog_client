import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import {findByTestAttrib} from '../../../utils/'

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
};

describe('Header Component', () =>{

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('It should render without errors', () => {
        //const wrapper = component.find(`[data-test='headerComponent']`);
        const wrapper = findByTestAttrib(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render logo', () => {
        const logo = findByTestAttrib(component, 'logoImg');
        expect(logo.length).toBe(1)
    });
});
