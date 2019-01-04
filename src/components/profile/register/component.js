import React, {Component} from "react";
import {Button, Form, FormGroup, Input, FormText} from 'reactstrap';
import './component.scss';

export default class RegisterComponent extends Component {
    
    render() {
        return (
            <Form name="register">
                <h1>register</h1>
                <FormGroup>
                    <Input type="email" name="registerEmail" id="registerEmail" placeholder="please enter email here.."/>
                </FormGroup>
                <FormGroup>
                    <Input type="password" name="registerPassword" id="registerPassword" placeholder="please enter password here.."/>
                </FormGroup>
                <FormGroup>
                    <Input type="text" name="firstName" id="firstname" placeholder="First name here"/>
                </FormGroup>
                <FormGroup>
                    <Input type="textarea" name="about" id="about"/>
                </FormGroup>
                <Button>Register</Button>
            </Form>
        );
    }

}