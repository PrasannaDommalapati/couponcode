import React from 'react';
import {shallow} from '../setupTests';
import LoginComponent from "../components/profile/login/component";

describe('Login Component', () => {
    it('should render with an email field', () => {
        const wrapper = shallow(<LoginComponent/>);
        // expect(wrapper.find('.form-control').children()).toBe(true)
    });
});
