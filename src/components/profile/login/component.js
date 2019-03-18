import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import UserProfile from '../../../__services__/user-profile';
import './component.scss';
export default class LoginComponent extends React.Component {

    handleSubmit = (values, actions) => {
        actions.setSubmitting(true);
        const { history } = this.props;
        UserProfile.login(values)
            .then(() => history.push('/dashboard'))
            .then(() => actions.setSubmitting(false))
            .catch(error => console.log(`Login un successful ${error}.`));
    }

    render() {
        return (<div className="login">
            <Formik
                initialValues={
                    {
                        email: '',
                        password: ''
                    }}
                onSubmit={this.handleSubmit}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email()
                        .required('Email Required.'),
                    password: Yup.string()
                        .min(7, 'password must be atleast 7 charecters long')
                        .required('Password required.')
                })}
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset,
                    } = props;
                    return (
                        <Form name="login" onSubmit={handleSubmit}>
                            <FormGroup>
                                <Input
                                    id="email"
                                    placeholder="Enter your email"
                                    type="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.email && touched.email ? 'text-input error' : 'text-input'
                                    }
                                />
                                {errors.email &&
                                    touched.email && <div className="text-input error">{errors.email}</div>}
                            </FormGroup>

                            <FormGroup>
                                <Input type="password"
                                    name="password"
                                    id="password"
                                    value={values.password}
                                    placeholder="please enter password here.."
                                    onChange={handleChange}
                                    className={
                                        errors.password && touched.password ? 'text-input error' : 'text-input'
                                    } />
                                {errors.password &&
                                    touched.password && <div className="input-feedback">{errors.password}</div>}
                            </FormGroup>
                            <div className="actions">
                                <a href="/forgot">Don't remember your password?</a>
                                <Button type="submit">Login</Button>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>);
    }
}