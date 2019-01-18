import React            from 'react';
import Enzyme from '../setupTests';
import LoginComponent   from "../components/profile/login/component";

describe('Login Component', () => {

    test('form fields and actions are rendered', () => {

        let wrapper = Enzyme.shallow(<LoginComponent/>);

        expect(wrapper.find('h1').text()).toBe('login');
        expect(wrapper.find('#email').length).toEqual(1);
        expect(wrapper.find('#password').length).toEqual(1);
        expect(wrapper.find('.actions').length).toEqual(1)
    });

    test('on submitting the form handle submit function has been called', () => {

        let wrapper = Enzyme.mount(<LoginComponent/>);
        const instance = wrapper.instance();
        instance.handleSubmit= jest.fn();

        expect(wrapper.state().validForm).toEqual(false);
        wrapper.setState({email: 'test@example.com', password: 'Password-123', validForm: true});
        expect(wrapper.state().validForm).toEqual(true);

        wrapper.find('form').simulate('submit');
        expect(instance.handleSubmit).toHaveBeenCalledTimes(1);
    });

});
