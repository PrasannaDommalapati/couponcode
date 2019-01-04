import React, {Component} from "react";
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

export default class LoginComponent extends Component {

    render() {
        return (
            <Form name="login">
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="loginEmail" id="email" placeholder="please enter email here.."/>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="loginPassword" id="password" placeholder="please enter password here.."/>
                </FormGroup>
            </Form>
        );
    }

}