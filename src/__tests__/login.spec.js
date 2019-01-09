import React from 'react';
import {shallow} from '../setupTests';
import LoginComponent from "../components/profile/login/component";

describe('Login Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<LoginComponent/>);
    });

    it('should render with an email field', () => {
        expect(wrapper.find('#email').length).toEqual(1);
    });

    it('should render with a password field', () => {
        expect(wrapper.find('#password').length).toEqual(1);
    });

    it('should render with an actions section',() => {
        expect(wrapper.find('.actions').length).toEqual(1)
    });
});

