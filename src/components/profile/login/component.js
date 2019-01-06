import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Button, Form, FormGroup, Input} from 'reactstrap';
import './component.scss';

export default class LoginComponent extends Component {



    render() {
        return (
            <Form name="login">
                <h1>login</h1>
                <FormGroup>
                    <Input type="email"
                           name="loginEmail"
                           id="email"
                           placeholder="please enter email here.."/>
                </FormGroup>
                <FormGroup>
                    <Input type="password"
                           name="loginPassword"
                           id="password"
                           placeholder="please enter password here.."/>
                </FormGroup>
                <div className="actions">
                    <Link to="/forgot">Don't remember your password?</Link>
                    <Button>Login</Button>
                </div>
            </Form>
        );
    }

}