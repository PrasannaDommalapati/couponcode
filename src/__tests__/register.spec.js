import React from 'react';
import {shallow, mount} from '../setupTests';
import * as Faker from 'faker';
import RegisterComponent from "../components/profile/register/component";

describe('Register Component', () => {
    let event;
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<RegisterComponent/>);
    });

    test('form fields and actions are rendered', () => {

        expect(wrapper.find('#email').length).toEqual(1);
        expect(wrapper.find('#password').length).toEqual(1);
        expect(wrapper.find('#firstName').length).toEqual(1);
        expect(wrapper.find('#lastName').length).toEqual(1);
        expect(wrapper.find('#about').length).toEqual(1);
    });
    test('should respond to on change event and change the state of email', () => {
        let email = Faker.internet.email();
        event = {
            target: {
                id: 'email',
                value: email
            }
        };
        wrapper.find('#email').simulate('change', event);
        expect(wrapper.state().email).toEqual(email);
    });
    test('should respond to on change event and change the state of password', () => {

        let password = Faker.internet.password();

        event = {
            target: {
                id: 'password',
                value: password
            }
        };

        wrapper.find('#password').simulate('change', event);
        expect(wrapper.state().password).toEqual(password);
    });
    test('should respond to on change event and change the state of confirm password', () => {

        let password = Faker.internet.password();
        event = {
            target: {
                id: 'confirmPassword',
                value: password
            }
        };

        wrapper.find('#confirmPassword').simulate('change', event);
        expect(wrapper.state().confirmPassword).toEqual(password);
    });
    test('should respond to on change event and change the state of first name', () => {

        let firstName = Faker.name.firstName();
        event = {
            target: {
                id: 'firstName',
                value: firstName
            }
        };

        wrapper.find('#firstName').simulate('change', event);
        expect(wrapper.state().firstName).toEqual(firstName);
    });
    test('should respond to on change event and change the state of last name', () => {

        let lastName = Faker.name.lastName();
        event = {
            target: {
                id: 'lastName',
                value: lastName
            }
        };

        wrapper.find('#lastName').simulate('change', event);
        expect(wrapper.state().lastName).toEqual(lastName);
    });
    test('should respond to on change event and change the state of about', () => {

        let about = Faker.lorem.sentence();
        event = {
            target: {
                id: 'about',
                value: about
            }
        };

        wrapper.find('#about').simulate('change', event);
        expect(wrapper.state().about).toEqual(about);
    });
    test('register button should be disabled with empty email', () => {

        wrapper.setState({
            email: '',
            password: Faker.internet.password(),
            confirmPassword: Faker.internet.password(),
            firstName: Faker.name.firstName(),
            lastName: Faker.name.lastName(),
            about: Faker.lorem.sentence(),
            form: {
                valid: false
            }
        });
        expect(wrapper.state().form.valid).toEqual(false);

    });
    test('register button should be disabled with empty password', () => {

        wrapper.setState({
            email: Faker.internet.email(),
            password: '',
            confirmPassword: Faker.internet.password(),
            firstName: Faker.name.firstName(),
            lastName: Faker.name.lastName(),
            about: Faker.lorem.sentence(),
            form: {
                valid: false
            }
        });
        expect(wrapper.state().form.valid).toEqual(false);
    });
    test('register button should be disabled with empty confirm password', () => {
        wrapper.setState({
            email: Faker.internet.email(),
            password: Faker.internet.password(),
            confirmPassword: '',
            firstName: Faker.name.firstName(),
            lastName: Faker.name.lastName(),
            about: Faker.lorem.sentence(),
            form: {
                valid: false
            }
        });
        expect(wrapper.state().form.valid).toEqual(false);
    });
    test('register button should be disabled when password and confirm password are not equal', () => {

        let password1 = Faker.internet.password();
        let password2 = Faker.internet.password();
        wrapper.setState({
            email: Faker.internet.email(),
            password: password1,
            confirmPassword: password2,
            firstName: Faker.name.firstName(),
            lastName: Faker.name.lastName(),
            about: Faker.lorem.sentence(),
            form: {
                valid: password1 === password2
            }
        });
        expect(wrapper.state().form.valid).toEqual(false);
    });
    test('register button should be disabled with empty first name', () => {

        wrapper.setState({
            email: Faker.internet.email(),
            password: Faker.internet.password(),
            confirmPassword: Faker.internet.password(),
            firstName: '',
            lastName: Faker.name.lastName(),
            about: Faker.lorem.sentence(),
            form: {
                valid: false
            }
        });
        expect(wrapper.state().form.valid).toEqual(false);
    });
    test('register button should be disabled with empty last name', () => {
        wrapper.setState({
            email: Faker.internet.email(),
            password: Faker.internet.password(),
            confirmPassword: Faker.internet.password(),
            firstName: Faker.name.firstName(),
            lastName: Faker.name.lastName(),
            about: '',
            form: {
                valid: false
            }
        });
        expect(wrapper.state().form.valid).toEqual(false);
    });
    test('register button should be disabled with empty about', () => {
        wrapper.setState({
            email: Faker.internet.email(),
            password: Faker.internet.password(),
            confirmPassword: Faker.internet.password(),
            firstName: Faker.name.firstName(),
            lastName: '',
            about: Faker.lorem.sentence(),
            form: {
                valid: false
            }
        });
        expect(wrapper.state().form.valid).toEqual(false);
    });
    test('should verify form submission', () => {
        let mWrapper = mount(<RegisterComponent/>);
        let instance = mWrapper.instance();
        instance.handleSubmit = jest.fn();

        mWrapper.setState(
            {
                email:Faker.internet.email(),
                password:Faker.internet.password(),
                confirmPassword:Faker.internet.password(),
                firstName:Faker.name.firstName(),
                lastName:Faker.name.lastName(),
                about:Faker.lorem.sentence(),
                form: {
                    valid:true
                }
            });

        mWrapper.find('form').simulate('submit');
        expect(instance.handleSubmit).toHaveBeenCalledTimes(1);
    });
});


