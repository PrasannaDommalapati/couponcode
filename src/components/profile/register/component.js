import React, {Component} from "react";
import {Button, Form, FormGroup, Input} from 'reactstrap';
import './component.scss';
import UserService from '../../../__services__/register'

export default class RegisterComponent extends Component {

    constructor(props) {
        super(props);



        this.state = {
            user: {
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                about: ''
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            about: this.state.about
        };

        // UserService.signUp(data);
        UserService.register(data);
    }

    render() {
        return (
            <Form name="register" onSubmit={this.handleSubmit}>
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
                <Button>Register</Button>
            </Form>
        );
    }

}