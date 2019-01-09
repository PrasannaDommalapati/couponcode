import React, {Component} from "react";
import {Button, Form, FormGroup, Input} from 'reactstrap';
import './component.scss';
import LoginComponent from "../login/component";
import {Redirect} from "react-router-dom";

// import UserService from '../../../__services__/register'

export default class RegisterComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            displayName: '',
            about: '',
            validForm: false

        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm = () => {

        if (this.state.email &&
            this.state.password &&
            this.state.firstName &&
            this.state.lastName &&
            this.state.about) {
            this.setState({validForm: true})
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
        this.validateForm();
    };

    handleSubmit = event => {
        event.preventDefault();

        const data = {
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            about: this.state.about
        };

        !this.state.validForm && console.log(data);
        // UserService.signUp(data);
        // UserService.register(data).then(() => {
        //                 return <Redirect to="/login"/>
        //             })

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
                {this.state.validForm && <Button type="submit">Register</Button>}
            </Form>
        );
    }

}