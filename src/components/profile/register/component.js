import React, {Component} from "react";
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

export default class RegisterComponent extends Component {
    
    render() {
        return (
            <Form name="register">
                <FormGroup>
                    <Label for="registerEmail">Email</Label>
                    <Input type="email" name="registerEmail" id="registerEmail" placeholder="please enter email here.."/>
                </FormGroup>
                <FormGroup>
                    <Label for="registerPassword">Password</Label>
                    <Input type="password" name="registerPassword" id="registerPassword" placeholder="please enter password here.."/>
                </FormGroup>
            </Form>
        );
    }

}