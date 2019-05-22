import React            from 'react';
import Enzyme from '../setupTests';
import faker from 'faker';
import LoginComponent   from "../components/profile/login/component";

describe('Login Component', () => {

    test('form fields and actions are rendered', () => {

        let wrapper = Enzyme.shallow(<LoginComponent/>);

        expect(wrapper.find('#email')).toHaveLength(1);
        expect(wrapper.find('#password')).toHaveLength(1);
        expect(wrapper.find('.actions')).toHaveLength(1)
    });

    test('on submitting the form handle submit function has been called', () => {

        let wrapper = Enzyme.mount(<LoginComponent/>);
        const instance = wrapper.instance();
        instance.handleSubmit= jest.fn();

        wrapper.setState(
            {
                email: faker.internet.email(),
                password: 'Password-123',
                validForm: true
            });


        wrapper.find('form').simulate('submit');
        expect(instance.handleSubmit).toHaveBeenCalledTimes(1);
    });

});
