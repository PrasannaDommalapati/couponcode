import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import UserProfile from '../../../__services__/user-profile';
import './component.scss';

export const LoginComponent = () => (
    <div className="login">
        <Formik
            initialValues={
                {
                    email: '',
                    password: ''
                }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    UserProfile.login(values)
                        .then(() => this.props.history.push('/dashboard'))
                        .catch(error => console.log(`Login un successful ${error}.`));
                    setSubmitting(false);
                }, 500);
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email()
                    .required('Email Required'),
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
                        </FormGroup>
                        {errors.email &&
                            touched.email && <div className="input-feedback">{errors.email}</div>}

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
                        </FormGroup>
                        <div className="actions">
                            <a href="/forgot">Don't remember your password?</a>
                            <Button type="submit">Login</Button>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    </div>
);


// export default class LoginComponent extends Component {

//     constructor(props) {
//         super(props);

//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//         this.validateForm = this.validateForm.bind(this);
//     }

//     // componentDidMount() {

//     //   console.log(this.state.loggedIn);
//     //
//     //      fetch('http://localhost:5005/users')
//     //             .then(res => res.json())
//     //             .then(users => Paginator.paginate(users))
//     //             .then(console.log)
//     // }


//     validateForm = () => {

//         let email = this.state.email,
//             password = this.state.password;
//         let validPassRegex = new RegExp('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W)){7,20}');

//         if (!!email && !!password && validPassRegex.test(password)) {
//             this.setState({ validForm: true })
//         } else {
//             this.setState({ validForm: false })
//         }
//     }

//     handleChange = event => {
//         const { id, value } = event.target;
//         this.setState({ [id]: value });
//         this.validateForm();
//     };

//     handleSubmit = event => {
//         event.preventDefault();

//         const data = {
//             email: this.state.email,
//             password: this.state.password
//         };

//         this.state.validForm && UserProfile.login(data)
//             .then(() => this.props.history.push('/dashboard'))
//             .catch(error => console.log(`Login un successful ${error}.`));

//     };

//     render() {
//         return (
//             <div className="loginForm">
//                 <Formik
//                     validationSchema={Yup.object().shape({
//                         email: Yup.email()
//                             .min(10, 'email should be valid email format.')
//                             .required('email is required'),
//                         password: Yup.password()
//                             .min(7, 'password must be atleast 7 charecter long.')
//                             .required('Password required')
//                     })}
//                     initialValues={{
//                         email: '',
//                         password: ''
//                     }}

//                     onSubmit={(values, actions) => {

//                         setTimeout(() => {
//                             alert(JSON.stringify(values, null, 2))
//                             actions.setSubmitting(false)
//                         }, 1000);
//                     }}

//                     render={({ values, touched, errors, dirty }) => (
//                         <Form>
//                             <Field
//                                 type="email"
//                                 name="email"
//                                 />
//                             <Field
//                                 type="password"
//                                 name="password" 
//                                 />
//                         </Form>
//                     )}
//                 />

//             </div>
//         );

//     }

// }

// return (
//     <Form name="login" onSubmit={this.handleSubmit}>
//         <h1>login</h1>
//         <FormGroup>
//             <Input type="email"
//                    name="loginEmail"
//                    id="email"
//                    value={this.state.email}
//                    placeholder="please enter email here.."
//                    onChange={this.handleChange}/>
//         </FormGroup>
//         <FormGroup>
//             <Input type="password"
//                    name="loginPassword"
//                    id="password"
//                    value={this.state.password}
//                    placeholder="please enter password here.."
//                    onChange={this.handleChange}/>
//         </FormGroup>
//         <div className="actions">
//             <a href="/forgot">Don't remember your password?</a>
//             {this.state.validForm && <Button type="submit">Login</Button>}
//         </div>
//     </Form>
// );