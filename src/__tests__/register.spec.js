import React from 'react';
import {shallow} from '../setupTests';
import RegisterComponent from "../components/profile/register/component";

describe('Register Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<RegisterComponent/>);
    });

    it('should render with an email field', () => {
        expect(wrapper.find('#email').length).toEqual(1);
    });

    it('should render with a password field', () => {
        expect(wrapper.find('#password').length).toEqual(1);
    });

    it('should render with a password field', () => {
        expect(wrapper.find('#firstName').length).toEqual(1);
    });

    it('should render with a password field', () => {
        expect(wrapper.find('#lastName').length).toEqual(1);
    });

    it('should render with a password field', () => {
        expect(wrapper.find('#about').length).toEqual(1);
    });
});
