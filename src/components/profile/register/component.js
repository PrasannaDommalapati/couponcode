import React, {Component}               from "react";
import {Button, Form, FormGroup, Input} from 'reactstrap';
import './component.scss';

import UserService from '../../../__services__/user-profile'

const initRegState = {
    email          : '',
    password       : '',
    confirmPassword: '',
    firstName      : '',
    lastName       : '',
    displayName    : '',
    about          : '',
    form           : {valid: false}
};

export default class RegisterComponent extends Component {

    constructor(props) {
        super(props);

        this.state = initRegState;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm = () => {

        const email     = this.state.email,
              password  = this.state.password,
              confirm   = this.state.confirmPassword,
              firstName = this.state.firstName,
              lastName  = this.state.lastName,
              about     = this.state.about;

        const validPassRegex = new RegExp('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W)){7,20}');

        let valid = !!email && !!password && !!confirm && !!firstName && !!lastName && !!about && validPassRegex.test(password) &&
            validPassRegex.test(confirm) &&
            (password === confirm);

        this.setState({ form: {valid}});
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
        this.validateForm();
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.history.push('/login')
        const data = {
            email    : this.state.email,
            password : this.state.password,
            firstName: this.state.firstName,
            lastName : this.state.lastName,
            about    : this.state.about
        };

        this.state.validForm && console.log(data);
        console.log(this.props.history)
        // UserService.signUp(data);
        UserService.register(data)
                   .then(() => this.props.history.push('/login'));

    };

    render() {
        return (
            <Form id="register" onSubmit={this.handleSubmit}>
                <h1>register</h1>
                <FormGroup>
                    <Input type="email"
                           name="registerEmail"
                           id="email"
                           placeholder="please enter email here.."
                           onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Input type="password"
                           name="registerPassword"
                           id="password"
                           placeholder="please enter password here.."
                           onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Input type="password"
                           name="confirmPassword"
                           id="confirmPassword"
                           placeholder="please confirm password here.."
                           onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Input type="text"
                           name="firstName"
                           id="firstName"
                           placeholder="First name here"
                           onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Input type="text"
                           name="lastName"
                           id="lastName"
                           placeholder="Last name here"
                           onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Input type="textarea"
                           name="about"
                           id="about"
                           onChange={this.handleChange}/>
                </FormGroup>
                {this.state.form.valid && <Button type="submit">Register</Button>}
            </Form>
        );
    }

}