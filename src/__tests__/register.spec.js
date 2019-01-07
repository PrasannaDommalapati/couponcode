import React from 'react';
import {shallow} from '../setupTests';
import * as Faker from 'faker';
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

    it('should render with a firstName field', () => {
        expect(wrapper.find('#firstName').length).toEqual(1);
    });

    it('should render with a lastName field', () => {
        expect(wrapper.find('#lastName').length).toEqual(1);
    });

    it('should render with an about field', () => {
        expect(wrapper.find('#about').length).toEqual(1);
    });

    it('should respond to on change event and change the state of email', () => {

        let email = Faker.internet.email();
        let event = {
            target: {
                id: 'email',
                value: email
            }
        };
        wrapper.find('#email').simulate('change', event);
        expect(wrapper.state().email).toEqual(email);
    });

    it('should respond to on change event and change the state of password', () => {

        let password = Faker.internet.password();

        let event = {
            target: {
                id: 'password',
                value: password
            }
        };

        wrapper.find('#password').simulate('change', event);
        expect(wrapper.state().password).toEqual(password);
    });

    it('should respond to on change event and change the state of confirm password', () => {

        let password = Faker.internet.password();
        let event = {
            target: {
                id: 'confirmPassword',
                value: password
            }
        };

        wrapper.find('#confirmPassword').simulate('change', event);
        expect(wrapper.state().confirmPassword).toEqual(password);
    });

    it('should respond to on change event and change the state of first name', () => {

        let firstName = Faker.name.firstName();
        let event = {
            target: {
                id: 'firstName',
                value: firstName
            }
        };

        wrapper.find('#firstName').simulate('change', event);
        expect(wrapper.state().firstName).toEqual(firstName);
    });

    it('should respond to on change event and change the state of last name', () => {

        let lastName = Faker.name.lastName();
        let event = {
            target: {
                id: 'lastName',
                value: lastName
            }
        };

        wrapper.find('#lastName').simulate('change', event);
        expect(wrapper.state().lastName).toEqual(lastName);
    });

    it('should respond to on change event and change the state of about', () => {

        let about = Faker.lorem.sentence();
        let event = {
            target: {
                id: 'about',
                value: about
            }
        };

        wrapper.find('#about').simulate('change', event);
        expect(wrapper.state().about).toEqual(about);
    });
});
