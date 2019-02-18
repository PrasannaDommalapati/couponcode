import React from 'react';
import ReactDOM from 'react-dom';
import CouponApp from './components/coupon-app';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import AppHeader from "./components/header/component";
import FooterComponent from "./components/footer/component";
import LoginComponent from "./components/profile/login/component";
import RegisterComponent from "./components/profile/register/component";
import Dashboard from "./components/dashboard/component";
import {PrivateRoute} from './components/route/private-route';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    <Router>
        <div>
            <AppHeader />
            <Route exact path="/" component={CouponApp} />
            <Route exact path="/login" component={LoginComponent} />
            <Route exact path="/register" component={RegisterComponent} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <FooterComponent />
        </div>
    </Router>,
    document.getElementById('root'));
